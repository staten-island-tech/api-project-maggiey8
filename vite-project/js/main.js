import '../css/style.css'
import {DOMSelectors} from './dom'

function getColors() {
    //smth with api here????
    let main = 'rgb value here (from the sprite) (how do i read the rgb from the sprite'
}

const URL = 'https://pokeapi.co/api/v2/pokemon/ditto'

async function getData(URL) {
    try {
        const resonse = await fetch(URL);
        if (Response.status !=200) {
            throw new Error(response.statusText)
        }
        const data = await response.json();
        DOMSelectors.submit.addEventlistener("submit", function(event) {
            event.preventDefault();

        })
    } catch (error) {
        console.log(error, "not good")
    }    
}

getData();