let expenses=[];

function addExpense(){
    const expenseName=document.getElementById("expense").value.trim();
    const expenseAmount=parseFloat(document.getElementById("amount").value.trim());

    if (expenseName === "" || isNaN(expenseAmount) || expenseAmount <= 0){
        alert("Please enter a valid expense name and amount.");
        return;
    }

    const expense = {name: expenseName, amount: expenseAmount};
    expenses.push(expense);

    const expenseList=document.getElementById("expense-list");

    const expenseElement=document.createElement("div");
    expenseElement.className="expense";

    const expenseNameElement=document.createElement("span");
    expenseNameElement.textContent=expenseName;


    const expenseAmountElement=document.createElement("span");
    expenseAmountElement.textContent=expenseAmount.toFixed(2);


    const deleteButtonElement=document.createElement("button");
    deleteButtonElement.className="delete-btn";
    deleteButtonElement.textContent="Delete";
    deleteButtonElement.onclick=function(){
        expenses=expenses.filter(e => e !== expense);
        expenseElement.remove();
        updateTotal();
    };

    expenseElement.appendChild(expenseNameElement);
    expenseElement.appendChild(expenseAmountElement);
    expenseElement.appendChild(deleteButtonElement);

    expenseList.appendChild(expenseElement);

    updateTotal();

    document.getElementById("expense").value= "";
    document.getElementById("amount").value= "";
    document.getElementById("expense").focus();


}

function updateTotal(){
    const totalExpenses=expenses.reduce((total,expense) => total + expense.amount, 0);
    document.getElementById("total").textContent=totalExpenses.toFixed(2);
}

















