const currencyOne = document.getElementById('currency-one')
const amtOne = document.getElementById('amount-one')
const currencyTwo = document.getElementById('currency-two')
const amtTwo = document.getElementById('amount-two')

const rateAmt = document.getElementById('rate')
const swapRate = document.getElementById('swap')

function calculate() {
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/fdfc5f41d110add61e3b1dae/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const rate = data.conversion_rates[currency_two];
        rateAmt.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
        amtTwo.value = (amtOne.value * rate).toFixed(2)
    });
}

currencyOne.addEventListener('change', calculate)
amtOne.addEventListener('input', calculate)
currencyTwo.addEventListener('change', calculate)
amtTwo.addEventListener('input',calculate)


swapRate.addEventListener('click', () => {
    const tempSwap = currencyOne.value
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = tempSwap;
    calculate();
})
 calculate()









