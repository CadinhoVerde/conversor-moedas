const convertButton = document.querySelector(".convert-btn")
const currencySelectFrom = document.querySelector(".currency-select-from")
const currencySelectTo = document.querySelector(".currency-select-to")
const swapButton = document.querySelector(".swap-btn")


// <--------------swap botao------------->
function swapCurrency(){
    const selectValue1 = currencySelectFrom.value
    const selectValue2 = currencySelectTo.value

    currencySelectFrom.value = selectValue2
    currencySelectTo.value = selectValue1

    changeCurrency()
    convertValues()

}

swapButton.addEventListener("click", swapCurrency)


// <--------------conversor------------->

function convertValues(){  
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const fromValue = document.getElementById("fromValue")
    const convertedValue = document.getElementById("convertedValue")


    const dolarToday = 5.55
    const euroToday = 6.06
    const libraToday = 7.08
    const ieneToday = 0.038
    const btcToday = 337782.26
    const ethToday = 14884.70
    const realToday = 1

// <-----moeda1----->

    if (currencySelectFrom.value == "real" ){
        fromValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "dolar" ){
        fromValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "euro" ){
        fromValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "libra" ){
        fromValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "iene" ){
        fromValue.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency", currency: "JPY"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "btc") {
        const btcValue = inputCurrencyValue / btcToday;
        fromValue.innerHTML = `BTC ${btcValue.toFixed(6)}`; 
    }

    if (currencySelectFrom.value == "eth") {
        const ethValue = inputCurrencyValue / ethToday;
        fromValue.innerHTML = `ETH ${ethValue.toFixed(6)}`; 
    }
   


// <------moeda2----->

    if (currencySelectTo.value == "real" ){
        convertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (currencySelectTo.value == "dolar" ){
        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectTo.value == "euro" ){
        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelectTo.value == "libra" ){
        convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectTo.value == "iene" ){
        convertedValue.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency", currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }

    if (currencySelectTo.value == "btc") {
        const btcValue = inputCurrencyValue / btcToday;
        convertedValue.innerHTML = `BTC ${btcValue.toFixed(6)}`; 
    }

    if (currencySelectTo.value == "eth") {
        const ethValue = inputCurrencyValue / ethToday;
        convertedValue.innerHTML = `ETH ${ethValue.toFixed(6)}`; 
    }

}



//  <------------------trocar moeda----------------->

function changeCurrency(){ 
    const nameCurrency = document.getElementById("currency-name1")
    const nameCurrencyConverted = document.getElementById("currency-name2")
    const currencyImage = document.getElementById("token-currency")
    const currencyImageConverted = document.getElementById("token-converted")
    
    if (currencySelectFrom.value == "real"){
        nameCurrency.innerHTML = "Real"
        currencyImage.src = "assets/img/real.png"
    }
    if (currencySelectFrom.value == "dolar"){
        nameCurrency.innerHTML = "Dólar"
        currencyImage.src = "assets/img/dolar.png"
        
    }
    if (currencySelectFrom.value == "euro"){
        nameCurrency.innerHTML = "Euro"
         currencyImage.src = "assets/img/euro.png"
    }
    if (currencySelectFrom.value == "libra"){
        nameCurrency.innerHTML = "Libra Esterlina"
         currencyImage.src = "assets/img/libra.png"
    }
    if (currencySelectFrom.value == "iene"){
        nameCurrency.innerHTML = "Iene Japônes"
         currencyImage.src = "assets/img/iene.png"
    }
    if (currencySelectFrom.value == "btc"){
        nameCurrency.innerHTML = "Bitcoin"
         currencyImage.src = "assets/img/bitcoin.png"
    }
    if (currencySelectFrom.value == "eth"){
        nameCurrency.innerHTML = "Ethereum"
         currencyImage.src = "assets/img/ethereum.png"
    }

// <!-----------bloco2------>

    if (currencySelectTo.value == "real"){
        nameCurrencyConverted.innerHTML = "Real"
        currencyImageConverted.src = "assets/img/real.png"
    }
    if (currencySelectTo.value == "dolar"){
        nameCurrencyConverted.innerHTML = "Dólar"
        currencyImageConverted.src = "assets/img/dolar.png"
        
    }
    if (currencySelectTo.value == "euro"){
        nameCurrencyConverted.innerHTML = "Euro"
         currencyImageConverted.src = "assets/img/euro.png"
    }
    if (currencySelectTo.value == "libra"){
        nameCurrencyConverted.innerHTML = "Libra Esterlina"
         currencyImageConverted.src = "assets/img/libra.png"
    }
    if (currencySelectTo.value == "iene"){
        nameCurrencyConverted.innerHTML = "Iene Japônes"
         currencyImageConverted.src = "assets/img/iene.png"
    }
    if (currencySelectTo.value == "btc"){
        nameCurrencyConverted.innerHTML = "Bitcoin"
         currencyImageConverted.src = "assets/img/bitcoin.png"
    }
    if (currencySelectTo.value == "eth"){
        nameCurrencyConverted.innerHTML = "Ethereum"
         currencyImageConverted.src = "assets/img/ethereum.png"
    }
    
    convertValues()

}


currencySelectFrom.addEventListener("change", changeCurrency)
currencySelectTo.addEventListener("change", changeCurrency)


convertButton.addEventListener("click", convertValues)




