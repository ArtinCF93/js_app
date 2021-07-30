let pokemonRepository = (function() {
    let pokemonList = [
        {name: 'Blastoise', types: 'water', weight: 85},
        {name: 'Charizard', types: ['fire','flying'], weight: 90},
        {name: 'Venasaur', types: ['grass','poison'], weight: 100},
    ];

pokemonList.forEach(function(pokemon){
        document.write(pokemon.name + '(Weight:' + pokemon.weight + ')' )
        document.write("<br>");}
)

    return {
        add: function(pokemon1){
            pokemonList.push(pokemon1);
        },
        getAll: function(){
            return pokemonList;
    }
};

})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name:'Mewtwo', types: 'unkown', weight: 40});
console.log(pokemonRepository.getAll());