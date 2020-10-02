declare const getRandomCharacter: () => {
    first: string;
    last: string;
    full: string;
    bloodStatus: string;
    birthday: string;
    gender: string;
    house: string;
    wand: string;
};
declare const getRandomCharacters: (n?: number) => {
    first: string;
    last: string;
    full: string;
    bloodStatus: string;
    birthday: string;
    gender: string;
    house: string;
    wand: string;
}[];
declare const getRandomName: () => string;
declare const getRandomNames: (n?: number) => string[];
declare const getRandomWand: () => string;
declare const getRandomWands: (n?: number) => string[];
declare const getRandomHouse: () => string;
declare const getRandomHouses: (n?: number) => string[];
export { getRandomCharacter, getRandomCharacters, getRandomHouse, getRandomHouses, getRandomName, getRandomNames, getRandomWand, getRandomWands };
declare const _default: {
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
export default _default;
