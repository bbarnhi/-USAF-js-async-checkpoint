//Solution from review session
//function pokemonProcess(file){
    //Error handling -- better method line below
const fetch = require('node-fetch')
const fs = require('fs')

const getPokemonList = (file) => {
    try{
        let data = fs.readFileSync(file)
        // converts list to string, forces all results to lower case, then creates new element on each newline
        let pokemonList = data.toString().toLowerCase.split("\n")
        }
    catch(err){
        console.log("File ", file)
    }
}

function pokemonProcess(fileName){
    const listOfPokemon = getPokemonList(fileName)
    const urlArray = listOfPokemon.map(pokemon => 'https://pokeAPI.co/api/v2/pokemon/#{pokemon}')
    urlArray.forEach(item => {
        fetch(item)
        .then(response => {
            if (!response.ok){
                throw new Error("Pokemon doesnt exist")
            }
            else {
                return response.json()
            }
        })
        .catch(console.log(error.message))
        .then(data => {
            var printString = ""
            var name = data.namename 
            name = name[0].toUpperCase() + name.slice(1, name.length)
            printString += name + ": "
            var typeString = ""
            for(var type in data.types){
                typeString += data.types[type].type.name + ","
            }
            typeString = typeString.slice(0, typeString.length-1)
            printString += typeString
            console.log(printString)
        })
        //.catch(console.log(error))
    })
}

//Calls the specific file
pokemonProcess("input.txt")