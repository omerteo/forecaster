const fs = require('fs');

function csvToJson(csv) {
  const lines = csv.split(/\r?\n/).filter(Boolean);
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    // Handle quoted fields with commas
    const values = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current);
    const obj = {};
    headers.forEach((h, i) => {
      const v = values[i] ?? '';
      obj[h] = v !== '' && !isNaN(Number(v)) ? Number(v) : v;
    });
    return obj;
  });
}

function convertCsvFileToJsonFile(csvPath, jsonPath) {
  const csv = fs.readFileSync(csvPath, 'utf8');
  const json = csvToJson(csv);
  fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2), 'utf8');
  console.log(`Converted ${csvPath} to ${jsonPath}`);
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 2) {
    console.error('Usage: node csv-to-json.js <input.csv> <output.json>');
    process.exit(1);
  }
  convertCsvFileToJsonFile(args[0], args[1]);
}
