import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    // Read inventory and orders data
    const inventoryPath = path.join(process.cwd(), 'app', 'raw', 'inventory.json');
    const ordersPath = path.join(process.cwd(), 'orders.json');
    const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
    const orders = JSON.parse(fs.readFileSync(ordersPath, 'utf8'));

    // Optional: allow user to send a prompt
    const { prompt = '' } = await req.json().catch(() => ({}));

    // Compose a summary for Gemini
    const summary = `Here is the current inventory data (first 5 rows):\n${JSON.stringify(inventory.slice(0, 5), null, 2)}\n\nHere are the orders data (first 5 rows):\n${JSON.stringify(orders.slice(0, 5), null, 2)}\n`;
    const fullPrompt = `${prompt}\n\nBased on the above inventory and orders data, predict how the inventory is holding up against the orders. Highlight any potential shortages, surpluses, or trends.`;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(summary + fullPrompt);
    const aiPrediction = result.response.text();

    return NextResponse.json({
      aiPrediction,
      summary,
      sampleInventory: inventory.slice(0, 5),
      sampleOrders: orders.slice(0, 5)
    });
  } catch (error) {
    console.error('[POST /api/inventory-prediction] Error:', error);
    return NextResponse.json({ error: 'Failed to generate prediction.' }, { status: 500 });
  }
}
