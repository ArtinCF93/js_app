let pokemonList = [
    {name: 'Blastoise', types: 'water', weight: 85},
    {name: 'Charizard', types: ['fire','flying'], weight: 90},
    {name: 'Venasaur', types: ['grass','poison'], weight: 100},
];
for (let i=0; i<pokemonList.length; i++){
    if (pokemonList[i].weight <= 89){
        document.write(pokemonList[i].name + '(Weight:' + pokemonList[i].weight + ')' );document.write("<br>");}
    else if (pokemonList[i].weight <= 95){
        document.write(pokemonList[i].name + '(Weight:' + pokemonList[i].weight + ')');document.write("<br>");}
    else if 
    (pokemonList[i].weight <=100){
        document.write(pokemonList[i].name + '(Weight:' + pokemonList[i].weight + ') - Wow! that is big');}
    }
    