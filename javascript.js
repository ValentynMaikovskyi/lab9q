const header = document.querySelector('header');
const section = document.querySelector('section');


let url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'

fetch(url).then(async function(response) {
    let data = await response.json();
    populateHeader(data);
    showHeroes(data);
})

function populateHeader(jsonObj){
    header.innerHTML = `
    <h1>${jsonObj['squadName']}</h1>
    <p>HomeTown:${jsonObj['homeTown']} //
    Formed: ${jsonObj['formed']} </p>
    `
}

function showHeroes(jsonObj){
    section.innerHTML = '';

    const heroes = jsonObj['members'];

    heroes.forEach((hero) => {
        let article = `
        <article> 

        <h2> Secret identity: ${hero.secretIdentity}</h2>

        <p> Superpowers :</p>
        
        <ul> 
        ${hero.powers.reduce((powers, power) => powers + 
        `<li> ${power}</li>`, '')}
        </article>
        `


        section.innerHTML += article;
    });
}

