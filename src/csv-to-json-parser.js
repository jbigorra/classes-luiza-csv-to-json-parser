const fs = require('fs');

const csvString = fs.readFileSync('input-data/UsersList.tsv', { encoding: 'UTF-8' });
const data = csvString.split('\n');
const headers = data[0];
const dataRows = data.slice(1, data.length);
console.log(dataRows);
