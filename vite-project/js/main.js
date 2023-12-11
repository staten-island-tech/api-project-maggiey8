import '../css/style.css'
import {DOMSelectors} from './dom'

async function inject(URL, URL1) {
    try {
    let response = await fetch(URL);
    let data = await response.json();
    let response1 = await fetch(URL1);
    let data1 = await response1.json();
    console.log(data);
    console.log(data1)       
    document.querySelector('.container').insertAdjacentHTML(
        'beforeend', `<div class="gallery"><img src=${data.sprites.front_default} alt=""><h2>${data1.color.name}</h2></div>`
    )
    DOMSelectors.input.style.backgroundColor = '#ffffff'
    } catch (error) {
        console.log(error)
        DOMSelectors.input.value = (error, "This Pokémon doesn't exist")
        DOMSelectors.input.style.backgroundColor = '#ee242c'
    }  
    }
    
    function URLget() {
    let URL = `https://pokeapi.co/api/v2/pokemon/${DOMSelectors.input.value.toLowerCase()}`
    let URL1 = `https://pokeapi.co/api/v2/pokemon-species/${DOMSelectors.input.value.toLowerCase()}/`
    console.log(URL1)
    console.log(URL);
    inject(URL, URL1)
    }

    function clearFields() {
        DOMSelectors.input.value = ''
    }

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
}
)

DOMSelectors.input.addEventListener("click", function() {
    DOMSelectors.input.value =''
})



document.getElementById('eyedropper').addEventListener('click', function() {
    const resultElement = document.getElementById('result');
    const eyeDropper = new EyeDropper();

    eyeDropper.open().then((result) => {
    resultElement.textContent = result.sRGBHex;
    resultElement.style.backgroundColor = result.sRGBHex;
})
})


