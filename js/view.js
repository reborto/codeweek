import { render } from "./utils.js";


const disegnaTutto = (listaUtenti) => {
    const container = document.querySelector(".utenti");
    // console.log(listaUtenti);

    let schede = '';

    for (let index = 0; index < listaUtenti.length; index=index+1) {
        const user = listaUtenti[index];
        // console.log(user); 
        
        schede = schede+ //schede=+
        `
        <article>
        <h2><img src="graph/Risorsa 2.svg">${user.username}</h2>
        <h4>${user.name}</h4>
        <p><img src="graph/Risorsa 2.svg">${user.email}</p>
        <p>${user.address.city}</p>
        <p>${user.phone}</p>
        <p>${user.website}</p>
        <p>${user.company}</p>
        </article>
        
        `;


    }

    render(container, schede);
};


export{disegnaTutto};



