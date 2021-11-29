import { API } from './utils.js';
import{view} from './view.js';

document.addEventListener("DOMContentLoaded", ()=>{
    fetch(API)
    .then((response)=>response.json())
    .then((data)=>console.log(data));
});

// console.log(view);