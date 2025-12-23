const prompt = require("prompt-sync")();

//date and time
const now = new Date();

const date = now.toLocaleDateString("en-GB").replace(/\//g, "-");
const time = now.toLocaleTimeString("en-GB");

//input helpers

function getLegitLetter(promptText){
    while(true){    
    const value = prompt(promptText).trim();

        if(value === ""){
         console.log("User input cannot be empty");
            continue;
        }
        return value;
        
        
    }//whileclosed
    

}//getligitletter
  

function getLegitInt(promptText){
    while(true){
    const value = prompt(promptText).trim();
    const num = parseInt(value);
        
            if(isNaN(num)){
                console.log("Enter a valid whole number.");
                continue;
            }
            if(num <= 0){
                console.log("Number cannot be less that or equals zero.");
                continue;
            }
            return num;
    }

}//getlegitNumber

//getlegitDpube;
function getLegitDouble(promptText){
    while(true){
    const value = prompt(promptText).trim();
    const num = parseFloat(value);
    
            if(isNaN(num)){
                console.log("Value must be a number. Try again!!");
                continue;
            }
            return num;
            if(num <= 0){
                console.log("Value cannot be zero or less. Try again!!");
                continue;
            }
            return num;
    }

}//getlegitdouble

//print invoice
function printInvoice(date, time, customerName, items, quantities, prices, discount, cashierName) {
    console.log(`
    SEMICOLON STORES
    MAIN BRANCH
    LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
    TEL: 03293828343 
    Date: ${date}  Time: ${time}
    Cashier: ${cashierName}
    Customer Name: ${customerName}    
    `);   
    
    console.log("=================================================================");
    console.log(
        " ".padEnd(15) +
        "ITEM".padStart(10) +
        "QTY ".padStart(10) +
        "PRICE".padStart(10) +
        "TOTAL(₦)".padStart(15)    
    );
    console.log("-----------------------------------------------------------------");
    
        let subTotal = 0;
         
        for(let index = 0; index < items.length; index++){
        const itemTotal = quantities[index] * prices[index];
        subTotal += itemTotal;

        console.log(
            " ".padEnd(15) +
            items[index].padStart(10) + 
            String(quantities[index]).padStart(10) +
            prices[index].toFixed(2).padStart(10) +
            itemTotal.toFixed(2).padStart(15)
        );
            
}//loopclosed

        const discountValue = (discount / 100.0) * subTotal;
        const VAT = 0.175 * (subTotal - discountValue);
        const billTotal = subTotal - discountValue + VAT;
    console.log("-----------------------------------------------------------------");
    console.log(" ".padEnd(15) + "Sub Total:".padStart(15) + subTotal.toFixed(2).padStart(15));
    console.log(" ".padEnd(15) + "Discount:".padStart(15) + discountValue.toFixed(2).padStart(15));
    console.log(" ".padEnd(15) + "VAT @ 17.50%:".padStart(15) + VAT.toFixed(2).padStart(15));

   console.log("=================================================================");

    console.log(" ".padEnd(15) + "Bill Total:".padStart(15) + billTotal.toFixed(2).padStart(15));

    console.log("=================================================================");

    console.log(`              THIS IS NOT A RECEIPT KINDLY PAY ${billTotal.toFixed(2)}`);

    console.log("=================================================================");

        return subTotal;
    }//printinvoice

//amount paid    
function amountPaid(promptText, billTotal){
    while(true){
    const value = prompt(promptText).trim();
    const amount = parseFloat(value);
    
        if (isNaN(amount)){
            console.log("Enter a valid number");
            continue;
        }
            
        if(amount < billTotal){
            console.log("Insufficient amount. Try again!!");
            continue;
        }
        console.log("Payment Successful");
        return amount;
    }//while
    
}//amount paid
    
function printReceipt(date, time, customerName, items, quantities, prices, discount, cashierName, subTotal, amountPaidValue) {
    console.log(`
    SEMICOLON STORES
    MAIN BRANCH
    LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.
    TEL: 03293828343 
    Date: ${date}  Time: ${time}
    Cashier: ${cashierName}
    Customer Name: ${customerName}    
    `);   
    
    console.log("=================================================================");
    console.log(
        " ".padEnd(15) +
        "ITEM".padStart(10) +
        "QTY ".padStart(10) +
        "PRICE".padStart(10) +
        "TOTAL(₦)".padStart(15)    
    );
    console.log("-----------------------------------------------------------------");
    
        for(let index = 0; index < items.length; index++){
        const itemTotal = quantities[index] * prices[index];
        subTotal += itemTotal;

        console.log(
            " ".padEnd(15) +
            items[index].padStart(10) + 
            String(quantities[index]).padStart(10) +
            prices[index].toFixed(2).padStart(10) +
            itemTotal.toFixed(2).padStart(15)
        );
            
}//loopclosed

        const discountValue = (discount / 100.0) * subTotal;
        const VAT = 0.175 * (subTotal - discountValue);
        const billTotal = subTotal - discountValue + VAT;
        const balance = billTotal - amountPaidValue;
    console.log("-----------------------------------------------------------------");
    console.log(" ".padEnd(15) + "Sub Total:".padStart(15) + subTotal.toFixed(2).padStart(15));
    console.log(" ".padEnd(15) + "Discount:".padStart(15) + discountValue.toFixed(2).padStart(15));
    console.log(" ".padEnd(15) + "VAT @ 17.50%:".padStart(15) + VAT.toFixed(2).padStart(15));

   console.log("=================================================================");

    console.log(" ".padEnd(15) + "Bill Total:".padStart(15) + billTotal.toFixed(2).padStart(15));
    console.log(" ".padEnd(15) + "Amount Paid:".padStart(15) + amountPaidValue.toFixed(2).padStart(15));
    console.log(" ".padEnd(15) + "Balance".padStart(15) + balance.toFixed(2).padStart(15));

    console.log("=================================================================");

    console.log("                    THANK YOU FOR YOUR PATRONAGE");

    console.log("=================================================================");

}//printinvoice
        
//main progrm    

const items = [];
const prices = [];
const quantities = [];


const customerName = getLegitLetter("What is the coustomer's name?: ");

do  {
    const item = getLegitLetter("What did the user buy?: ");
    const qty = getLegitInt("How many pieces?: ");
    const price = getLegitDouble("How much per item?: ")

    items.push(item);
    quantities.push(qty);
    prices.push(price);

    var cont = prompt("Would you like to continue (yes/no): ").trim().toLowerCase();
    
    }while(cont == "yes");

    const cashierName = getLegitLetter("What is your name?: ");
    const discount = getLegitInt("How much discount will he get?: ");
    
    const subTotal = printInvoice(date, time, customerName, items, quantities, prices, discount, cashierName);
    
    const paid = amountPaid("How much did the customer give to you?: ", subTotal);

    printReceipt(date, time, customerName, items, quantities, prices, discount, cashierName, subTotal, paid);
