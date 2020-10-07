// Data from: https://www.kaggle.com/rounakbanik/pokemon
import { pokemon } from './data/pokemon'

const NUMBER_OF_POKEMON = pokemon.length

const getAllPokemon = (id?: number, generations: number[] = [1, 2, 3, 4, 5, 6, 7]) => {
    if (!!id) return pokemon[id]
    let filteredPokemon = pokemon.filter(p => generations.includes(p.generation))
    return filteredPokemon
}

const getRandomPokemon = (id?: number, generations: number[] = [1, 2, 3, 4, 5, 6, 7]) => {
    if (!!id) return pokemon[id]
    let filteredPokemon = pokemon.filter(p => generations.includes(p.generation))
    return filteredPokemon[Math.floor(Math.random() * filteredPokemon.length)]
}

const getRandomPokemons = (n = 1) =>
    Array(n)
        .fill('')
        .map(() => pokemon[Math.floor(Math.random() * NUMBER_OF_POKEMON)])

const getRandomName = (id?: number, generations: number[] = [1, 2, 3, 4, 5, 6, 7]) => getRandomPokemon(id, generations).name

const getRandomNames = (n = 1) =>
    Array(n)
        .fill('')
        .map(() => pokemon[Math.floor(Math.random() * NUMBER_OF_POKEMON)].name)

export { getRandomName, getRandomNames, getRandomPokemon, getRandomPokemons }
export default {
    getAllPokemon,
    getRandomName,
    getRandomNames,
    getRandomPokemon,
    getRandomPokemons
}
