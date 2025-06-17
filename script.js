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

    }
    catch(error){
        console.log(error);

        imgElement.style.display = "none";
        errorMsg.style.display = "block";
    }
}