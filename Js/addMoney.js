// Functionality for add money btn (for admin)
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
// Functionality for donate money btn
document.getElementById('donate-btn')
    .addEventListener('click', function () {
        // console.log('donate btn clicked');
        const lessMoney = document.getElementById('add-amount').innerText;
        // console.log(lessMoney);
        const donateMoney = document.getElementById('donate-amount-input').value;
        // console.log(donateMoney);
        const lessMoneyNumber = parseFloat(lessMoney);
        const donateMoneyNumber = parseFloat(donateMoney);
        // console.log(lessMoneyNumber, donateMoneyNumber);
        const newBalance = lessMoneyNumber - donateMoneyNumber;
        // console.log(newBalance);
        document.getElementById('add-amount').innerText = newBalance;
    })