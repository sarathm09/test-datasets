import got from './datasets/got'
import tbbt from './datasets/tbbt'
import space from './datasets/space'
import lorem from './datasets/lorem'
import quotes from './datasets/quotes'
import spells from './datasets/spells'
import marvel from './datasets/marvel'
import pokemon from './datasets/pokemon'
import starWars from './datasets/starwars'
import countries from './datasets/countries'
import dockername from './datasets/dockername'
import randString from './datasets/randstring'
import harrypotter from './datasets/harrypotter'

const names = [got.getRandomName, harrypotter.getRandomName, marvel.getRandomName, pokemon.getRandomName, starWars.getRandomName, tbbt.getRandomName]

const NUMBER_OF_NAMES = names.length

const getRandomName = () => names[Math.floor(Math.random() * NUMBER_OF_NAMES)]()

const getRandomNames = (n = 1) =>
    Array(n)
        .fill('')
        .map(() => names[Math.floor(Math.random() * NUMBER_OF_NAMES)]())

export { getRandomName, getRandomNames, countries, dockername, got, harrypotter, lorem, marvel, pokemon, quotes, randString, space, spells, starWars, tbbt }
export default { getRandomName, getRandomNames, countries, dockername, got, harrypotter, lorem, marvel, pokemon, quotes, randString, space, spells, starWars, tbbt }
