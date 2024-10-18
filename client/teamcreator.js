
        
        function getRandomIntInclusive(min, max)
        {
            const minCeiled = Math.ceil(min);
            const maxFloored = Math.floor(max);
            return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
            // The maximum is inclusive and the minimum is inclusive

        };

        function getPokemonIndex(){
            let index = getRandomIntInclusive(0, 1025);
            let number = "";
            if (index<10) {
            number = `00${index+1}`;
            } else if(index<100) {
                number = `0${index+1}`;
            } else {number = `${index+1}`};
            return number;
        }

        
        
        

        function whosThatPokemon(i){
            let getBall = document.getElementById("ball"+i);
            if (getBall.src=="./public/assets/pokeball-pokemon.svg"){
                getBall.src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/"+getPokemonIndex()+".png";

            }
        
        }