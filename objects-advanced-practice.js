var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function addSales(array) {
  var sum = 0;
  for (var i = 0;i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

function addTaxes(totals, taxes){
  return totals * taxes;
}

function calculateSalesTax(salesData, taxRates) {
 // Implement your code here
 var report = {};
  for(var i = 0; i < salesData.length ; i++){
   if(report[salesData[i].name] === undefined){
     report[salesData[i].name] = {
       totalSales: 0,
       totalTaxes: 0
     }
   }

   report[salesData[i].name].totalSales += addSales(companySalesData[i].sales);
   report[salesData[i].name].totalTaxes += addTaxes(addSales(companySalesData[i].sales), taxRates[salesData[i].province]);
 }
 console.log(report);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
