"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomWands = exports.getRandomWand = exports.getRandomNames = exports.getRandomName = exports.getRandomHouses = exports.getRandomHouse = exports.getRandomCharacters = exports.getRandomCharacter = void 0;
const characters = [
    {
        first: 'Harry',
        last: 'Potter',
        full: 'Harry Potter',
        bloodStatus: 'Half-Blood',
        birthday: '31 July, 1980',
        gender: 'Male',
        house: 'Gryffindor',
        wand: '11", Holly - Phoenix Feather'
    },
    {
        first: 'Ron',
        last: 'Weasley',
        full: 'Ron Weasley',
        bloodStatus: 'Pure-Blood',
        birthday: '1 March, 1980',
        gender: 'Male',
        house: 'Gryffindor',
        wand: '12", Ash - Unicorn Hair'
    },
    {
        first: 'Hermione',
        last: 'Granger',
        full: 'Hermione Granger',
        bloodStatus: 'Muggle-Born',
        birthday: '19 September, 1979',
        gender: 'Female',
        house: 'Gryffindor',
        wand: '10¾", Vine Wood - Dragon Heartstring'
    },
    {
        first: 'Albus',
        last: 'Dumbledore',
        full: 'Albus Dumbledore',
        bloodStatus: 'Half-Blood',
        birthday: 'Summer 1881',
        gender: 'Male',
        house: 'Gryffindor',
        wand: '15", Elder - Thestral Tail Hair'
    },
    {
        first: 'Rubeus',
        last: 'Hagrid',
        full: 'Rubeus Hagrid',
        bloodStatus: 'Part-Giant',
        birthday: '6 December, 1928',
        gender: 'Male',
        house: 'Gryffindor',
        wand: '16", Oak'
    },
    {
        first: 'Severus',
        last: 'Snape',
        full: 'Severus Snape',
        bloodStatus: 'Half-Blood',
        birthday: '9 January, 1960',
        gender: 'Male',
        house: 'Slytherin',
        wand: 'Unknown'
    },
    {
        first: 'Tom',
        last: 'Riddle',
        full: 'Lord Voldemort',
        bloodStatus: 'Half-Blood',
        birthday: '31 December, 1926',
        gender: 'Male',
        house: 'Slytherin',
        wand: '13½", Yew - Phoenix Feather'
    },
    {
        first: 'Sirius',
        last: 'Black',
        full: 'Sirius Black',
        bloodStatus: 'Pure-Blood',
        birthday: '3 November, 1959',
        gender: 'Male',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'Draco',
        last: 'Malfoy',
        full: 'Draco Malfoy',
        bloodStatus: 'Pure-Blood',
        birthday: '5 June, 1980',
        gender: 'Male',
        house: 'Slytherin',
        wand: '10", Hawthorn - Unicorn Hair'
    },
    {
        first: 'Fred',
        last: 'Weasley',
        full: 'Fred Weasley',
        bloodStatus: 'Pure-Blood',
        birthday: '1 April, 1978',
        gender: 'Male',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'Remus',
        last: 'Lupin',
        full: 'Remus Lupin',
        bloodStatus: 'Half-Blood',
        birthday: '10 March, 1960',
        gender: 'Male',
        house: 'Gryffindor',
        wand: '10¼", Cypress - Unicorn Hair'
    },
    {
        first: 'George',
        last: 'Weasley',
        full: 'George Weasley',
        bloodStatus: 'Pure-Blood',
        birthday: '1 April, 1978',
        gender: 'Male',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'Neville',
        last: 'Longbottom',
        full: 'Neville Longbottom',
        bloodStatus: 'Pure-Blood',
        birthday: '30 July, 1980',
        gender: 'Male',
        house: 'Gryffindor',
        wand: '13", Cherry - Unicorn Hair'
    },
    {
        first: 'Arthur',
        last: 'Weasley',
        full: 'Arthur Weasley',
        bloodStatus: 'Pure-Blood',
        birthday: '6 February, 1950',
        gender: 'Male',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'Ginny',
        last: 'Weasley',
        full: 'Ginny Weasley',
        bloodStatus: 'Pure-Blood',
        birthday: '11 August, 1981',
        gender: 'Female',
        house: 'Gryffindor',
        wand: 'Yew'
    },
    {
        first: 'Minerva',
        last: 'McGonagall',
        full: 'Minerva McGonagall',
        bloodStatus: 'Half-Blood',
        birthday: '4 October, 1935',
        gender: 'Female',
        house: 'Gryffindor',
        wand: '9½", Fir, Dragon Heartstring'
    },
    {
        first: 'Molly',
        last: 'Weasley',
        full: 'Molly Weasley',
        bloodStatus: 'Pure-Blood',
        birthday: '30 October, 1949',
        gender: 'Female',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'Dolores',
        last: 'Umbridge',
        full: 'Dolores Umbridge',
        bloodStatus: 'Half-Blood',
        birthday: '26 August, before 1965',
        gender: 'Female',
        house: 'Slytherin',
        wand: '8", Birch - Dragon Heartstring'
    },
    {
        first: 'Alastor',
        last: 'Moody',
        full: 'Alastor Moody',
        bloodStatus: 'Pure-Blood',
        birthday: 'Before 1961',
        gender: 'Male',
        house: 'Unknown',
        wand: 'Unknown'
    },
    {
        first: 'Vernon',
        last: 'Dursley',
        full: 'Vernon Dursley',
        bloodStatus: 'Muggle',
        birthday: 'Before 1955',
        gender: 'Male',
        house: 'N/A',
        wand: 'N/A'
    },
    {
        first: 'Cornelius',
        last: 'Fudge',
        full: 'Cornelius Fudge',
        bloodStatus: 'Unknown',
        birthday: 'Before 1964',
        gender: 'Male',
        house: 'Unknown',
        wand: 'Unknown'
    },
    {
        first: 'Peter',
        last: 'Pettigrew',
        full: 'Peter Pettigrew',
        bloodStatus: 'Unknown',
        birthday: '1960',
        gender: 'Male',
        house: 'Gryffindor',
        wand: '13½", Yew - Phoenix Feather'
    },
    {
        first: 'Dudley',
        last: 'Dursley',
        full: 'Dudley Dursley',
        bloodStatus: 'Muggle',
        birthday: '23 June, 1980',
        gender: 'Male',
        house: 'N/A',
        wand: 'N/A'
    },
    {
        first: 'Horace',
        last: 'Slughorn',
        full: 'Horace Slughorn',
        bloodStatus: 'Pure-Blood',
        birthday: 'Between 28 April, 1881 and 28 April, 1899',
        gender: 'Male',
        house: 'Slytherin',
        wand: '10¼", Cedar - Dragon Heartstring'
    },
    {
        first: 'Percy',
        last: 'Weasley',
        full: 'Percy Weasley',
        bloodStatus: 'Pure-Blood',
        birthday: '22 August, 1976 ',
        gender: 'Male',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'Luna',
        last: 'Lovegood',
        full: 'Luna Lovegood',
        bloodStatus: 'Pure-Blood',
        birthday: '13 February, 1981',
        gender: 'Female',
        house: 'Ravenclaw',
        wand: 'Unknown'
    },
    {
        first: 'Cedric',
        last: 'Diggory',
        full: 'Cedric Diggory',
        bloodStatus: 'Unknown',
        birthday: 'Between September and October, 1977',
        gender: 'Male',
        house: 'Hufflepuff',
        wand: '12¼", Ash - Unicorn Hair'
    },
    {
        first: 'Petunia',
        last: 'Dursley',
        full: 'Petunia Dursley',
        bloodStatus: 'Muggle',
        birthday: 'Before 1960',
        gender: 'Female',
        house: 'N/A',
        wand: 'N/A'
    },
    {
        first: 'Bill',
        last: 'Weasley',
        full: 'Bill Weasley',
        bloodStatus: 'Pure-Blood',
        birthday: '29 November, 1970',
        gender: 'Male',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'Argus',
        last: 'Filch',
        full: 'Argus Filch',
        bloodStatus: 'Squib',
        birthday: 'Before 1956',
        gender: 'Male',
        house: 'N/A',
        wand: 'N/A'
    },
    {
        first: 'Viktor',
        last: 'Krum',
        full: 'Viktor Krum',
        bloodStatus: 'Unknown',
        birthday: 'Between April, 1976 and August, 1976',
        gender: 'Male',
        house: 'N/A',
        wand: '10¼", Hornbeam - Dragon Heartstring'
    },
    {
        first: 'Gilderoy',
        last: 'Lockhart',
        full: 'Gilderoy Lockhart',
        bloodStatus: 'Half-Blood',
        birthday: '26 January, 1964',
        gender: 'Male',
        house: 'Ravenclaw',
        wand: '9", Cherry - Dragon Heartstring'
    },
    {
        first: 'Sybill',
        last: 'Trelawney',
        full: 'Sybill Trelawney',
        bloodStatus: 'Half-Blood',
        birthday: '9 March, before 1962',
        gender: 'Female',
        house: 'Ravenclaw',
        wand: '9½", Very Flexible Hazel - Unicorn Hair'
    },
    {
        first: 'Fleur',
        last: 'Delacour',
        full: 'Fleur Delacour',
        bloodStatus: 'Part-Veela',
        birthday: '1977',
        gender: 'Female',
        house: 'N/A',
        wand: '9½", Rosewood - Veela Hair Core'
    },
    {
        first: 'Lucius',
        last: 'Malfoy',
        full: 'Lucius Malfoy',
        bloodStatus: 'Pure-Blood',
        birthday: '1954',
        gender: 'Male',
        house: 'Slytherin',
        wand: '18", Elm, Dragon Heartstring'
    },
    {
        first: 'Nymphadora',
        last: 'Tonks',
        full: 'Nymphadora Tonks',
        bloodStatus: 'Half-Blood',
        birthday: '1973',
        gender: 'Female',
        house: 'Hufflepuff',
        wand: 'Unknown'
    },
    {
        first: 'Gregory',
        last: 'Goyle',
        full: 'Gregory Goyle',
        bloodStatus: 'Pure-Blood',
        birthday: 'Between 1979 and 1980',
        gender: 'Male',
        house: 'Slytherin',
        wand: 'Unknown'
    },
    {
        first: 'Vincent',
        last: 'Crabbe',
        full: 'Vincent Crabbe',
        bloodStatus: 'Pure-Blood',
        birthday: 'Between 1979 and 1980',
        gender: 'Male',
        house: 'Slytherin',
        wand: 'Unknown'
    },
    {
        first: 'Bellatrix',
        last: 'Lestrange',
        full: 'Bellatrix Lestrange',
        bloodStatus: 'Pure-Blood',
        birthday: '1951',
        gender: 'Female',
        house: 'Slytherin',
        wand: '12¾", Walnut - Dragon Heartstring'
    },
    {
        first: 'Cho',
        last: 'Chang',
        full: 'Cho Chang',
        bloodStatus: 'Unknown',
        birthday: 'Between 1978 and 1979',
        gender: 'Female',
        house: 'Ravenclaw',
        wand: 'Unknown'
    },
    {
        first: 'Dean',
        last: 'Thomas',
        full: 'Dean Thomas',
        bloodStatus: 'Half-Blood',
        birthday: 'Between 1979 and 1980',
        gender: 'Male',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'Oliver',
        last: 'Wood',
        full: 'Oliver Wood',
        bloodStatus: 'Unknown',
        birthday: 'Between 1975 and 1976',
        gender: 'Male',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'James',
        last: 'Potter',
        full: 'James Potter',
        bloodStatus: 'Pure-Blood',
        birthday: '27 March, 1960',
        gender: 'Male',
        house: 'Gryffindor',
        wand: '11", Mahogany'
    },
    {
        first: 'Rita',
        last: 'Skeeter',
        full: 'Rita Skeeter',
        bloodStatus: 'Unknown',
        birthday: '1951',
        gender: 'Female',
        house: 'Unknown',
        wand: 'Unknown'
    },
    {
        first: 'Seamus',
        last: 'Finnigan',
        full: 'Seamus Finnigan',
        bloodStatus: 'Half-Blood',
        birthday: 'Between 1979 and 1980',
        gender: 'Male',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'Igor',
        last: 'Karkaroff',
        full: 'Igor Karkaroff',
        bloodStatus: 'Unknown',
        birthday: 'Before 1962',
        gender: 'Male',
        house: 'Unknown',
        wand: 'Unknown'
    },
    {
        first: 'Poppy',
        last: 'Pomfrey',
        full: 'Poppy Pomfrey',
        bloodStatus: 'Unknown',
        birthday: 'Before 1954',
        gender: 'Female',
        house: 'Unknown',
        wand: 'Unknown'
    },
    {
        first: 'Rufus',
        last: 'Scrimgeour',
        full: 'Rufus Scrimgeour',
        bloodStatus: 'Unknown',
        birthday: 'Before 1968',
        gender: 'Male',
        house: 'Unknown',
        wand: 'Unknown'
    },
    {
        first: 'Mundungus',
        last: 'Fletcher',
        full: 'Mundungus Fletcher',
        bloodStatus: 'Half-Blood',
        birthday: 'Before 1962',
        gender: 'Male',
        house: 'Unknown',
        wand: 'Unknown'
    },
    {
        first: 'Lavender',
        last: 'Brown',
        full: 'Lavender Brown',
        bloodStatus: 'Pure-Blood',
        birthday: 'Between 1979 and 1980',
        gender: 'Female',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'Filius',
        last: 'Flitwick',
        full: 'Filius Flitwick',
        bloodStatus: 'Part-Goblin',
        birthday: '17 October',
        gender: 'Male',
        house: 'Ravenclaw',
        wand: 'Unknown'
    },
    {
        first: 'Angelina',
        last: 'Johnson',
        full: 'Angelina Johnson',
        bloodStatus: 'Unknown',
        birthday: 'Between 24 October, 1977 and 30 October, 1977',
        gender: 'Female',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'Parvati',
        last: 'Patil',
        full: 'Parvati Patil',
        bloodStatus: 'Unknown',
        birthday: 'Between 2 September, 1979 and 21 April, 1980',
        gender: 'Female',
        house: 'Gryffindor',
        wand: 'Unknown'
    },
    {
        first: 'Lily',
        last: 'Potter',
        full: 'Lily Potter',
        bloodStatus: 'Muggle-Born',
        birthday: '30 January, 1960',
        gender: 'Female',
        house: 'Gryffindor',
        wand: '10¼" Willow '
    }
];
const houses = [...new Set(characters.filter(ch => !['Unknown', 'N/A'].includes(ch.house)).map(c => c.house))];
const wands = [...new Set(characters.filter(ch => !['Unknown', 'N/A'].includes(ch.wand)).map(c => c.wand))];
const NUMBER_OF_CHARACTERS = characters.length;
const NUMBER_OF_HOUSES = houses.length;
const NUMBER_OF_WANDS = wands.length;
const getRandomCharacter = () => characters[Math.floor(Math.random() * NUMBER_OF_CHARACTERS)];
exports.getRandomCharacter = getRandomCharacter;
const getRandomCharacters = (n = 1) => Array(n)
    .fill('')
    .map(() => getRandomCharacter());
exports.getRandomCharacters = getRandomCharacters;
const getRandomName = () => characters[Math.floor(Math.random() * NUMBER_OF_CHARACTERS)].full;
exports.getRandomName = getRandomName;
const getRandomNames = (n = 1) => Array(n)
    .fill('')
    .map(() => getRandomName());
exports.getRandomNames = getRandomNames;
const getRandomWand = () => wands[Math.floor(Math.random() * NUMBER_OF_WANDS)];
exports.getRandomWand = getRandomWand;
const getRandomWands = (n = 1) => Array(n)
    .fill('')
    .map(() => getRandomWand());
exports.getRandomWands = getRandomWands;
const getRandomHouse = () => houses[Math.floor(Math.random() * NUMBER_OF_HOUSES)];
exports.getRandomHouse = getRandomHouse;
const getRandomHouses = (n = 1) => Array(n)
    .fill('')
    .map(() => getRandomHouse());
exports.getRandomHouses = getRandomHouses;
exports.default = { getRandomCharacter, getRandomCharacters, getRandomHouse, getRandomHouses, getRandomName, getRandomNames, getRandomWand, getRandomWands };
