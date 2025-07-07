import { PrismaClient } from '../app/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Count total records
  const total = await prisma.itemDemand.count();

  // Find min/max/avg for amount and quantity
  const amounts = await prisma.itemDemand.findMany({ select: { amount: true } });
  const quantities = await prisma.itemDemand.findMany({ select: { quantity: true } });
  const amountVals = amounts.map(a => a.amount).filter(a => typeof a === 'number');
  const quantityVals = quantities.map(q => q.quantity).filter(q => typeof q === 'number');

  const minAmount = Math.min(...amountVals);
  const maxAmount = Math.max(...amountVals);
  const avgAmount = amountVals.reduce((a, b) => a + b, 0) / amountVals.length;

  const minQuantity = Math.min(...quantityVals);
  const maxQuantity = Math.max(...quantityVals);
  const avgQuantity = quantityVals.reduce((a, b) => a + b, 0) / quantityVals.length;

  // Count missing/nulls for each field
  const sample = await prisma.itemDemand.findMany({ take: 100 });
  type ItemDemand = {
    id: string;
    internalId: number;
    documentNumber: string;
    amount: number;
    quantity: number;
    item: string;
    itemCategory: string;
    date: Date;
    shippingState: string;
    shippingZip: string;
    shipVia: string;
    unit: string;
    model: string;
  };
  const fields: (keyof ItemDemand)[] = [
    'id', 'internalId', 'documentNumber', 'amount', 'quantity', 'item', 'itemCategory', 'date', 'shippingState', 'shippingZip', 'shipVia', 'unit', 'model'
  ];
  const nullCounts: Record<string, number> = {};
  for (const field of fields) {
    nullCounts[field] = sample.filter((row: ItemDemand) => row[field] == null || row[field] === '').length;
  }

  // Print summary
  console.log('--- ItemDemand Data Summary ---');
  console.log('Total records:', total);
  console.log('Amount: min', minAmount, 'max', maxAmount, 'avg', avgAmount.toFixed(2));
  console.log('Quantity: min', minQuantity, 'max', maxQuantity, 'avg', avgQuantity.toFixed(2));
  console.log('Null/missing values in first 100 rows:', nullCounts);
  console.log('Sample row:', sample[0]);

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
