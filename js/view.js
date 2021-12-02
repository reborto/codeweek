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
        <button class="btnAddress"><strong>address</strong></button>
        <p>${user.phone}</p>
        <p>${user.website}</p>
        <button class="btnGeo"><strong>geo</strong></button>
        </article>
        
        `;



        
    }
    // const btnAddress= document.querySelector(".btnAddress");

    // btnAddress.addEventListener('click', (event)=>{
    //     console.log(event.target)

    //     document.innerHTML=
    
    //     `
    //     <div class="address">
    //     <p>${user.address.city}</p>
    //     </div>
    //     `

    // })

    render(container, schede);
};



export{disegnaTutto};



