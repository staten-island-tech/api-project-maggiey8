import '../css/style.css'
import {DOMSelectors} from './dom'

function getColors() {
    //smth here????
    let main = 'rgb value here (from the sprite) (how do i read the rgb from the sprite'
}

let URL = `https://pokeapi.co/api/v2/pokemon-species/${DOMSelectors.input.value}`

async function getData(URL) {
    try {
        const response = await fetch(URL);
/*          if (response.status !=200) {
            throw new Error(response.statusText)
        }  */
        const data = await response.json();
        document.querySelector('h1').textContent = data.species.name;
    } catch (error) {
        console.log(error, "not good")
    }    
}


DOMSelectors.submit.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(URL)
    getData(URL);
}
)

async function PLEASEWORK(URL) {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
}

PLEASEWORK(URL);