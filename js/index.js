import { API, render } from './utils.js';
import{disegnaTutto} from './view.js';

document.addEventListener("DOMContentLoaded", ()=>{
    fetch(API)
    .then((response)=>response.json())
    .then((data)=> { 
        console.log(data); 
        disegnaTutto(data);
    }) 
});

//console.log(view);
