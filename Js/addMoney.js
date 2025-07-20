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
    // set the newBalance in UI 
    document.getElementById('add-amount').innerText = newBalance;
})
// Functionality for donate money btn
document.getElementById('donate-btn')
    .addEventListener('click', function () {
        // console.log('donate btn clicked');
        const lessMoney = document.getElementById('add-amount').innerText;
        const totalDonateAmount = document.getElementById('total-donate-amount').innerText;
        // console.log(lessMoney, totalDonateAmount);
        const donateMoney = document.getElementById('donate-amount-input').value;
        // console.log(donateMoney);
        const lessMoneyNumber = parseFloat(lessMoney);
        const donateMoneyNumber = parseFloat(donateMoney);
        const totalDonateAmountNumber = parseFloat(totalDonateAmount);
        // console.log(lessMoneyNumber, donateMoneyNumber, totalDonateAmountNumber);
        const newDonateBalance = donateMoneyNumber + totalDonateAmountNumber;
        // console.log(newDonateBalance);
        const newBalance = lessMoneyNumber - donateMoneyNumber;
        if (isNaN(donateMoney)) {
            alert('Failed to donate money.');
            return;
        }
        if (donateMoneyNumber > lessMoneyNumber) {
            alert('You have not sufficient balance.');
            return;
        }
        else {
            alert('Congratulations! Your donation is completed.')
        }
        // console.log(newBalance);
        document.getElementById('add-amount').innerText = newBalance;

        document.getElementById('total-donate-amount').innerText = newDonateBalance;

    })