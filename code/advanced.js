/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */
// 5454000
unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

england = null;
for(i =0; i < unitedKingdom.length; i++){

  if(unitedKingdom[i].name == "England"){

    englandObject = unitedKingdom[i]
    englandObject["touristAttractions"] = ["London Eye", "Big Ben"]
    england = englandObject;
  }
}

  // console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

for(i=0; i < unitedKingdom.length; i++){
    if(unitedKingdom[i].capital == "Swansea"){
      wales = unitedKingdom[i]
      wales.capital = "Cardiff"
    }

}


//  console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = null;

for(i=0; i < unitedKingdom.length; i++){
  if(unitedKingdom[i].name == "Northern Ireland"){
    northernIrelandObject = unitedKingdom[i]
    console.log(northernIrelandObject);
    northernIrelandKeys = Object.keys(northernIrelandObject);
  }
}

 console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

for(i=0; i < unitedKingdom.length; i++){
    scotPopulation = unitedKingdom[0].population;
    
    max = 0;
    min = 10000000000000;

    if(unitedKingdom[i].population > max){
      max = unitedKingdom[i].population
    }
    if(unitedKingdom[i].population < min){
      min = unitedKingdom[i].population;
    }
  }
    if(scotPopulation >= max){
      console.log("Scotland has the biggest population");
    } else if(scotPopulation <= min){
      console.log("Scotland has the smallest population");
    } else {
      console.log("Scotland population is somewhere in the middle");
    }
