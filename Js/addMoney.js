// console.log("Add money btn")
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('btn clicked');
    const addMoney = document.getElementById('add-amount').innerText;
    // console.log(addMoney);
    const addMoneyNumber = parseFloat(addMoney);
    // console.log(addMoneyNumber);
    const newBalance = addMoneyNumber + 25000;
    // console.log(newBalance);
    document.getElementById('add-amount').innerText = newBalance;
})