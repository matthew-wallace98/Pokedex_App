let pokemonList = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"]
  },
  {
    name: "Charizard",
    height: 1.7,
    types: ["fire", "flying"]
  },
  {
    name: "Squirtle",
    height: 1,
    types: ["water"]
  }
];
for (let i = 0; i < pokemonList.length; i++) {
  let pokemon = pokemonList[i];
  let output = pokemon.name + " (height: " + pokemon.height + ")";
  
  // Add a condition to check the height
  if (pokemon.height > 1.0) {
      output += " - Wow, that's big!";
  }
  //.test
  // Write the output
  document.write(output + "<br>");
}