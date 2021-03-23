const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });




function createTransaction(transactions) {
    user.transactions.push(transactions)

    if (transactions.type === 'credit') {
        user.balance += transactions.value
    }
    if (transactions.type === 'debit') {
        user.balance -= transactions.value
    }
}


function getHigherTransactionByType(typeOfTransaction) {
    let higherTransaction = { type: typeOfTransaction, value: 0 }

    for (transaction of user.transactions) {

        if (transaction.type == typeOfTransaction && transaction.value > higherTransaction.value) {
            higherTransaction.value = transaction.value
        }
    }
    console.log(higherTransaction)
}


function getAvaregeTransaction() {
    let avagareTransinction = 0

    for (transaction of user.transactions) {
        avagareTransinction += transaction.value

    }

    console.log(avagareTransinction / user.transactions.length)
}

function getTransactionsCount() {
    let transactionsCount = { credit: 0, debit: 0 }

    for (transaction of user.transactions) {

        if (transaction.type === 'credit') {
            transactionsCount.credit += 1
        }
        if (transaction.type === 'debit') {
            transactionsCount.debit += 1

        }
    }
    console.log(transactionsCount)
}
console.log(`o do seu saldo é de ${user.balance}`)
getHigherTransactionByType("credit")
getHigherTransactionByType("debit")
getAvaregeTransaction()
getTransactionsCount()