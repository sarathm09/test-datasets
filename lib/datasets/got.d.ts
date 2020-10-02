declare const getRandomCharacter: () => {
    name: string;
    nickname: string;
    houses: string[];
};
declare const getRandomCharacters: (n?: number) => {
    name: string;
    nickname: string;
    houses: string[];
}[];
declare const getRandomName: () => string;
declare const getRandomNames: (n?: number) => string[];
declare const getRandomHouse: () => string;
declare const getRandomHouses: (n?: number) => string[];
export { getRandomCharacter, getRandomCharacters, getRandomName, getRandomNames, getRandomHouse, getRandomHouses };
declare const _default: {
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
export default _default;
