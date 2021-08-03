let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Blastoise', types: ['water'], weight: 85 },
        { name: 'Charizard', types: ['fire', 'flying'], weight: 90 },
        { name: 'Venasaur', types: ['grass', 'poison'], weight: 100 },
    ];


    
        function add(pokemonAdd) {
            if (pokemonAdd.name && pokemonAdd.types && pokemonAdd.weight){
                pokemonList.push(pokemonAdd);
            } else {
                console.log('Not a Pokemon')
            }
        }
        function getAll() {
            return pokemonList;
        }
        function addListItem(pokemon) {
            let ulList = document.querySelector('.pokemon_list');
            let itemList = document.createElement('li');
            let itemButton = document.createElement('button');
            itemButton.innerText = pokemon.name;
            itemButton.classList.add('my_button');
            itemList.appendChild(itemButton);
            ulList.appendChild(itemList);
        }
        return {
            add:add,
            getAll: getAll,
            addListItem: addListItem,
        }; 
})();

pokemonRepository.add({ name: 'Mewtwo', types: ['unkown'], weight: 40 });
console.log(pokemonRepository.getAll());


pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
}
)