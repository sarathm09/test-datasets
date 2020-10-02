declare const getRandomCelestialObject: () => {
    name: string;
    bodyName: string;
    id: string;
    isPlanet: boolean;
    moons: string[];
};
declare const getRandomPlanet: () => {
    name: string;
    bodyName: string;
    id: string;
    isPlanet: boolean;
    moons: string[];
};
declare const getRandomCelestialObjects: (n?: number) => {
    name: string;
    bodyName: string;
    id: string;
    isPlanet: boolean;
    moons: string[];
}[];
declare const getRandomPlanets: (n?: number) => {
    name: string;
    bodyName: string;
    id: string;
    isPlanet: boolean;
    moons: string[];
}[];
declare const getRandomCelestialObjectName: () => string;
declare const getRandomPlanetName: () => string;
export { getRandomCelestialObject, getRandomCelestialObjectName, getRandomCelestialObjects, getRandomPlanet, getRandomPlanetName, getRandomPlanets };
declare const _default: {
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
export default _default;
