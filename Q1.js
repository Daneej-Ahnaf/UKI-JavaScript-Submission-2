//1
//Given an array of objects representing transactions, write a function to group transactions by type



let transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 }
];

function groupByType(transactions) {
    let grouped = {};

    transactions.forEach((transaction) => {
        // Check if the type key already exists in the grouped object
        if (!grouped[transaction.type]) {
            // If it doesn't exist, create an array for that type
            grouped[transaction.type] = [];
        }
        // Push the transaction into the appropriate array
        grouped[transaction.type].push(transaction);
    });

    return grouped;
}

console.log(groupByType(transactions));
