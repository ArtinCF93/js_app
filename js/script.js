let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'


    
        function add(pokemon) {
            if (pokemon.name){
                pokemonList.push(pokemon);
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
            itemButton.addEventListener('click', function(event){
                let target = event.target;
                target.classList.toggle('clickon');
                showDetails(pokemon)
            });
        }

        function loadList() {
            return fetch(apiUrl).then(function (response) {
              return response.json();
            }).then(function (json) {
              json.results.forEach(function (item) {
                let pokemon = {
                  name: item.name,
                  detailsUrl: item.url
                };
                add(pokemon);
              });
            }).catch(function (e) {
              console.error(e);
            })
          }

          function loadDetails(item) {
            let url = item.detailsUrl;
            return fetch(url).then(function (response) {
              return response.json();
            }).then(function (details) {
              // Now we add the details to the item
              item.imageUrl = details.sprites.front_default;
              item.height = details.height;
              item.types = details.types;
            }).catch(function (e) {
              console.error(e);
            });
          }

          function showDetails(item) {
              loadDetails(item).then(function () {
                  console.log(item)
              });
          }

        return {
            add:add,
            getAll: getAll,
            addListItem: addListItem,
            loadList: loadList,
            loadDetails: loadDetails,
            showDetails: showDetails,
        }; 
})();

//pokemonRepository.add({ name: 'Mewtwo', types: ['unkown'], weight: 40 });
//console.log(pokemonRepository.getAll());


pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });