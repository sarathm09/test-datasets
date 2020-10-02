import countries from './datasets/countries'
import dockername from './datasets/dockername'
import got from './datasets/got'
import harrypotter from './datasets/harrypotter'
import lorem from './datasets/lorem'
import marvel from './datasets/marvel'
import pokemon from './datasets/pokemon'
import quotes from './datasets/quotes'
import randString from './datasets/randstring'
import space from './datasets/space'
import spells from './datasets/spell'
import starWars from './datasets/starwars'
import tbbt from './datasets/tbbt'

const names = [got.getRandomName, harrypotter.getRandomName, marvel.getRandomName, pokemon.getRandomName, starWars.getRandomName, tbbt.getRandomName]

const NUMBER_OF_NAMES = names.length

const getRandomName = () => names[Math.floor(Math.random() * NUMBER_OF_NAMES)]()

const getRandomNames = (n = 1) =>
    Array(n)
        .fill('')
        .map(() => names[Math.floor(Math.random() * NUMBER_OF_NAMES)]())

export { getRandomName, getRandomNames, countries, dockername, got, harrypotter, lorem, marvel, pokemon, quotes, randString, space, spells, starWars, tbbt }
export default { getRandomName, getRandomNames, countries, dockername, got, harrypotter, lorem, marvel, pokemon, quotes, randString, space, spells, starWars, tbbt }
