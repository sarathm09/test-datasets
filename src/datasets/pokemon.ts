// Data from: https://www.kaggle.com/rounakbanik/pokemon
import { pokemon } from './pokemonData';

const NUMBER_OF_POKEMON = pokemon.length;

const getRandomPokemon = () =>
  pokemon[Math.floor(Math.random() * NUMBER_OF_POKEMON)];

const getRandomPokemons = (n = 1) =>
  Array(n)
    .fill('')
    .map(() => pokemon[Math.floor(Math.random() * NUMBER_OF_POKEMON)]);

const getRandomName = () =>
  pokemon[Math.floor(Math.random() * NUMBER_OF_POKEMON)].name;

const getRandomNames = (n = 1) =>
  Array(n)
    .fill('')
    .map(() => pokemon[Math.floor(Math.random() * NUMBER_OF_POKEMON)].name);

export { getRandomName, getRandomNames, getRandomPokemon, getRandomPokemons };
export default {
  getRandomName,
  getRandomNames,
  getRandomPokemon,
  getRandomPokemons,
};
