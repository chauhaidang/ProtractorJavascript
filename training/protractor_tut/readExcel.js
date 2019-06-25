let XLSX = require('xlsx');
let workbook = XLSX.readFile('training/data/test.xlsx');

let first_sheet_name = workbook.SheetNames[0];

let address_of_cell = 'A2';

/* Get worksheet */
var worksheet = workbook.Sheets[first_sheet_name];
 
/* Find desired cell */
var desired_cell = worksheet[address_of_cell];
 
/* Get the value */
var desired_value = (desired_cell ? desired_cell.v : undefined);

let sheet_name_list = workbook.SheetNames;
sheet_name_list.forEach((y) => {
    let worksheet = workbook.Sheets[y];
    //All keys that do not begin with "!" correcspond to cell address
    for(let z in worksheet){
        if(z[0] === '!') {continue;}
        console.log(`${y} ! ${z} = ${JSON.stringify(worksheet[z].v)}`);
    }
});

//console.log(desired_value);