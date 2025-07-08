
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PrismaClient } from '@/app/generated/prisma';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(req: NextRequest) {
  try {
    const { provider = 'gemini', prompt } = await req.json();
    const total = await prisma.itemDemand.count();
    const amountAgg = await prisma.itemDemand.aggregate({ _min: { amount: true }, _max: { amount: true }, _avg: { amount: true } });
    const quantityAgg = await prisma.itemDemand.aggregate({ _min: { quantity: true }, _max: { quantity: true }, _avg: { quantity: true } });
    const minAmount = amountAgg._min.amount;
    const maxAmount = amountAgg._max.amount;
    const avgAmount = amountAgg._avg.amount;
    const minQuantity = quantityAgg._min.quantity;
    const maxQuantity = quantityAgg._max.quantity;
    const avgQuantity = quantityAgg._avg.quantity;
    const sample = await prisma.itemDemand.findMany({ take: 1 });

    const summary = `Total records: ${total}\nAmount: min ${minAmount}, max ${maxAmount}, avg ${avgAmount}\nQuantity: min ${minQuantity}, max ${maxQuantity}, avg ${avgQuantity}\nSample: ${JSON.stringify(sample[0])}`;

    let aiSummary = null;
    const basePrompt = prompt && prompt.trim().length > 0
      ? `${prompt}\n\nHere is a summary of my database:\n${summary}`
      : `Here is a summary of my database:\n${summary}\n\nPlease provide a high-level analysis and any interesting insights.`;

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
      sample: sample[0] || null,
      provider
    });
  } catch (error) {
    console.error("[POST /api/ai-summarize] Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const provider = searchParams.get('provider') || 'gemini';
    const total = await prisma.itemDemand.count();
    const amountAgg = await prisma.itemDemand.aggregate({ _min: { amount: true }, _max: { amount: true }, _avg: { amount: true } });
    const quantityAgg = await prisma.itemDemand.aggregate({ _min: { quantity: true }, _max: { quantity: true }, _avg: { quantity: true } });
    const minAmount = amountAgg._min.amount;
    const maxAmount = amountAgg._max.amount;
    const avgAmount = amountAgg._avg.amount;
    const minQuantity = quantityAgg._min.quantity;
    const maxQuantity = quantityAgg._max.quantity;
    const avgQuantity = quantityAgg._avg.quantity;
    const sample = await prisma.itemDemand.findMany({ take: 1 });

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
  } catch (error) {
    console.error("[GET /api/ai-summarize] Error:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
