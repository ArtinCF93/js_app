let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Blastoise', types: ['water'], weight: 85 },
        { name: 'Charizard', types: ['fire', 'flying'], weight: 90 },
        { name: 'Venasaur', types: ['grass', 'poison'], weight: 100 },
    ];


    return {
        add: function (pokemon1) {
            if (pokemon1.name && pokemon1.types && pokemon1.weight){
                pokemonList.push(pokemon1);
            } else {
                console.log('Not a Pokemon')
            }
        },
        getAll: function () {
            return pokemonList;
        }
    }
}
)();

pokemonRepository.add({ name: 'Mewtwo', types: ['unkown'], weight: 0 });

pokemonRepository.getAll().forEach(function (pokemon) {
    document.write(pokemon.name + '(Weight:' + pokemon.weight + ')')
    document.write("<br>");
}
)