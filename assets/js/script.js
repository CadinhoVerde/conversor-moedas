const convertButton = document.querySelector(".convert-btn");

const currencySelectFrom = document.querySelector(".currency-select-from");
const currencySelectTo = document.querySelector(".currency-select-to");

const swapButton = document.querySelector(".swap-btn");

const inputCurrency = document.querySelector(".input-currency");


// <--------------enter------------->
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertButton.click();
    }
});

// <--------------swap botao------------->
function swapCurrency(){
    const selectValue1 = currencySelectFrom.value;
    const selectValue2 = currencySelectTo.value;

    currencySelectFrom.value = selectValue2;
    currencySelectTo.value = selectValue1;

    changeCurrency();
    convertValues();
}

swapButton.addEventListener("click", swapCurrency);


// <--------------conversor------------->
function convertValues(){  
    const inputCurrencyValue = inputCurrency.value.replace(/[^0-9]/g, '');
    const fromValue = document.getElementById("fromValue");
    const convertedValue = document.getElementById("convertedValue");

    const rate = {
        real: 1,
        dolar: 5.55,
        euro: 6.06,
        libra: 7.08,
        iene: 0.038,
        btc: 337782.26,
        eth: 14884.70
    };

    const fromRate = rate[currencySelectFrom.value];
    const toRate = rate[currencySelectTo.value];

    const convertedCurrency = (inputCurrencyValue * fromRate) / toRate;

    // moeda original
    fromValue.innerHTML = new Intl.NumberFormat(undefined, {
        style: "currency", 
        currency: currencySelectFrom.value === "real" ? "BRL" :
                  currencySelectFrom.value === "dolar" ? "USD" :
                  currencySelectFrom.value === "euro" ? "EUR" :
                  currencySelectFrom.value === "libra" ? "GBP" :
                  currencySelectFrom.value === "iene" ? "JPY" :
                  currencySelectFrom.value === "btc" ? "BTC" :
                  currencySelectFrom.value === "eth" ? "ETH" : ""
    }).format(inputCurrencyValue);

    // moeda convertida
    convertedValue.innerHTML = new Intl.NumberFormat(undefined, {
        style: "currency", 
        currency: currencySelectTo.value === "real" ? "BRL" :
                  currencySelectTo.value === "dolar" ? "USD" :
                  currencySelectTo.value === "euro" ? "EUR" :
                  currencySelectTo.value === "libra" ? "GBP" :
                  currencySelectTo.value === "iene" ? "JPY" :
                  currencySelectTo.value === "btc" ? "BTC" :
                  currencySelectTo.value === "eth" ? "ETH" : ""
    }).format(convertedCurrency);
}


//  <------------------trocar moeda----------------->
function changeCurrency(){ 
    const nameCurrency = document.getElementById("currency-name1");
    const nameCurrencyConverted = document.getElementById("currency-name2");
    const currencyImage = document.getElementById("token-currency");
    const currencyImageConverted = document.getElementById("token-converted");

    if (currencySelectFrom.value == "real"){
        nameCurrency.innerHTML = "Real";
        currencyImage.src = "assets/img/real.png";
    }
    if (currencySelectFrom.value == "dolar"){
        nameCurrency.innerHTML = "Dólar";
        currencyImage.src = "assets/img/dolar.png";
    }
    if (currencySelectFrom.value == "euro"){
        nameCurrency.innerHTML = "Euro";
         currencyImage.src = "assets/img/euro.png";
    }
    if (currencySelectFrom.value == "libra"){
        nameCurrency.innerHTML = "Libra";
         currencyImage.src = "assets/img/libra.png";
    }
    if (currencySelectFrom.value == "iene"){
        nameCurrency.innerHTML = "Iene";
         currencyImage.src = "assets/img/iene.png";
    }
    if (currencySelectFrom.value == "btc"){
        nameCurrency.innerHTML = "Bitcoin";
         currencyImage.src = "assets/img/bitcoin.png";
    }
    if (currencySelectFrom.value == "eth"){
        nameCurrency.innerHTML = "Ethereum";
         currencyImage.src = "assets/img/ethereum.png";
    }

    // <!-----------bloco2------------>

    if (currencySelectTo.value == "real"){
        nameCurrencyConverted.innerHTML = "Real";
        currencyImageConverted.src = "assets/img/real.png";
    }
    if (currencySelectTo.value == "dolar"){
        nameCurrencyConverted.innerHTML = "Dólar";
        currencyImageConverted.src = "assets/img/dolar.png";
    }
    if (currencySelectTo.value == "euro"){
        nameCurrencyConverted.innerHTML = "Euro";
         currencyImageConverted.src = "assets/img/euro.png";
    }
    if (currencySelectTo.value == "libra"){
        nameCurrencyConverted.innerHTML = "Libra";
         currencyImageConverted.src = "assets/img/libra.png";
    }
    if (currencySelectTo.value == "iene"){
        nameCurrencyConverted.innerHTML = "Iene";
         currencyImageConverted.src = "assets/img/iene.png";
    }
    if (currencySelectTo.value == "btc"){
        nameCurrencyConverted.innerHTML = "Bitcoin";
         currencyImageConverted.src = "assets/img/bitcoin.png";
    }
    if (currencySelectTo.value == "eth"){
        nameCurrencyConverted.innerHTML = "Ethereum";
         currencyImageConverted.src = "assets/img/ethereum.png";
    }
    
    convertValues();
}


currencySelectFrom.addEventListener("change", changeCurrency);
currencySelectTo.addEventListener("change", changeCurrency);

convertButton.addEventListener("click", convertValues);
