"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomHouses = exports.getRandomHouse = exports.getRandomNames = exports.getRandomName = exports.getRandomCharacters = exports.getRandomCharacter = void 0;
const characters = [
    { name: 'Addam Marbrand', nickname: '', houses: [] },
    { name: 'Aegon Targaryen', nickname: '', houses: ['Targaryen'] },
    { name: 'Aeron Greyjoy', nickname: 'Damphair', houses: ['Greyjoy'] },
    { name: 'Aerys II Targaryen', nickname: 'The Mad King', houses: ['Targaryen'] },
    { name: 'Akho', nickname: '', houses: [] },
    { name: 'Alliser Thorne', nickname: '', houses: [] },
    { name: 'Alton Lannister', nickname: '', houses: ['Lannister'] },
    { name: 'Alys Karstark', nickname: '', houses: [] },
    { name: 'Amory Lorch', nickname: '', houses: [] },
    { name: 'Anguy', nickname: '', houses: [] },
    { name: 'Archmaester Marwyn', nickname: '', houses: [] },
    { name: 'Areo Hotah', nickname: '', houses: [] },
    { name: 'Armeca', nickname: '', houses: [] },
    { name: 'Arthur', nickname: '', houses: [] },
    { name: 'Arthur Dayne', nickname: '', houses: [] },
    { name: 'Arya Stark', nickname: '', houses: ['Stark'] },
    { name: 'Baby Sam', nickname: '', houses: [] },
    { name: 'Balon Greyjoy', nickname: '', houses: ['Greyjoy'] },
    { name: 'Baratheon Guard', nickname: '', houses: ['Baratheon'] },
    { name: 'Barristan Selmy', nickname: '', houses: [] },
    { name: 'Benjen Stark', nickname: '', houses: ['Stark'] },
    { name: 'Beric Dondarrion', nickname: '', houses: [] },
    { name: 'Bianca', nickname: '', houses: [] },
    { name: 'Biter', nickname: '', houses: [] },
    { name: 'Black Lorren', nickname: '', houses: [] },
    { name: 'Black Walder Rivers', nickname: '', houses: ['Frey'] },
    { name: 'Bobono', nickname: '', houses: [] },
    { name: 'Bowen Marsh', nickname: '', houses: [] },
    { name: 'Brandon Stark', nickname: '', houses: ['Stark'] },
    { name: 'Bran Stark', nickname: '', houses: ['Stark'] },
    { name: 'Brea', nickname: '', houses: [] },
    { name: 'Brienne of Tarth', nickname: '', houses: [] },
    { name: 'Bronn', nickname: '', houses: [] },
    { name: 'Brother Ray', nickname: '', houses: [] },
    { name: 'Brynden Tully', nickname: 'Blackfish', houses: ['Tully'] },
    { name: 'Captain of the Archers', nickname: '', houses: [] },
    { name: 'Catelyn Stark', nickname: '', houses: ['Stark', 'Tully'] },
    { name: 'Catspaw Assassin', nickname: '', houses: [] },
    { name: 'Cersei Lannister', nickname: '', houses: ['Lannister', 'Baratheon'] },
    { name: 'Child of the Forest', nickname: '', houses: [] },
    { name: 'Citadel Maester', nickname: '', houses: [] },
    { name: 'Colen of Greenpools', nickname: '', houses: [] },
    { name: 'Craster', nickname: '', houses: [] },
    { name: 'Daario Naharis', nickname: '', houses: [] },
    { name: 'Daenerys Targaryen', nickname: '', houses: ['Targaryen'] },
    { name: 'Dagmer Cleftjaw', nickname: '', houses: [] },
    { name: 'Daisy', nickname: '', houses: [] },
    { name: 'Davos Seaworth', nickname: '', houses: [] },
    { name: 'Dickon Tarly', nickname: '', houses: [] },
    { name: 'Dongo the Giant', nickname: '', houses: [] },
    { name: 'Donnel Waynwood', nickname: '', houses: [] },
    { name: 'Dontos Hollard', nickname: '', houses: [] },
    { name: 'Doran Martell', nickname: '', houses: ['Martell'] },
    { name: 'Doreah', nickname: '', houses: [] },
    { name: 'Drennan', nickname: '', houses: [] },
    { name: 'Drogon', nickname: '', houses: ['Targaryen'] },
    { name: 'Eddard Stark', nickname: 'Ned', houses: ['Stark'] },
    { name: 'Eddison Tollett', nickname: '', houses: [] },
    { name: 'Edmure Tully', nickname: '', houses: ['Tully'] },
    { name: 'Ellaria Sand', nickname: '', houses: ['Martell'] },
    { name: 'Elia Martell', nickname: '', houses: ['Martell'] },
    { name: 'Eon Hunter', nickname: '', houses: [] },
    { name: 'Euron Greyjoy', nickname: '', houses: ['Greyjoy'] },
    { name: 'Farlen', nickname: '', houses: [] },
    { name: 'Gared', nickname: '', houses: [] },
    { name: 'Gatins', nickname: '', houses: [] },
    { name: 'Gendry', nickname: '', houses: ['Baratheon'] },
    { name: 'Gerold Hightower', nickname: '', houses: [] },
    { name: 'Ghost', nickname: '', houses: ['Stark'] },
    { name: 'Gilly', nickname: '', houses: [] },
    { name: 'Grand Maester Pycelle', nickname: '', houses: [] },
    { name: 'Greatjon Umber', nickname: '', houses: [] },
    { name: 'Gregor Clegane', nickname: 'The Mountain', houses: [] },
    { name: 'Greizhen mo Ullhor', nickname: '', houses: [] },
    { name: 'Grenn', nickname: '', houses: [] },
    { name: 'Grey Wind', nickname: '', houses: ['Stark'] },
    { name: 'Grey Worm', nickname: '', houses: [] },
    { name: 'Hallyne', nickname: '', houses: [] },
    { name: 'Harald Karstark', nickname: '', houses: [] },
    { name: 'Harry Strickland', nickname: '', houses: [] },
    { name: 'High Priestess', nickname: '', houses: [] },
    { name: 'High Sparrow', nickname: '', houses: [] },
    { name: 'Hizdahr zo Loraq', nickname: '', houses: [] },
    { name: 'Hodor', nickname: '', houses: [] },
    { name: 'Hoster Tully', nickname: '', houses: ['Tully'] },
    { name: 'Hot Pie', nickname: '', houses: [] },
    { name: 'Howland Reed', nickname: '', houses: [] },
    { name: 'Hugh of the Vale', nickname: '', houses: [] },
    { name: 'Illyrio Mopatis', nickname: '', houses: [] },
    { name: 'Ilyn Payne', nickname: '', houses: [] },
    { name: 'Irri', nickname: '', houses: [] },
    { name: 'Izembaro', nickname: '', houses: [] },
    { name: 'Jacks', nickname: '', houses: [] },
    { name: 'Jafer Flowers', nickname: '', houses: [] },
    { name: 'Jaime Lannister', nickname: 'The Kingslayer', houses: ['Lannister'] },
    { name: 'Janos Slynt', nickname: '', houses: [] },
    { name: "Jaqen H'ghar", nickname: '', houses: [] },
    { name: "Jaqen's Disguise", nickname: '', houses: [] },
    { name: 'Jaremy Rykker', nickname: '', houses: [] },
    { name: 'Jeor Mormont', nickname: '', houses: ['Mormont'] },
    { name: 'Jhiqui', nickname: '', houses: [] },
    { name: 'Joffrey Baratheon', nickname: '', houses: ['Baratheon'] },
    { name: 'Jojen Reed', nickname: '', houses: [] },
    { name: 'Jon Arryn', nickname: '', houses: [] },
    { name: 'Jon Snow', nickname: '', houses: ['Stark', 'Targaryen'] },
    { name: 'Jonos Bracken', nickname: '', houses: [] },
    { name: 'Jorah Mormont', nickname: '', houses: ['Mormont'] },
    { name: 'Jory Cassel', nickname: '', houses: [] },
    { name: 'Joyeuse Erenford', nickname: '', houses: [] },
    { name: 'Karl Tanner', nickname: '', houses: [] },
    { name: 'Karsi', nickname: '', houses: [] },
    { name: 'Kayla', nickname: '', houses: [] },
    { name: 'Kegs', nickname: '', houses: [] },
    { name: 'Kevan Lannister', nickname: '', houses: ['Lannister'] },
    { name: 'Khal Drogo', nickname: '', houses: [] },
    { name: 'Khal Moro', nickname: '', houses: [] },
    { name: 'Khal Rhalko', nickname: '', houses: [] },
    { name: 'King Joffrey Baratheon', nickname: '', houses: [] },
    { name: 'King Renly Baratheon', nickname: '', houses: [] },
    { name: 'King Robb Stark', nickname: '', houses: [] },
    { name: 'King Stannis Baratheon', nickname: '', houses: [] },
    { name: 'Kinvara', nickname: '', houses: [] },
    { name: 'Kitty Frey', nickname: '', houses: ['Frey'] },
    { name: 'Knight of House Frey', nickname: '', houses: [] },
    { name: 'Knight of House Lynderly', nickname: '', houses: [] },
    { name: 'Kovarro', nickname: '', houses: [] },
    { name: 'Kraznys mo Nakloz', nickname: '', houses: [] },
    { name: 'Kurleket', nickname: '', houses: [] },
    { name: 'Lady', nickname: '', houses: ['Stark'] },
    { name: 'Lady Crane', nickname: '', houses: [] },
    { name: 'Lancel Lannister', nickname: '', houses: ['Lannister'] },
    { name: 'Leaf', nickname: '', houses: [] },
    { name: 'Lem Lemoncloak', nickname: '', houses: [] },
    { name: 'Leo Lefford', nickname: '', houses: [] },
    { name: 'Lhara', nickname: '', houses: [] },
    { name: 'Loboda', nickname: '', houses: [] },
    { name: 'Locke', nickname: '', houses: [] },
    { name: 'Lollys Stokeworth', nickname: '', houses: [] },
    { name: 'Lommy Greenhands', nickname: '', houses: [] },
    { name: 'Loras Tyrell', nickname: '', houses: ['Tyrell'] },
    { name: 'Lord Galbart Glover', nickname: '', houses: [] },
    { name: 'Lord Portan', nickname: '', houses: [] },
    { name: 'Lord Varys', nickname: '', houses: [] },
    { name: 'Lordsport Dockhand', nickname: '', houses: [] },
    { name: 'Lothar Frey', nickname: '', houses: ['Frey'] },
    { name: 'Lyanna Mormont', nickname: '', houses: ['Mormont'] },
    { name: 'Lyanna Stark', nickname: '', houses: ['Stark'] },
    { name: 'Lysa Arryn', nickname: '', houses: ['Arryn', 'Tully'] },
    { name: 'Mace Tyrell', nickname: '', houses: ['Tyrell'] },
    { name: 'Maester Aemon', nickname: '', houses: ['Targaryen'] },
    { name: 'Maester Cressen', nickname: '', houses: [] },
    { name: 'Maester Luwin', nickname: '', houses: [] },
    { name: 'Maester Wolkan', nickname: '', houses: [] },
    { name: 'Mag the Mighty', nickname: '', houses: [] },
    { name: 'Maggy', nickname: '', houses: [] },
    { name: 'Mago', nickname: '', houses: [] },
    { name: 'Male Prostitute', nickname: '', houses: [] },
    { name: 'Malko', nickname: '', houses: [] },
    { name: 'Mance Rayder', nickname: '', houses: [] },
    { name: 'Mandon Moore', nickname: '', houses: [] },
    { name: 'Manservant', nickname: '', houses: [] },
    { name: 'Marei', nickname: '', houses: [] },
    { name: 'Margaery Tyrell', nickname: '', houses: ['Tyrell'] },
    { name: "Margaery's Handmaiden", nickname: '', houses: [] },
    { name: 'Marillion', nickname: '', houses: [] },
    { name: 'Martyn Lannister', nickname: '', houses: ['Lannister'] },
    { name: 'Masha Heddle', nickname: '', houses: [] },
    { name: 'Matthos Seaworth', nickname: '', houses: [] },
    { name: 'Meera Reed', nickname: '', houses: [] },
    { name: 'Meereen Slave Master', nickname: '', houses: [] },
    { name: 'Melessa Tarly', nickname: '', houses: [] },
    { name: 'Melisandre', nickname: '', houses: [] },
    { name: 'Merchant Captain', nickname: '', houses: [] },
    { name: 'Mero', nickname: '', houses: [] },
    { name: 'Meryn Trant', nickname: '', houses: [] },
    { name: 'Mhaegen', nickname: '', houses: [] },
    { name: 'Mikken', nickname: '', houses: [] },
    { name: 'Mirelle', nickname: '', houses: [] },
    { name: 'Mirri Maz Duur', nickname: '', houses: [] },
    { name: 'Missandei', nickname: '', houses: [] },
    { name: 'Mord', nickname: '', houses: [] },
    { name: 'Mossador', nickname: '', houses: [] },
    { name: 'Mycah', nickname: '', houses: [] },
    { name: 'Myranda', nickname: '', houses: [] },
    { name: 'Myrcella Baratheon', nickname: '', houses: ['Baratheon'] },
    { name: 'Ned Umber', nickname: '', houses: ['Umber'] },
    { name: 'Northman Rioter', nickname: '', houses: [] },
    { name: 'Nymeria', nickname: '', houses: ['Stark'] },
    { name: 'Nymeria Sand', nickname: '', houses: ['Martell'] },
    { name: 'Obara Sand', nickname: '', houses: ['Martell'] },
    { name: 'Oberyn Martell', nickname: '', houses: ['Martell'] },
    { name: 'Olenna Tyrell', nickname: '', houses: ['Tyrell'] },
    { name: 'Olly', nickname: '', houses: [] },
    { name: 'Olyvar', nickname: '', houses: [] },
    { name: 'Orell', nickname: '', houses: [] },
    { name: 'Ornela', nickname: '', houses: [] },
    { name: 'Osha', nickname: '', houses: [] },
    { name: 'Othell Yarwyck', nickname: '', houses: [] },
    { name: 'Othor', nickname: '', houses: [] },
    { name: 'Pentoshi Servant', nickname: '', houses: [] },
    { name: 'Petyr Baelish', nickname: 'Littlefinger', houses: [] },
    { name: 'Podrick Payne', nickname: '', houses: [] },
    { name: 'Polliver', nickname: '', houses: [] },
    { name: 'Prendahl na Ghezn', nickname: '', houses: [] },
    { name: 'Pyat Pree', nickname: '', houses: [] },
    { name: 'Pypar', nickname: '', houses: [] },
    { name: 'Qhono', nickname: '', houses: [] },
    { name: 'Qhorin Halfhand', nickname: '', houses: [] },
    { name: 'Qotho', nickname: '', houses: [] },
    { name: 'Quaithe', nickname: '', houses: [] },
    { name: 'Qyburn', nickname: '', houses: [] },
    { name: 'Rakharo', nickname: '', houses: [] },
    { name: 'Ramsay Snow', nickname: '', houses: ['Bolton'] },
    { name: 'Randyll Tarly', nickname: '', houses: [] },
    { name: 'Rast', nickname: '', houses: [] },
    { name: 'Rattleshirt', nickname: 'Lord of Bones', houses: [] },
    { name: 'Razdal mo Eraz', nickname: '', houses: [] },
    { name: 'Red Keep Stableboy', nickname: '', houses: [] },
    { name: 'Renly Baratheon', nickname: '', houses: ['Baratheon'] },
    { name: 'Rhaegal', nickname: '', houses: ['Targaryen'] },
    { name: 'Rhaegar Targaryen', nickname: '', houses: ['Targaryen'] },
    { name: 'Rhaego', nickname: '', houses: [] },
    { name: 'Rhaella Targaryen', nickname: '', houses: ['Targaryen'] },
    { name: 'Rhaenys Targaryen', nickname: '', houses: ['Targaryen'] },
    { name: 'Rickard Karstark', nickname: '', houses: [] },
    { name: 'Rickard Stark', nickname: '', houses: ['Stark'] },
    { name: 'Rickon Stark', nickname: '', houses: ['Stark'] },
    { name: 'Robb Stark', nickname: '', houses: ['Stark'] },
    { name: 'Robert Baratheon', nickname: '', houses: ['Baratheon'] },
    { name: 'Robett Glover', nickname: '', houses: [] },
    { name: 'Robin Arryn', nickname: '', houses: [] },
    { name: 'Rodrik Cassel', nickname: '', houses: [] },
    { name: 'Roose Bolton', nickname: '', houses: ['Bolton'] },
    { name: 'Rorge', nickname: '', houses: [] },
    { name: 'Ros', nickname: '', houses: [] },
    { name: 'Roslin Frey', nickname: '', houses: ['Frey'] },
    { name: 'Royal Steward', nickname: '', houses: [] },
    { name: 'Ryger Rivers', nickname: '', houses: [] },
    { name: 'Salladhor Saan', nickname: '', houses: [] },
    { name: 'Samwell Tarly', nickname: '', houses: [] },
    { name: 'Sandor Clegane', nickname: 'The Hound', houses: [] },
    { name: 'Sansa Stark', nickname: '', houses: ['Stark'] },
    { name: 'Selyse Baratheon', nickname: '', houses: ['Baratheon'] },
    { name: 'Septa Moelle', nickname: '', houses: [] },
    { name: 'Septa Mordane', nickname: '', houses: [] },
    { name: 'Septa Scolera', nickname: '', houses: [] },
    { name: 'Septa Unella', nickname: '', houses: [] },
    { name: 'Septon', nickname: '', houses: [] },
    { name: 'Septon', nickname: '', houses: [] },
    { name: 'Ser Endrew Tarth', nickname: '', houses: [] },
    { name: 'Shae', nickname: '', houses: [] },
    { name: 'Shagga', nickname: '', houses: [] },
    { name: 'Shaggydog', nickname: '', houses: ['Stark'] },
    { name: 'Shireen Baratheon', nickname: '', houses: ['Baratheon'] },
    { name: 'Silk King', nickname: '', houses: [] },
    { name: 'Smalljon Umber', nickname: '', houses: [] },
    { name: 'Spice King', nickname: '', houses: [] },
    { name: 'Stannis Baratheon', nickname: '', houses: ['Baratheon'] },
    { name: 'Stark Bannerman', nickname: '', houses: [] },
    { name: 'Steelshanks Walton', nickname: '', houses: [] },
    { name: 'Stevron Frey', nickname: '', houses: ['Frey'] },
    { name: 'Stiv', nickname: '', houses: [] },
    { name: 'Styr', nickname: '', houses: [] },
    { name: 'Summer', nickname: '', houses: ['Stark'] },
    { name: 'Syrio Forel', nickname: '', houses: [] },
    { name: 'Talisa Maegyr', nickname: '', houses: [] },
    { name: 'Talla Tarly', nickname: '', houses: ['Tarly'] },
    { name: 'Ternesio Terys', nickname: '', houses: [] },
    { name: 'The Bear', nickname: '', houses: [] },
    { name: 'The Night King', nickname: '', houses: [] },
    { name: 'The Tickler', nickname: '', houses: [] },
    { name: 'The Waif', nickname: '', houses: [] },
    { name: 'Thenn Warg', nickname: '', houses: [] },
    { name: 'Theon Greyjoy', nickname: '', houses: ['Greyjoy'] },
    { name: 'Thoros of Myr', nickname: '', houses: [] },
    { name: 'Three-Eyed Raven', nickname: '', houses: [] },
    { name: 'Timett', nickname: '', houses: [] },
    { name: 'Tobho Mott', nickname: '', houses: [] },
    { name: 'Todder', nickname: '', houses: [] },
    { name: 'Tomard', nickname: '', houses: [] },
    { name: 'Tommen Baratheon', nickname: '', houses: ['Baratheon'] },
    { name: 'Tormund Giantsbane', nickname: '', houses: [] },
    { name: 'Trystane Martell', nickname: '', houses: ['Martell'] },
    { name: 'Tycho Nestoris', nickname: '', houses: [] },
    { name: 'Tyene Sand', nickname: '', houses: ['Martell'] },
    { name: 'Tyrion Lannister', nickname: '', houses: ['Lannister'] },
    { name: 'Tywin Lannister', nickname: '', houses: ['Lannister'] },
    { name: 'Vala', nickname: '', houses: [] },
    { name: 'Vardis Egen', nickname: '', houses: [] },
    { name: 'Varly', nickname: '', houses: [] },
    { name: 'Viserion', nickname: '', houses: ['Targaryen'] },
    { name: 'Viserys Targaryen', nickname: '', houses: ['Targaryen'] },
    { name: 'Walda Bolton', nickname: '', houses: ['Bolton', 'Frey'] },
    { name: 'Walder Frey', nickname: '', houses: ['Frey'] },
    { name: 'Wallen', nickname: '', houses: [] },
    { name: 'Warlock', nickname: '', houses: [] },
    { name: 'Waymar Royce', nickname: '', houses: [] },
    { name: 'Wight Wildling Girl', nickname: '', houses: [] },
    { name: 'Wildling Rioter', nickname: '', houses: [] },
    { name: 'Will', nickname: '', houses: [] },
    { name: 'Willem Lannister', nickname: '', houses: ['Lannister'] },
    { name: 'Willis Wode', nickname: '', houses: [] },
    { name: 'Winterfell Shepherd', nickname: '', houses: [] },
    { name: 'Wun Wun', nickname: '', houses: [] },
    { name: 'Wyllis', nickname: '', houses: [] },
    { name: 'Xaro Xhoan Daxos', nickname: '', houses: [] },
    { name: 'Yara Greyjoy', nickname: '', houses: ['Greyjoy'] },
    { name: 'Yezzan zo Qaggaz', nickname: '', houses: [] },
    { name: 'Ygritte', nickname: '', houses: [] },
    { name: 'Yohn Royce', nickname: '', houses: [] },
    { name: 'Yoren', nickname: '', houses: [] },
    { name: 'Zanrush', nickname: '', houses: [] }
];
const houses = [
    ...new Set(characters
        .map(c => c.houses)
        .reduce((a, c) => [...a, ...c], [])
        .filter(h => !!h))
];
const NUMBER_OF_CHARACTERS = characters.length;
const NUMBER_OF_HOUSES = houses.length;
const getRandomCharacter = () => characters[Math.floor(Math.random() * NUMBER_OF_CHARACTERS)];
exports.getRandomCharacter = getRandomCharacter;
const getRandomCharacters = (n = 1) => Array(n)
    .fill('')
    .map(() => getRandomCharacter());
exports.getRandomCharacters = getRandomCharacters;
const getRandomName = () => characters[Math.floor(Math.random() * NUMBER_OF_CHARACTERS)].name;
exports.getRandomName = getRandomName;
const getRandomNames = (n = 1) => Array(n)
    .fill('')
    .map(() => getRandomName());
exports.getRandomNames = getRandomNames;
const getRandomHouse = () => houses[Math.floor(Math.random() * NUMBER_OF_HOUSES)];
exports.getRandomHouse = getRandomHouse;
const getRandomHouses = (n = 1) => Array(n)
    .fill('')
    .map(() => getRandomHouse());
exports.getRandomHouses = getRandomHouses;
exports.default = { getRandomCharacter, getRandomCharacters, getRandomName, getRandomNames, getRandomHouse, getRandomHouses };