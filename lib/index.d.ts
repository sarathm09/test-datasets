import countries from './datasets/countries';
import dockername from './datasets/dockername';
import got from './datasets/got';
import harrypotter from './datasets/harrypotter';
import lorem from './datasets/lorem';
import marvel from './datasets/marvel';
import pokemon from './datasets/pokemon';
import quotes from './datasets/quotes';
import randString from './datasets/randstring';
import space from './datasets/space';
import spells from './datasets/spell';
import starWars from './datasets/starwars';
import tbbt from './datasets/tbbt';
declare const getRandomName: () => string;
declare const getRandomNames: (n?: number) => string[];
export { getRandomName, getRandomNames, countries, dockername, got, harrypotter, lorem, marvel, pokemon, quotes, randString, space, spells, starWars, tbbt };
declare const _default: {
    getRandomName: () => string;
    getRandomNames: (n?: number) => string[];
    countries: {
        getRandomCountry: () => string;
        getRandomCountries: (n?: number) => string[];
    };
    dockername: {
        getRandomDockerName: () => string;
        getRandomDockerNames: (n?: number) => string[];
        getRandomName: () => string;
        getRandomNames: (n?: number) => string[];
    };
    got: {
        getRandomCharacter: () => {
            name: string;
            nickname: string;
            houses: string[];
        };
        getRandomCharacters: (n?: number) => {
            name: string;
            nickname: string;
            houses: string[];
        }[];
        getRandomName: () => string;
        getRandomNames: (n?: number) => string[];
        getRandomHouse: () => string;
        getRandomHouses: (n?: number) => string[];
    };
    harrypotter: {
        getRandomCharacter: () => {
            first: string;
            last: string;
            full: string;
            bloodStatus: string;
            birthday: string;
            gender: string;
            house: string;
            wand: string;
        };
        getRandomCharacters: (n?: number) => {
            first: string;
            last: string;
            full: string;
            bloodStatus: string;
            birthday: string;
            gender: string;
            house: string;
            wand: string;
        }[];
        getRandomHouse: () => string;
        getRandomHouses: (n?: number) => string[];
        getRandomName: () => string;
        getRandomNames: (n?: number) => string[];
        getRandomWand: () => string;
        getRandomWands: (n?: number) => string[];
    };
    lorem: {
        generateLorem: (limit?: number) => string;
    };
    marvel: {
        getRandomName: () => string;
        getRandomNames: (n?: number) => string[];
    };
    pokemon: {
        getRandomName: () => string;
        getRandomNames: (n?: number) => string[];
        getRandomPokemon: () => {
            id: string;
            name: string;
            type: string;
            height: string;
            weight: string;
            total: number;
            hp: number;
            attack: number;
            defense: number;
            special_attack: number;
            special_defense: number;
            speed: number;
            base_experience: number;
            evolves_from: string;
        };
        getRandomPokemons: (n?: number) => {
            id: string;
            name: string;
            type: string;
            height: string;
            weight: string;
            total: number;
            hp: number;
            attack: number;
            defense: number;
            special_attack: number;
            special_defense: number;
            speed: number;
            base_experience: number;
            evolves_from: string;
        }[];
    };
    quotes: {
        getRandomQuote: () => {
            content: string;
            author: string;
        };
        getRandomQuotes: (n?: number) => {
            content: string;
            author: string;
        }[];
    };
    randString: {
        getRandomString: (characters?: string, lengthFrom?: number, lengthTo?: number) => string;
        getRandomStringWithoutLength: (characters?: string) => string;
        getRandomStringFromRegex: (regex?: string) => string;
    };
    space: {
        getRandomCelestialObject: () => {
            name: string;
            bodyName: string;
            id: string;
            isPlanet: boolean;
            moons: string[];
        };
        getRandomCelestialObjectName: () => string;
        getRandomCelestialObjects: (n?: number) => {
            name: string;
            bodyName: string;
            id: string;
            isPlanet: boolean;
            moons: string[];
        }[];
        getRandomPlanet: () => {
            name: string;
            bodyName: string;
            id: string;
            isPlanet: boolean;
            moons: string[];
        };
        getRandomPlanetName: () => string;
        getRandomPlanets: (n?: number) => {
            name: string;
            bodyName: string;
            id: string;
            isPlanet: boolean;
            moons: string[];
        }[];
    };
    spells: {
        getRandomSpell: () => string;
        getRandomSpells: (n?: number) => string[];
    };
    starWars: {
        getRandomCharacter: () => {
            name: string;
            gender: string;
            skinColor: string;
            hairColor: string;
            height: number;
            eyeColor: string;
            mass: number;
            homeworld: string;
            birthYear: string;
        } | {
            name: string;
            gender: string;
            skinColor: string;
            hairColor: string;
            height: number;
            eyeColor: string;
            mass: string;
            homeworld: string;
            birthYear: string;
        } | {
            name: string;
            gender: string;
            skinColor: string;
            hairColor: string;
            height: string;
            eyeColor: string;
            mass: string;
            homeworld: string;
            birthYear: string;
        };
        getRandomCharacters: (n?: number) => ({
            name: string;
            gender: string;
            skinColor: string;
            hairColor: string;
            height: number;
            eyeColor: string;
            mass: number;
            homeworld: string;
            birthYear: string;
        } | {
            name: string;
            gender: string;
            skinColor: string;
            hairColor: string;
            height: number;
            eyeColor: string;
            mass: string;
            homeworld: string;
            birthYear: string;
        } | {
            name: string;
            gender: string;
            skinColor: string;
            hairColor: string;
            height: string;
            eyeColor: string;
            mass: string;
            homeworld: string;
            birthYear: string;
        })[];
        getRandomName: () => string;
        getRandomNames: (n?: number) => string[];
    };
    tbbt: {
        getRandomName: () => string;
        getRandomNames: (n?: number) => string[];
    };
};
export default _default;
