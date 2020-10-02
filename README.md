# test-datasets

A collection of dataset that can be used to different projects and tests for random text generation. 

[![npm version](https://badge.fury.io/js/test-datasets.svg)](https://www.npmjs.com/package/test-datasets) [![npm](https://img.shields.io/npm/dt/test-datasets?style=plastic)](https://www.npmjs.com/package/test-datasets) [![node-current](https://img.shields.io/node/v/test-datasets?style=plastic)](https://www.npmjs.com/package/test-datasets)

## Installation

Make sure you have Node.js installed in your system. Open a Terminal/Command line window and type:

```shell
npm i test-datasets
```

## Usage

Import the library into your code and use it as follows:

```js
// import the datasets
import ds from 'test-datasets'
// or using node require
const ds = require('test-datasets')


// Generate a random name
ds.getRandomName()
// Generate 10 random names
ds.getRandomNames(10)

// Get a country name
ds.countries.getRandomCountry()

// Get a random Harry Potter character
ds.harrypotter.getRandomCharacter()
ds.harrypotter.getRandomName()

// Get a random Harry Potter spell
ds.spells.getRandomSpell()

// Get a random string from Regex
ds.randString.getRandomStringFromRegex('[a-z]{1,10}') // 'gsberhdykn', 'uquxlpmv', 'orxpzvfqe' etc
ds.randString.getRandomStringFromRegex('HELLO|WORLD') // 'HELLO' or 'WORLD'

// Get a random Game of Thrones character name
ds.got.getRandomName()

// Get a random Pokemon
ds.pokemon.getRandomPokemon()

// Generate a Lorem Ipsum string of given length
ds.lorem.generateLorem(30) // 'Velit aliqua eu officia fugia.'

// Get a name similar to what Docker generates
ds.dockername.getRandomDockerName() // 'Amazing Heisenberg'

// Get a random Marvel character
ds.marvel.getRandomName()

// Get a random character from Star Wars
ds.starWars.getRandomCharacter()

// Get a random character from The Big Bang Theory
ds.tbbt.getRandomName()

// Get some random celestial object or planet
ds.space.getRandomCelestialObject()
ds.space.getRandomPlanet()

// Get a random quote
ds.quotes.getRandomQuote()


// Available methods
const ds = {
    getRandomName: () => doMagic(),
    getRandomNames: () => doMagic(),
    countries: {
        getRandomCountry: () => doMagic(),
        getRandomCountries: () => doMagic()
    },
    dockername: {
        getRandomDockerName: () => doMagic(),
        getRandomDockerNames: () => doMagic(),
        getRandomName: () => doMagic(),
        getRandomNames: () => doMagic()
    },
    got: {
        getRandomCharacter: () => doMagic(),
        getRandomCharacters: () => doMagic(),
        getRandomName: () => doMagic(),
        getRandomNames: () => doMagic(),
        getRandomHouse: () => doMagic(),
        getRandomHouses: () => doMagic()
    },
    harrypotter: {
        getRandomCharacter: () => doMagic(),
        getRandomCharacters: () => doMagic(),
        getRandomHouse: () => doMagic(),
        getRandomHouses: () => doMagic(),
        getRandomName: () => doMagic(),
        getRandomNames: () => doMagic(),
        getRandomWand: () => doMagic(),
        getRandomWands: () => doMagic()
    },
    lorem: { generateLorem: () => doMagic() },
    marvel: {
        getRandomName: () => doMagic(),
        getRandomNames: () => doMagic()
    },
    pokemon: {
        getRandomName: () => doMagic(),
        getRandomNames: () => doMagic(),
        getRandomPokemon: () => doMagic(),
        getRandomPokemons: () => doMagic()
    },
    quotes: {
        getRandomQuote: () => doMagic(),
        getRandomQuotes: () => doMagic()
    },
    randString: {
        getRandomString: () => doMagic(),
        getRandomStringWithoutLength: () => doMagic(),
        getRandomStringFromRegex: () => doMagic()
    },
    space: {
        getRandomCelestialObject: () => doMagic(),
        getRandomCelestialObjectName: () => doMagic(),
        getRandomCelestialObjects: () => doMagic(),
        getRandomPlanet: () => doMagic(),
        getRandomPlanetName: () => doMagic(),
        getRandomPlanets: () => doMagic()
    },
    spells: {
        getRandomSpell: () => doMagic(),
        getRandomSpells: () => doMagic()
    },
    starWars: {
        getRandomCharacter: () => doMagic(),
        getRandomCharacters: () => doMagic(),
        getRandomName: () => doMagic(),
        getRandomNames: () => doMagic()
    },
    tbbt: {
        getRandomName: () => doMagic(),
        getRandomNames: () => doMagic()
    }
}
```


## Contribute to this repo
Feel free to contribute any dataset to this repo by raising a PR :)


---

## Data Source
All these data are taken form data sources publicly available in the internet and I don't own any of it. 

The datasets were collected and brought to one place as I love most of these shows/data and I like making them available as a utility that anyone can use. 

All the rights belong to the corresponding data/franchise owner and if you have any issue with this being made available in this repo, request you to let me know and I will happily remove it.