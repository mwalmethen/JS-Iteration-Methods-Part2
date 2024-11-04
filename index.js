// You are given an array representing a series of transactions in a small business. 
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/
function filterIncome() {
    const transactions = [  // array of income and expense values 
        ["income", 1000],
        ["income", 1500],
        ["expense", 500],
        ["expense", 300],
        ["income", 700],
    ];
    const filtered_income = transactions.filter(i_income => i_income[0] === "income"); /* filtering the items
    that are equal to "income" only starting from index 0 that is = "income" */
    return filtered_income;  // returing new array  
}
console.log(filterIncome());



function filterExpense() {   
    const transactions = [    // array of income and expense values 
        ["income", 1000],
        ["income", 1500],
        ["expense", 500],
        ["expense", 300],
        ["income", 700],
    ];
    const filtered_expense = transactions.filter(i_expense => i_expense[0] === "expense"); /* filtering the items
    that are equal to "expense" only! Then starting from the first index  */
    return filtered_expense; // returing new array 
}
console.log(filterExpense());


/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/

function totalIncome() {
    transactions = [  // array of income and expense values 
        ["income", 1000],
        ["income", 1500],
        ["expense", 500],
        ["expense", 300],
        ["income", 700],
    ];
    let filter_income = transactions.filter(i => i[0] === "income"); // filtering only income as before 
    const total = filter_income.reduce((acc, InputValue) => acc + InputValue[1], 0); // getting total of income only
    return total; // returing total income 
}
console.log(totalIncome()); // Calling function output should be 3200




function totalExpense() { 
    transactions = [  // array of income and expense values 
        ["income", 1000],
        ["income", 1500],
        ["expense", 500],
        ["expense", 300],
        ["income", 700],
    ];
   
    let filtered_expense = transactions.filter(e => e[0] === "expense"); // filtering expense only same as before 
    const total = filtered_expense.reduce((acc, InputValue) => acc + InputValue[1], 0); // getting total of expense only 
    return total; // returing the total 
    
}
console.log(totalExpense()); // Calling function output should be 800





/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above  or equal to $500.
       Output 6) [["income", 1000], ["income", 1500], ["expense", 500], ["income", 700]]

******************************************************************/
function totalI_totalE() {
    transactions = [  // array of income and expense values 
        ["income", 1000],
        ["income", 1500],
        ["expense", 500],
        ["expense", 300],
        ["income", 700],
    ];
    /* In the follwing 6 lines of code I combined the process from part 1 and 2 and 
    managed to store all the results in total1, total2 then fonund the substraction 
    of them at the end in a variable called total_all */ 
    let filter_income = transactions.filter(i => i[0] === "income"); // filtering only income as before 
    let total1 = filter_income.reduce((acc, InputValue) => acc + InputValue[1], 0); // getting total of income only
    let filtered_expense = transactions.filter(e => e[0] === "expense"); // filtering only expense as before 
    let total2 = filtered_expense.reduce((acc, InputValue) => acc + InputValue[1], 0); // getting total of expense only
    const total_all = (total1 - total2); // finding the net total 
    return total_all; 
}
console.log(totalI_totalE()); // Calling function output should be 2400


function transactionArray() {
    transactions = [  // array of income and expense values 
        ["income", 1000],
        ["income", 1500],
        ["expense", 500],
        ["expense", 300],
        ["income", 700],
    ];
    const filter = transactions.filter(numbers => numbers[1] >= 500); // filtering the numbers that are >= 500
    return filter; // returing new array
}
console.log(transactionArray()); // Calling function
