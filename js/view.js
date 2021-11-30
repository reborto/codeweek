import { render } from "./utils.js";


const disegnaTutto = (listaUtenti) => {
    const container = document.querySelector(".utenti");


    let schede = '';

    for (let index = 0; index < listaUtenti.length; index = index+1) {
        const user = listaUtenti[index];
        //console.log(user); 
        
        schede = schede+ //schede=+
        `
        <article>
        <h3>${user.username}</h3>
        <h4>${user.name}</h4>
        <p>${user.email}</p>
        <p>${user.address.city}</p>
        </article>
        `;


    }

    render(container, schede);
};


export{disegnaTutto};



