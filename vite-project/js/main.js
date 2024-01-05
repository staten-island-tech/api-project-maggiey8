import '../css/style.css'
import {DOMSelectors} from './dom'

function applyTheme(arr) {
    let mainColor = arr.color.name
    let current = document.body.classList
    if (document.body.classList !== mainColor) {
        document.body.classList.replace(current, mainColor)
    }
}

/* function getRGB(arr) { //help how do i use canvases
    let canvas = document.getElementById('pokeimage')
    let ctx = canvas.getContext('2d')
    const img = new Image()
    img.onload = () => {
        ctx.drawImage(img, 10, 10)
    }
    img.src = `${arr.sprites.front_default}`
    img.alt = `${arr.species.name}`
    console.log(img.src)
    let rgb = ctx.getImageData(0, 0, img.width, img.height);
    console.log(rgb)
} */

async function inject(URL, URL1) {
    try {
    let response = await fetch(URL);
    let data = await response.json();
    if (data.sprites.front_default === null) {
        DOMSelectors.input.value = ("No image available")
    }
    let response1 = await fetch(URL1);
    let data1 = await response1.json();     
    document.querySelector('.container').insertAdjacentHTML(
        'beforeend', `<div class="gallery"><img id='pokeimage' src='${data.sprites.front_default}' alt='${data.species.name}'></img><h2>${data1.color.name}</h2></div>`
    )
    applyTheme(data1)
/*     getRGB(data) */
    } catch (error) {
        console.log(error)
        DOMSelectors.input.value = ("This Pokémon doesn't exist")
        DOMSelectors.input.style.backgroundColor = '#ee242c'
    }  
    }
    
    function URLget() {
    const pokemonInput = DOMSelectors.input.value.toLowerCase()
    if (pokemonInput.includes(' ')) {
        let pokemonInput = DOMSelectors.input.value.toLowerCase().replace(' ', '-')
    }
    let URL = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`
    let URL1 = `https://pokeapi.co/api/v2/pokemon-species/${pokemonInput}`
    console.log(URL1)
    console.log(URL);
    inject(URL, URL1)
    }

    function randomOnLoad() {
        const randomNum =  Math.floor(Math.random() * 1025)
        console.log(randomNum)
        let URL = `https://pokeapi.co/api/v2/pokemon/${randomNum}`
        let URL1 = `https://pokeapi.co/api/v2/pokemon-species/${randomNum}`
        inject(URL, URL1)
    }

    randomOnLoad()

    function clearFields() {
        DOMSelectors.input.value = ''
        DOMSelectors.input.style.backgroundColor = '#ffffff'
    }

//how do i combine these 2 :(
DOMSelectors.submit.addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".container").innerHTML = ""
    URLget()
    clearFields()
}
)

DOMSelectors.input.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        document.querySelector(".container").innerHTML = ""
        URLget()
        clearFields()
    }
    else {
        DOMSelectors.input.style.backgroundColor = '#ffffff'
    } 
}
)

DOMSelectors.input.addEventListener("click", function() {
    clearFields()
    }
)

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return {r,g,b}
}

/* function invertColor(hex) {
   const r = 255 - parseInt(hex.slice(1, 3), 16);
   const g = 255 - parseInt(hex.slice(3, 5), 16);
   const b = 255 - parseInt(hex.slice(5, 7), 16);
   let inverted = {r, g, b}
   return inverted
}
 */

/* document.getElementById('main').addEventListener('click', function() {
    const eyeDropper = new EyeDropper();
    const button = document.getElementById('main')
    eyeDropper.open().then((result) => {
    button.textContent = result.sRGBHex;
    button.style.color = `rgb(${invertColor(result.sRGBHex).r}, ${invertColor(result.sRGBHex).b}, ${invertColor(result.sRGBHex).g}`
    button.style.backgroundColor = result.sRGBHex;
})
}) */

/* document.getElementById('secondary').addEventListener('click', function() {
    const eyeDropper = new EyeDropper();
    const button = document.getElementById('secondary')
    eyeDropper.open().then((result) => {
    button.textContent = result.sRGBHex;    
    button.style.backgroundColor = result.sRGBHex;
    if ((hexToRgb(result.sRGBHex).r*0.299 + hexToRgb(result.sRGBHex).g*0.587 + hexToRgb(result.sRGBHex).b*0.114) < 186) {
        button.style.color = '#ffffff'
    }
    else {
        button.style.color = '#000000'
    }
})
}) */

/* function colorPick(x) {
    const eyeDropper = new EyeDropper();
    const button = document.getElementById(x)
    eyeDropper.open().then((result) => {
    button.textContent = result.sRGBHex;    
    button.style.backgroundColor = result.sRGBHex;
    if ((hexToRgb(result.sRGBHex).r*0.299 + hexToRgb(result.sRGBHex).g*0.587 + hexToRgb(result.sRGBHex).b*0.114) < 186) {
            button.style.color = '#ffffff'
    }
    else {
        button.style.color = '#000000'
        }
    })
}

let allButtons = document.querySelectorAll('.button')
allButtons.forEach((el) => el.addEventListener('click', colorPick(el.textContent.toLowerCase))) */

document.getElementById('main').addEventListener('click', function() {
    const eyeDropper = new EyeDropper();
    const button = document.getElementById('main')
    eyeDropper.open().then((result) => {
    button.textContent = result.sRGBHex;    
    button.style.backgroundColor = result.sRGBHex;
    if ((hexToRgb(result.sRGBHex).r*0.299 + hexToRgb(result.sRGBHex).g*0.587 + hexToRgb(result.sRGBHex).b*0.114) < 150) {
        button.style.color = '#ffffff'
    }
    else {
        button.style.color = '#000000'
    }
})
})

document.getElementById('secondary').addEventListener('click', function() {
    const eyeDropper = new EyeDropper();
    const button = document.getElementById('secondary')
    eyeDropper.open().then((result) => {
    button.textContent = result.sRGBHex;    
    button.style.backgroundColor = result.sRGBHex;
    if ((hexToRgb(result.sRGBHex).r*0.299 + hexToRgb(result.sRGBHex).g*0.587 + hexToRgb(result.sRGBHex).b*0.114) < 150) {
        button.style.color = '#ffffff'
    }
    else {
        button.style.color = '#000000'
    }
})
})

document.getElementById('accent').addEventListener('click', function() {
    const eyeDropper = new EyeDropper();
    const button = document.getElementById('accent')
    eyeDropper.open().then((result) => {
    button.textContent = result.sRGBHex;    
    button.style.backgroundColor = result.sRGBHex;
    if ((hexToRgb(result.sRGBHex).r*0.299 + hexToRgb(result.sRGBHex).g*0.587 + hexToRgb(result.sRGBHex).b*0.114) < 150) {
        button.style.color = '#ffffff'
    }
    else {
        button.style.color = '#000000'
    }
})
})