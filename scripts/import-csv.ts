import { PrismaClient } from '../app/generated/prisma';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const prisma = new PrismaClient();
const csvFilePath = path.join(__dirname, 'raw.csv');

async function main() {
  type ItemDemandRow = {
    'Internal ID': string;
    'Document Number': string;
    'Amount': string;
    'Quantity': string;
    'Item': string;
    'Item Category': string;
    'Date': string;
    'Shipping State/Province': string;
    'Shipping Zip': string;
    'Ship Via': string;
    'Unit': string;
    'Model': string;
  };

  const records: ItemDemandRow[] = [];

  // Read and parse CSV
  await new Promise<void>((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        records.push(row);
      })
      .on('end', resolve)
      .on('error', reject);
  });

  let inserted = 0;
  let skipped = 0;

  for (const row of records) {
    // Check for duplicate by internalId and documentNumber
    const exists = await prisma.itemDemand.findFirst({
      where: {
        internalId: Number(row['Internal ID']),
        documentNumber: row['Document Number'],
      },
    });
    if (exists) {
      skipped++;
      continue;
    }
    await prisma.itemDemand.create({
      data: {
        internalId: Number(row['Internal ID']),
        documentNumber: row['Document Number'],
        amount: parseFloat(row['Amount']),
        quantity: parseFloat(row['Quantity']),
        item: row['Item'],
        itemCategory: row['Item Category'],
        date: new Date(row['Date']),
        shippingState: row['Shipping State/Province'],
        shippingZip: row['Shipping Zip'],
        shipVia: row['Ship Via'],
        unit: row['Unit'],
        model: row['Model'],
      },
    });
    inserted++;
  }

  console.log(`Inserted: ${inserted}, Skipped (duplicates): ${skipped}`);
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
