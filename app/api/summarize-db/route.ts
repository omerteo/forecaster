import { NextResponse } from 'next/server';

// PrismaClient singleton for Next.js (prevents too many connections in dev)
import { PrismaClient } from '@/app/generated/prisma';
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET() {
  // Count total records
  const total = await prisma.itemDemand.count();

  // Find min/max/avg for amount and quantity using aggregation (prevents OOM and stack errors)
  const amountAgg = await prisma.itemDemand.aggregate({
    _min: { amount: true },
    _max: { amount: true },
    _avg: { amount: true },
  });
  const quantityAgg = await prisma.itemDemand.aggregate({
    _min: { quantity: true },
    _max: { quantity: true },
    _avg: { quantity: true },
  });

  const minAmount = amountAgg._min.amount;
  const maxAmount = amountAgg._max.amount;
  const avgAmount = amountAgg._avg.amount;

  const minQuantity = quantityAgg._min.quantity;
  const maxQuantity = quantityAgg._max.quantity;
  const avgQuantity = quantityAgg._avg.quantity;

  // Count missing/nulls for each field
  const sample = await prisma.itemDemand.findMany({ take: 100 });
  const fields = [
    'id', 'internalId', 'documentNumber', 'amount', 'quantity', 'item', 'itemCategory', 'date', 'shippingState', 'shippingZip', 'shipVia', 'unit', 'model'
  ] as const;
  type Field = typeof fields[number];
  const nullCounts: Record<Field, number> = {
    id: 0, internalId: 0, documentNumber: 0, amount: 0, quantity: 0, item: 0, itemCategory: 0, date: 0, shippingState: 0, shippingZip: 0, shipVia: 0, unit: 0, model: 0
  };
  for (const field of fields) {
    nullCounts[field] = sample.filter(row => row[field] == null || row[field] === '').length;
  }

  // Return summary as JSON
  return NextResponse.json({
    total,
    amount: { min: minAmount, max: maxAmount, avg: avgAmount },
    quantity: { min: minQuantity, max: maxQuantity, avg: avgQuantity },
    nullCounts,
    sample: sample[0] || null
  });
}
