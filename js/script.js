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

        function showModal() {
          let modalContainer = document.querySelector('#modal-container');
              modalContainer.classList.add('is-visible');
        }

        function hideModal() {
          let modalContainer = document.querySelector('#modal-container');
          modalContainer.classList.remove('is-visible');
        }

        function addListItem(pokemon) {
            let ulList = document.querySelector('.pokemon_list');
            let itemList = document.createElement('li');
            let itemButton = document.createElement('button');
            itemButton.innerText = pokemon.name;
            itemButton.classList.add('my_button');
            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';
            modalContainer.appendChild(modal);
            modal.appendChild(closeButtonElement);
            itemList.appendChild(itemButton);
            ulList.appendChild(itemList);
            closeButtonElement.addEventListener('click', hideModal)
            itemButton.addEventListener('click', function(){
              showModal();
              showDetails(pokemon);
            });
        };

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
                  showDetails();
                  showModal();
              });
          }

          window.addEventListener('keydown', (e) => {
            let modalContainer = document.querySelector('#modal-container');
            if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
              hideModal();  
            }
          });
          
          
            let modalContainer = document.querySelector('#modal-container');
            modalContainer.addEventListener('click', (e) => {
            // Since this is also triggered when clicking INSIDE the modal
            // We only want to close if the user clicks directly on the overlay
            let target = e.target;
            if (target === modalContainer) {
              hideModal();
            }
          });


        return {
            add:add,
            getAll: getAll,
            addListItem: addListItem,
            loadList: loadList,
            loadDetails: loadDetails,
            showDetails: showDetails,
            showModal: showModal,
        }; 
})();

//pokemonRepository.add({ name: 'Mewtwo', types: ['unkown'], weight: 40 });
//console.log(pokemonRepository.getAll());


pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });