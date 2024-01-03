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
    let URL = `https://pokeapi.co/api/v2/pokemon/${DOMSelectors.input.value.toLowerCase()}`
    let URL1 = `https://pokeapi.co/api/v2/pokemon-species/${DOMSelectors.input.value.toLowerCase()}`
    console.log(URL1)
    console.log(URL);
    inject(URL, URL1)
    }

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

/* DOMSelectors.input.addEventListener("click", function() {
    clearFields()
    }
)
 */

document.getElementById('main').addEventListener('click', function() {
    const eyeDropper = new EyeDropper();
    const button = document.getElementById('main')
    eyeDropper.open().then((result) => {
    console.log(result)
    button.textContent = result.sRGBHex;
    //button.style.color =  
    button.style.backgroundColor = result.sRGBHex;
})
})

document.getElementById('secondary').addEventListener('click', function() {
    const eyeDropper = new EyeDropper();
    const button = document.getElementById('secondary')
    eyeDropper.open().then((result) => {
    button.textContent = result.sRGBHex;
    button.style.backgroundColor = result.sRGBHex;
})
})

document.getElementById('accent').addEventListener('click', function() {
    const eyeDropper = new EyeDropper();
    const button = document.getElementById('accent')
    eyeDropper.open().then((result) => {
    button.textContent = result.sRGBHex;
    button.style.backgroundColor = result.sRGBHex;
})
})