import { API, render } from './utils.js';
import { disegnaTutto } from './view.js';

//renderizza tutto il json
// document.addEventListener("DOMContentLoaded", () => {
//     fetch(API)
//         .then((response) => response.json())
//         .then((data) => {
//             // console.log(data);
//             disegnaTutto(data);
            
//         })
// });



function filtro(listaUtenti, letteraIniziale, letteraFinale) {
    const listaFiltrata = [];

    for(let i =0; i < listaUtenti.length; i++) {
        let user = listaUtenti[i];
        if( nomeCominciaCon(user.name, letteraIniziale, letteraFinale ) ) {
            listaFiltrata.push(user);
        }
    }

    console.log(listaFiltrata)
    return listaFiltrata;
}

//bottoni
function onClickBtnAE() {

    fetch(API)
    .then((response) => response.json())
    .then( (data) => filtro(data, 'A', 'E')  )
    .then((listaFiltrata) => disegnaTutto(listaFiltrata) );
}

document.querySelector('#A-E').addEventListener('click', ()=>{
    onClickBtnAE()
})



function onClickBtnFL() {
    fetch(API)
    .then((response) => response.json())
    .then( (data) => filtro(data, 'F', 'L')  )
    .then((listaFiltrata) => disegnaTutto(listaFiltrata) );
}
document.querySelector('#F-L').addEventListener('click', ()=>{
    onClickBtnFL()
})

function onClickBtnMZ() {  
    fetch(API)
    .then((response) => response.json())
    .then( (data) => filtro(data, 'M', 'Z')  )
    .then((listaFiltrata) => disegnaTutto(listaFiltrata) );
}
document.querySelector('#M-Z').addEventListener('click', ()=>{
    onClickBtnMZ()
})

function onClickBtnTutti(){
    fetch(API)
    .then((response) => response.json())
    
    .then((listaFiltrata) => disegnaTutto(listaFiltrata) );
}
document.querySelector('#tutti').addEventListener('click', ()=>{
    onClickBtnTutti()
})

//funzioni
function nomeCominciaCon(nome, letteraIniziale, letteraFinale ) {

    // ci ricaviamo i codici ascii delle due lettere in input
    const startAscii = letteraIniziale.toLowerCase().charCodeAt(0);
    const endAscii = letteraFinale.toLowerCase().charCodeAt(0);

    // vediamo se il nome in input inizia (startsWith) con una lettera che sta nell'intervallo specificato
    let iniziaConLettera = false;
    for( let ascii = startAscii; ascii <= endAscii; ascii++ ) {
        let letter = String.fromCharCode(ascii);
        
        if( nome.toLowerCase().startsWith(letter)) {
            iniziaConLettera = true;
            break;
        }
    }

    return iniziaConLettera;
    
}







// function filtro(data, to) {
//     let arrayIndex;
//     let check = false;

//     for (let i of data) {
//         if (i.name[0].toLowerCase() === to) {
//             arrayIndex = data.indexOf(i) - 1;
//             check = true;
//             break
//         } 

//     }
//     if (check === false) {
//         let prova
//         prova = String.fromCharCode((to.charCodeAt(to)+1));
//         filtro(data, prova);
//     }

//     const arrayAE = [];

//     for (let i = 0; arrayIndex; i++) {
//         arrayAE.push(data[i]);
//     }

//     console.log(arrayAE)
// }


// console.log(letter.charCodeAt(letter))

// document.addEventListener("DOMContentLoaded", ()=>{
// fetch(API)

// })


//console.log(view);
