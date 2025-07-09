import { NextResponse } from 'next/server';

// PrismaClient singleton for Next.js (prevents too many connections in dev)
import dbConnect from '@/lib/mongodb';
import ItemDemand from '@/lib/itemDemand.model';

export async function GET() {
  await dbConnect();
  // Count total records
  const total = await ItemDemand.countDocuments();

  // Use correct field names as in the database: "Amount" and "Quantity"
  const amountAgg = await ItemDemand.aggregate([
    { $match: { "Amount": { $type: "number" } } },
    {
      $group: {
        _id: null,
        min: { $min: "$Amount" },
        max: { $max: "$Amount" },
        avg: { $avg: "$Amount" }
      }
    }
  ]);
  const quantityAgg = await ItemDemand.aggregate([
    { $match: { "Quantity": { $type: "number" } } },
    {
      $group: {
        _id: null,
        min: { $min: "$Quantity" },
        max: { $max: "$Quantity" },
        avg: { $avg: "$Quantity" }
      }
    }
  ]);
  const minAmount = amountAgg.length > 0 ? amountAgg[0].min : null;
  const maxAmount = amountAgg.length > 0 ? amountAgg[0].max : null;
  const avgAmount = amountAgg.length > 0 ? amountAgg[0].avg : null;
  const minQuantity = quantityAgg.length > 0 ? quantityAgg[0].min : null;
  const maxQuantity = quantityAgg.length > 0 ? quantityAgg[0].max : null;
  const avgQuantity = quantityAgg.length > 0 ? quantityAgg[0].avg : null;

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
