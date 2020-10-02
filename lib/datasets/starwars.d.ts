declare const getRandomCharacter: () => {
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
declare const getRandomName: () => string;
declare const getRandomCharacters: (n?: number) => ({
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
declare const getRandomNames: (n?: number) => string[];
export { getRandomCharacter, getRandomCharacters, getRandomName, getRandomNames };
declare const _default: {
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
export default _default;
