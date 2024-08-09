const input = document.querySelector("input-currency")

function currencySymbolChange(){
    const inputValue = input.value.replace(/[^0-9]/g, '');
    const currencySymbol = getCurrencySymbol(currencySelectFrom.value)
}

console.log(currencySymbol)



input.addEventListener("input", currencySymbolChange)