const convertBtn = document.querySelector(".convert-btn")
const convertLiterEl = document.querySelector(".converted")
const convertVolEl = document.querySelector(".convert-vol")
const convertMassEl = document.querySelector(".convert-mass")
let inputEl = document.querySelector(".unit-box")

convertBtn.addEventListener('click', function() {
    let inputValue = Number(inputEl.value);
    if (!isNaN(inputValue)) {
		document.querySelector(".error").textContent = ""
        renderConvert(inputValue);
    } else {
        document.querySelector(".error").textContent = "You must type a number!";
    }
});

function renderConvert(elem)
{
	convertMeter(elem)
	convertVolume(elem)
	convertMass(elem)
}
function convertMeter(elem){
	let feet = elem * 3.281
	let meter = elem / 3.281
	convertLiterEl.innerHTML = `${elem} meters = ${ feet.toFixed(3) } feet | ${elem} feet = ${ meter.toFixed(3) } meters`
}

function convertVolume(elem){
	let liters = elem * 0.264
	let gallons = elem / 0.264
	convertVolEl.innerHTML = `${elem} liters = ${ liters.toFixed(3) } gallons | ${elem} gallons = ${ gallons.toFixed(3) } liters`
}

function convertMass(elem)
{
	let kilos = elem * 2.204
	let pounds = elem / 2.204
	convertMassEl.innerHTML = `${elem} kilos = ${ kilos.toFixed(3) } pounds | ${elem} pounds = ${ pounds.toFixed(3) } kilos`
}
