import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dbConnect from '@/lib/mongodb';
import ItemDemand from '@/lib/itemDemand.model';

function checkEnvVars(provider: string) {
  if (provider === 'openai' && !process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not set in environment variables.');
  }
  if (provider === 'gemini' && !process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not set in environment variables.');
  }
}



export async function POST(req: NextRequest) {
  try {
    const { provider = 'gemini', prompt, summary } = await req.json();
    checkEnvVars(provider);

    // Use the provided summary directly
    let aiSummary = null;
    const basePrompt = prompt && prompt.trim().length > 0
      ? `${prompt}\n\nHere is a summary of my database:\n${typeof summary === 'string' ? summary : JSON.stringify(summary, null, 2)}`
      : `Here is a summary of my database:\n${typeof summary === 'string' ? summary : JSON.stringify(summary, null, 2)}\n\nPlease provide a high-level analysis and any interesting insights.`;

    if (provider === 'openai') {
      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: basePrompt }],
        max_tokens: 300,
      });
      aiSummary = completion.choices[0].message?.content;
    } else {
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(basePrompt);
      aiSummary = result.response.text();
    }

    return NextResponse.json({
      summary,
      aiSummary,
      provider
    });
  } catch (error: unknown) {
    console.error("[POST /api/ai-summarize] Error:", error);
    return NextResponse.json(
      { error: typeof error === "object" && error !== null && "message" in error ? (error as { message?: string }).message || "Internal server error" : "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const provider = searchParams.get('provider') || 'gemini';

    checkEnvVars(provider);
    await dbConnect();
    const total = await ItemDemand.countDocuments();
    const amountAgg = await ItemDemand.aggregate([
      { $group: { _id: null, min: { $min: "$amount" }, max: { $max: "$amount" }, avg: { $avg: "$amount" } } }
    ]);
    const quantityAgg = await ItemDemand.aggregate([
      { $group: { _id: null, min: { $min: "$quantity" }, max: { $max: "$quantity" }, avg: { $avg: "$quantity" } } }
    ]);
    const minAmount = amountAgg[0]?.min ?? null;
    const maxAmount = amountAgg[0]?.max ?? null;
    const avgAmount = amountAgg[0]?.avg ?? null;
    const minQuantity = quantityAgg[0]?.min ?? null;
    const maxQuantity = quantityAgg[0]?.max ?? null;
    const avgQuantity = quantityAgg[0]?.avg ?? null;
    const sample = await ItemDemand.find().limit(1);

    const summary = `Total records: ${total}\nAmount: min ${minAmount}, max ${maxAmount}, avg ${avgAmount}\nQuantity: min ${minQuantity}, max ${maxQuantity}, avg ${avgQuantity}\nSample: ${JSON.stringify(sample[0])}`;

    let aiSummary = null;
    const prompt = `Here is a summary of my database:\n${summary}\n\nPlease provide a high-level analysis and any interesting insights.`;

    if (provider === 'openai') {
      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 300,
      });
      aiSummary = completion.choices[0].message?.content;
    } else {
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(prompt);
      aiSummary = result.response.text();
    }

    return NextResponse.json({
      summary,
      aiSummary,
      sample: sample[0] || null,
      provider
    });
  } catch (error: unknown) {
    console.error("[GET /api/ai-summarize] Error:", error);
    return NextResponse.json(
      { error: typeof error === "object" && error !== null && "message" in error ? (error as { message?: string }).message || "Internal server error" : "Internal server error" },
      { status: 500 }
    );
  }
}
