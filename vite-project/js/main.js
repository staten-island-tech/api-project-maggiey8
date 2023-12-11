import '../css/style.css'
import {DOMSelectors} from './dom'

function getColors() {
    //smth here????
    let main = 'rgb value here (from the sprite) (how do i read the rgb from the sprite'
}

async function inject(URL, URL1) {
    try {
    let response = await fetch(URL);
    let data = await response.json();
    let response1 = await fetch(URL1);
    let data1 = await response1.json();
    console.log(data);
    console.log(data1)       
    document.querySelector('h1').insertAdjacentHTML(
        'afterbegin', `<div><img src=${data.sprites.front_default} alt=""><h2>${data1.color.name}</h2></div>`
    )
    } catch (error) {
        console.log(error)
    }  
    }
    

DOMSelectors.submit.addEventListener("click", function(event) {
    let URL = `https://pokeapi.co/api/v2/pokemon/${DOMSelectors.input.value}`
    let URL1 = `https://pokeapi.co/api/v2/pokemon-species/${DOMSelectors.input.value}/`
    event.preventDefault();
    console.log(URL1)
    console.log(URL);
    inject(URL, URL1)
}
)

document.getElementById('eyedropper').addEventListener('click', function() {
    const resultElement = document.getElementById('result');
    const eyeDropper = new EyeDropper();

    eyeDropper.open().then((result) => {
    resultElement.textContent = result.sRGBHex;
    resultElement.style.backgroundColor = result.sRGBHex;
})
})


