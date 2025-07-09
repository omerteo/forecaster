import { NextResponse } from 'next/server';

// PrismaClient singleton for Next.js (prevents too many connections in dev)
import dbConnect from '@/lib/mongodb';
import ItemDemand from '@/lib/itemDemand.model';

export async function GET() {
  await dbConnect();
  // Count total records
  const total = await ItemDemand.countDocuments();

  // Find min/max/avg for amount and quantity using aggregation
  const amountAgg = await ItemDemand.aggregate([
    {
      $group: {
        _id: null,
        min: { $min: "$amount" },
        max: { $max: "$amount" },
        avg: { $avg: "$amount" }
      }
    }
  ]);
  const quantityAgg = await ItemDemand.aggregate([
    {
      $group: {
        _id: null,
        min: { $min: "$quantity" },
        max: { $max: "$quantity" },
        avg: { $avg: "$quantity" }
      }
    }
  ]);
  const minAmount = amountAgg[0]?.min ?? null;
  const maxAmount = amountAgg[0]?.max ?? null;
  const avgAmount = amountAgg[0]?.avg ?? null;
  const minQuantity = quantityAgg[0]?.min ?? null;
  const maxQuantity = quantityAgg[0]?.max ?? null;
  const avgQuantity = quantityAgg[0]?.avg ?? null;

  // Count missing/nulls for each field in a sample
  const sample = await ItemDemand.find().limit(100);
  const fields = [
    'internalId', 'documentNumber', 'amount', 'quantity', 'item', 'itemCategory', 'date', 'shippingState', 'shippingZip', 'shipVia', 'unit', 'model'
  ];
  const nullCounts = Object.fromEntries(fields.map(f => [f, 0]));
  for (const doc of sample) {
    for (const field of fields) {
      if (doc[field] === null || doc[field] === undefined || doc[field] === '') nullCounts[field]++;
    }
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
