const inputEl = document.getElementById("input_el")
const convertEl = document.getElementById("convert_el")
const inputSpan1 = document.getElementById("input_span1")
const inputSpan2 = document.getElementById("input_span2")
const feetResult = document.getElementById("feet_result")
const meterResult = document.getElementById("meter_result")

const inputSpan3 = document.getElementById('input_span3')
const inputSpan4 = document.getElementById('input_span4')
const gallonResult = document.getElementById('gallon_result')
const literResult = document.getElementById('liter_result')

const inputSpan5 = document.getElementById('input_span5')
const inputSpan6 = document.getElementById('input_span6')
const poundResult = document.getElementById('pound_result')
const kiloResult = document.getElementById('kilo_result')

convertEl.addEventListener("click", function() {
    inputSpan1.innerText = inputEl.value
    inputSpan2.innerText = inputEl.value
    console.log(inputEl.value)
    feetResult.innerText = (inputEl.value * 3.281).toFixed(3)
    meterResult.innerText = (inputEl.value * 0.3047851265).toFixed(3)

    inputSpan3.innerText = inputEl.value
    inputSpan4.innerText = inputEl.value
    gallonResult.innerText = (inputEl.value * 0.264).toFixed(3)
    literResult.innerText = (inputEl.value * 3.78787879).toFixed(3)

    inputSpan5.innerText = inputEl.value
    inputSpan6.innerText = inputEl.value
    poundResult.innerText = (inputEl.value * 2.204).toFixed(3)
    kiloResult.innerText = (inputEl.value * 0.4537205082).toFixed(3)
})


