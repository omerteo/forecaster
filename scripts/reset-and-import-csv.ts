import { PrismaClient } from '../app/generated/prisma';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const prisma = new PrismaClient();
const csvFilePath = path.join(__dirname, 'raw.csv');

async function main() {
  // Clear all data from the ItemDemand collection
  await prisma.itemDemand.deleteMany({});
  console.log('All existing ItemDemand records deleted.');

  type ItemDemandRecord = {
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

  const records: ItemDemandRecord[] = [];

  // Read and parse CSV
  await new Promise<void>((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        records.push({
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
        });
      })
      .on('end', resolve)
      .on('error', reject);
  });

  // Bulk insert all records
  if (records.length > 0) {
    await prisma.itemDemand.createMany({ data: records });
    console.log(`Inserted ${records.length} records into ItemDemand.`);
  } else {
    console.log('No records found in CSV.');
  }

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
