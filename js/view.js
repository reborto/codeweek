import { render, API } from "./utils.js";

const view = (id=0)=>{
    // console.log(id);
    fetch(`${API}/${id}}`)
    .then(response=>response.json())
    .then((user)=>{
        const container = document.querySelector("#container")
        render(container,
            
            `
            <article>
            <h3>${user.username}</h3>
            <h4>${user.name}</h4>
            <p>${user.email}</p>
            <p>${user.address.city}</p>
            </article>
            `
            ) 
    })
    // console.log(user.address.city)
};

export{view};