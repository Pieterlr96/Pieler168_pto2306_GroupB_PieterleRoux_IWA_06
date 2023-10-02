const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

if (hourOfDay !== null && minuteOfDay !== null && hourOfDay === 00 && minuteOfDay === 00) {
    const taxPrecent = parseFloat(tax)
	const taxAsDecimal = taxPrecent / 100 
    const taxAmount = taxAsDecimal * 800
  const startingAfterTax = salary - taxAmount
	const balance = startingAfterTax - transport - food - rent
    console.log('R',balance.toFixed(2))
}
	
