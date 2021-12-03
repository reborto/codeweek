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
        <h2>${user.username}</h2>
        <h4>${user.name}</h4>
        <p>${user.email}</p>

        <button id="btnAddress" link="${user.address.street}"><strong>address</strong></button>
        <div id="openAddress"></div>

        <p>${user.phone}</p>
        <p>${user.website}</p>
        <button class="btnGeo"><strong>company</strong></button>
        </article>
        
        `;
        
    }
    render(container, schede);
    
    return schede;
};

const btnAddress= document.getElementById("btnAddress")
console.log(btnAddress)

export{disegnaTutto};



