async function fetchRandom(){
    const imgElement = document.getElementById("pokemonSprite");
    const errorMsg = document.getElementById("errorMsg");
    const nameInput = document.getElementById("pokemonName");

    try {
        const randomId = Math.floor(Math.random() * 1025) + 1;
        console.log(`Id aleatório: ${randomId}`);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        if (!response.ok) {
            throw new Error("could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonName = data.name

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        errorMsg.style.display = "none";

        nameInput.value = pokemonName;

        showType(data);
        showAbilities(data);
    }
    catch {
        console.log(error);
        imgElement.style.display = "none";
        errorMsg.style.display = "block";
    }
}


async function fetchData(){

    const imgElement = document.getElementById("pokemonSprite");
    const errorMsg = document.getElementById("errorMsg");

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);


        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        errorMsg.style.display = "none";

        showType(data);
        showAbilities(data);

    }
    catch(error){
        console.log(error);

        imgElement.style.display = "none";
        errorMsg.style.display = "block";
    }
}

function showType (data){
    const pokemonType = document.getElementById("pokemonType");
    
    const types = data.types.map(t => t.type.name).join(", ");
    pokemonType.textContent = `Type: ${types}`;
}

function showAbilities (data) {
    const pokemonAbilities = document.getElementById("pokemonAbilities");

    const ability = data.abilities.map(t => t.ability.name).join(", ");
    pokemonAbilities.textContent = `Abilities: ${ability}`; 
}