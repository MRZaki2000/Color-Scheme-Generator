// javascript
const seedColor = document.getElementById('seed-color')
const options = document.getElementById('options')
const getSchemeBtn = document.getElementById('get-scheme')
const displayColors = document.getElementById('display-colors')
const displayHex = document.getElementById('display-hex')
let colorsArray = []

function getNewScheme() {
   fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.slice(1)}&mode=${options.value}`)
    .then(res => res.json())
    .then(data => {
        colorsArray = data.colors
        renderColors()
    }) 
}  

getSchemeBtn.addEventListener('click',getNewScheme)
  
function renderColors() {
    let htmlColor = ''
    let htmlHex = ''
    for (let color of colorsArray){
        htmlColor += `<div class="color" style="background-color:${color.hex.value}"></div>`
        htmlHex += `<h4 id="hex-value" class="hex-value">${color.hex.value}</h4>`
    }
    
    displayColors.innerHTML = htmlColor
    displayHex.innerHTML = htmlHex
}

getNewScheme()