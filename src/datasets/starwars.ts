const starWarsCharacters = [
    {
        name: 'Luke Skywalker',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Blond',
        height: 172,
        eyeColor: 'Blue',
        mass: 77,
        homeworld: 'Tatooine',
        birthYear: '19BBY'
    },
    {
        name: 'C-3PO',
        gender: 'N/A',
        skinColor: 'Gold',
        hairColor: 'N/A',
        height: 167,
        eyeColor: 'Yellow',
        mass: 75,
        homeworld: 'Tatooine',
        birthYear: '112BBY'
    },
    {
        name: 'R2-D2',
        gender: 'N/A',
        skinColor: 'White, Blue',
        hairColor: 'N/A',
        height: 96,
        eyeColor: 'Red',
        mass: 32,
        homeworld: 'Naboo',
        birthYear: '33BBY'
    },
    {
        name: 'Darth Vader',
        gender: 'Male',
        skinColor: 'White',
        hairColor: 'None',
        height: 202,
        eyeColor: 'Yellow',
        mass: 136,
        homeworld: 'Tatooine',
        birthYear: '41.9BBY'
    },
    {
        name: 'Leia Organa',
        gender: 'Female',
        skinColor: 'Light',
        hairColor: 'Brown',
        height: 150,
        eyeColor: 'Brown',
        mass: 49,
        homeworld: 'Alderaan',
        birthYear: '19BBY'
    },
    {
        name: 'Owen Lars',
        gender: 'Male',
        skinColor: 'Light',
        hairColor: 'Brown, Grey',
        height: 178,
        eyeColor: 'Blue',
        mass: 120,
        homeworld: 'Tatooine',
        birthYear: '52BBY'
    },
    {
        name: 'Beru Whitesun lars',
        gender: 'Female',
        skinColor: 'Light',
        hairColor: 'Brown',
        height: 165,
        eyeColor: 'Blue',
        mass: 75,
        homeworld: 'Tatooine',
        birthYear: '47BBY'
    },
    {
        name: 'R5-D4',
        gender: 'N/A',
        skinColor: 'White, Red',
        hairColor: 'N/A',
        height: 97,
        eyeColor: 'Red',
        mass: 32,
        homeworld: 'Tatooine',
        birthYear: 'Unknown'
    },
    {
        name: 'Biggs Darklighter',
        gender: 'Male',
        skinColor: 'Light',
        hairColor: 'Black',
        height: 183,
        eyeColor: 'Brown',
        mass: 84,
        homeworld: 'Tatooine',
        birthYear: '24BBY'
    },
    {
        name: 'Obi-Wan Kenobi',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Auburn, White',
        height: 182,
        eyeColor: 'Blue-Gray',
        mass: 77,
        homeworld: 'Stewjon',
        birthYear: '57BBY'
    },
    {
        name: 'Anakin Skywalker',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Blond',
        height: 188,
        eyeColor: 'Blue',
        mass: 84,
        homeworld: 'Tatooine',
        birthYear: '41.9BBY'
    },
    {
        name: 'Wilhuff Tarkin',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Auburn, Grey',
        height: 180,
        eyeColor: 'Blue',
        mass: 'Unknown',
        homeworld: 'Eriadu',
        birthYear: '64BBY'
    },
    {
        name: 'Chewbacca',
        gender: 'Male',
        skinColor: 'Unknown',
        hairColor: 'Brown',
        height: 228,
        eyeColor: 'Blue',
        mass: 112,
        homeworld: 'Kashyyyk',
        birthYear: '200BBY'
    },
    {
        name: 'Han Solo',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Brown',
        height: 180,
        eyeColor: 'Brown',
        mass: 80,
        homeworld: 'Corellia',
        birthYear: '29BBY'
    },
    {
        name: 'Greedo',
        gender: 'Male',
        skinColor: 'Green',
        hairColor: 'N/A',
        height: 173,
        eyeColor: 'Black',
        mass: 74,
        homeworld: 'Rodia',
        birthYear: '44BBY'
    },
    {
        name: 'Jabba Desilijic Tiure',
        gender: 'Hermaphrodite',
        skinColor: 'Green-Tan, Brown',
        hairColor: 'N/A',
        height: 175,
        eyeColor: 'Orange',
        mass: '1,358',
        homeworld: 'Nal Hutta',
        birthYear: '600BBY'
    },
    {
        name: 'Wedge Antilles',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Brown',
        height: 170,
        eyeColor: 'Hazel',
        mass: 77,
        homeworld: 'Corellia',
        birthYear: '21BBY'
    },
    {
        name: 'Jek Tono Porkins',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Brown',
        height: 180,
        eyeColor: 'Blue',
        mass: 110,
        homeworld: 'Bestine IV',
        birthYear: 'Unknown'
    },
    {
        name: 'Yoda',
        gender: 'Male',
        skinColor: 'Green',
        hairColor: 'White',
        height: 66,
        eyeColor: 'Brown',
        mass: 17,
        homeworld: 'Unknown',
        birthYear: '896BBY'
    },
    {
        name: 'Palpatine',
        gender: 'Male',
        skinColor: 'Pale',
        hairColor: 'Grey',
        height: 170,
        eyeColor: 'Yellow',
        mass: 75,
        homeworld: 'Naboo',
        birthYear: '82BBY'
    },
    {
        name: 'Boba Fett',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Black',
        height: 183,
        eyeColor: 'Brown',
        mass: '78.2',
        homeworld: 'Kamino',
        birthYear: '31.5BBY'
    },
    {
        name: 'IG-88',
        gender: 'None',
        skinColor: 'Metal',
        hairColor: 'None',
        height: 200,
        eyeColor: 'Red',
        mass: 140,
        homeworld: 'Unknown',
        birthYear: '15BBY'
    },
    {
        name: 'Bossk',
        gender: 'Male',
        skinColor: 'Green',
        hairColor: 'None',
        height: 190,
        eyeColor: 'Red',
        mass: 113,
        homeworld: 'Trandosha',
        birthYear: '53BBY'
    },
    {
        name: 'Lando Calrissian',
        gender: 'Male',
        skinColor: 'Dark',
        hairColor: 'Black',
        height: 177,
        eyeColor: 'Brown',
        mass: 79,
        homeworld: 'Socorro',
        birthYear: '31BBY'
    },
    {
        name: 'Lobot',
        gender: 'Male',
        skinColor: 'Light',
        hairColor: 'None',
        height: 175,
        eyeColor: 'Blue',
        mass: 79,
        homeworld: 'Bespin',
        birthYear: '37BBY'
    },
    {
        name: 'Ackbar',
        gender: 'Male',
        skinColor: 'Brown Mottle',
        hairColor: 'None',
        height: 180,
        eyeColor: 'Orange',
        mass: 83,
        homeworld: 'Mon Cala',
        birthYear: '41BBY'
    },
    {
        name: 'Mon Mothma',
        gender: 'Female',
        skinColor: 'Fair',
        hairColor: 'Auburn',
        height: 150,
        eyeColor: 'Blue',
        mass: 'Unknown',
        homeworld: 'Chandrila',
        birthYear: '48BBY'
    },
    {
        name: 'Arvel Crynyd',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Brown',
        height: 'Unknown',
        eyeColor: 'Brown',
        mass: 'Unknown',
        homeworld: 'Unknown',
        birthYear: 'Unknown'
    },
    {
        name: 'Wicket Systri Warrick',
        gender: 'Male',
        skinColor: 'Brown',
        hairColor: 'Brown',
        height: 88,
        eyeColor: 'Brown',
        mass: 20,
        homeworld: 'Endor',
        birthYear: '8BBY'
    },
    {
        name: 'Nien Nunb',
        gender: 'Male',
        skinColor: 'Grey',
        hairColor: 'None',
        height: 160,
        eyeColor: 'Black',
        mass: 68,
        homeworld: 'Sullust',
        birthYear: 'Unknown'
    },
    {
        name: 'Qui-Gon Jinn',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Brown',
        height: 193,
        eyeColor: 'Blue',
        mass: 89,
        homeworld: 'Unknown',
        birthYear: '92BBY'
    },
    {
        name: 'Nute Gunray',
        gender: 'Male',
        skinColor: 'Mottled green',
        hairColor: 'None',
        height: 191,
        eyeColor: 'Red',
        mass: 90,
        homeworld: 'Cato Neimoidia',
        birthYear: 'Unknown'
    },
    {
        name: 'Finis Valorum',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Blond',
        height: 170,
        eyeColor: 'Blue',
        mass: 'Unknown',
        homeworld: 'Coruscant',
        birthYear: '91BBY'
    },
    {
        name: 'Padme Amidala',
        gender: 'Female',
        skinColor: 'Light',
        hairColor: 'Brown',
        height: 185,
        eyeColor: 'Brown',
        mass: 45,
        homeworld: 'Naboo',
        birthYear: '46BBY'
    },
    {
        name: 'Jar Jar Binks',
        gender: 'Male',
        skinColor: 'Orange',
        hairColor: 'None',
        height: 196,
        eyeColor: 'Orange',
        mass: 66,
        homeworld: 'Naboo',
        birthYear: '52BBY'
    },
    {
        name: 'Roos Tarpals',
        gender: 'Male',
        skinColor: 'Grey',
        hairColor: 'None',
        height: 224,
        eyeColor: 'Orange',
        mass: 82,
        homeworld: 'Naboo',
        birthYear: 'Unknown'
    },
    {
        name: 'Rugor Nass',
        gender: 'Male',
        skinColor: 'Green',
        hairColor: 'None',
        height: 206,
        eyeColor: 'Orange',
        mass: 'Unknown',
        homeworld: 'Naboo',
        birthYear: 'Unknown'
    },
    {
        name: 'Ric Olié',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Brown',
        height: 183,
        eyeColor: 'Blue',
        mass: 'Unknown',
        homeworld: 'Naboo',
        birthYear: 'Unknown'
    },
    {
        name: 'Watto',
        gender: 'Male',
        skinColor: 'Blue, Grey',
        hairColor: 'Black',
        height: 137,
        eyeColor: 'Yellow',
        mass: 'Unknown',
        homeworld: 'Toydaria',
        birthYear: 'Unknown'
    },
    {
        name: 'Sebulba',
        gender: 'Male',
        skinColor: 'Grey, Red',
        hairColor: 'None',
        height: 112,
        eyeColor: 'Orange',
        mass: 40,
        homeworld: 'Malastare',
        birthYear: 'Unknown'
    },
    {
        name: 'Quarsh Panaka',
        gender: 'Male',
        skinColor: 'Dark',
        hairColor: 'Black',
        height: 183,
        eyeColor: 'Brown',
        mass: 'Unknown',
        homeworld: 'Naboo',
        birthYear: '62BBY'
    },
    {
        name: 'Shmi Skywalker',
        gender: 'Female',
        skinColor: 'Fair',
        hairColor: 'Black',
        height: 163,
        eyeColor: 'Brown',
        mass: 'Unknown',
        homeworld: 'Tatooine',
        birthYear: '72BBY'
    },
    {
        name: 'Darth Maul',
        gender: 'Male',
        skinColor: 'Red',
        hairColor: 'None',
        height: 175,
        eyeColor: 'Yellow',
        mass: 80,
        homeworld: 'Dathomir',
        birthYear: '54BBY'
    },
    {
        name: 'Bib Fortuna',
        gender: 'Male',
        skinColor: 'Pale',
        hairColor: 'None',
        height: 180,
        eyeColor: 'Pink',
        mass: 'Unknown',
        homeworld: 'Ryloth',
        birthYear: 'Unknown'
    },
    {
        name: 'Ayla Secura',
        gender: 'Female',
        skinColor: 'Blue',
        hairColor: 'None',
        height: 178,
        eyeColor: 'Hazel',
        mass: 55,
        homeworld: 'Ryloth',
        birthYear: '48BBY'
    },
    {
        name: 'Ratts Tyerel',
        gender: 'Male',
        skinColor: 'Grey, Blue',
        hairColor: 'None',
        height: 79,
        eyeColor: 'Unknown',
        mass: 15,
        homeworld: 'Aleen Minor',
        birthYear: 'Unknown'
    },
    {
        name: 'Dud Bolt',
        gender: 'Male',
        skinColor: 'Blue, Grey',
        hairColor: 'None',
        height: 94,
        eyeColor: 'Yellow',
        mass: 45,
        homeworld: 'Vulpter',
        birthYear: 'Unknown'
    },
    {
        name: 'Gasgano',
        gender: 'Male',
        skinColor: 'White, Blue',
        hairColor: 'None',
        height: 122,
        eyeColor: 'Black',
        mass: 'Unknown',
        homeworld: 'Troiken',
        birthYear: 'Unknown'
    },
    {
        name: 'Ben Quadinaros',
        gender: 'Male',
        skinColor: 'Grey, Green, Yellow',
        hairColor: 'None',
        height: 163,
        eyeColor: 'Orange',
        mass: 65,
        homeworld: 'Tund',
        birthYear: 'Unknown'
    },
    {
        name: 'Mace Windu',
        gender: 'Male',
        skinColor: 'Dark',
        hairColor: 'None',
        height: 188,
        eyeColor: 'Brown',
        mass: 84,
        homeworld: 'Haruun Kal',
        birthYear: '72BBY'
    },
    {
        name: 'Ki-Adi-Mundi',
        gender: 'Male',
        skinColor: 'Pale',
        hairColor: 'White',
        height: 198,
        eyeColor: 'Yellow',
        mass: 82,
        homeworld: 'Cerea',
        birthYear: '92BBY'
    },
    {
        name: 'Kit Fisto',
        gender: 'Male',
        skinColor: 'Green',
        hairColor: 'None',
        height: 196,
        eyeColor: 'Black',
        mass: 87,
        homeworld: 'Glee Anselm',
        birthYear: 'Unknown'
    },
    {
        name: 'Eeth Koth',
        gender: 'Male',
        skinColor: 'Brown',
        hairColor: 'Black',
        height: 171,
        eyeColor: 'Brown',
        mass: 'Unknown',
        homeworld: 'Iridonia',
        birthYear: 'Unknown'
    },
    {
        name: 'Adi Gallia',
        gender: 'Female',
        skinColor: 'Dark',
        hairColor: 'None',
        height: 184,
        eyeColor: 'Blue',
        mass: 50,
        homeworld: 'Coruscant',
        birthYear: 'Unknown'
    },
    {
        name: 'Saesee Tiin',
        gender: 'Male',
        skinColor: 'Pale',
        hairColor: 'None',
        height: 188,
        eyeColor: 'Orange',
        mass: 'Unknown',
        homeworld: 'Iktotch',
        birthYear: 'Unknown'
    },
    {
        name: 'Yarael Poof',
        gender: 'Male',
        skinColor: 'White',
        hairColor: 'None',
        height: 264,
        eyeColor: 'Yellow',
        mass: 'Unknown',
        homeworld: 'Quermia',
        birthYear: 'Unknown'
    },
    {
        name: 'Plo Koon',
        gender: 'Male',
        skinColor: 'Orange',
        hairColor: 'None',
        height: 188,
        eyeColor: 'Black',
        mass: 80,
        homeworld: 'Dorin',
        birthYear: '22BBY'
    },
    {
        name: 'Mas Amedda',
        gender: 'Male',
        skinColor: 'Blue',
        hairColor: 'None',
        height: 196,
        eyeColor: 'Blue',
        mass: 'Unknown',
        homeworld: 'Champala',
        birthYear: 'Unknown'
    },
    {
        name: 'Gregar Typho',
        gender: 'Male',
        skinColor: 'Dark',
        hairColor: 'Black',
        height: 185,
        eyeColor: 'Brown',
        mass: 85,
        homeworld: 'Naboo',
        birthYear: 'Unknown'
    },
    {
        name: 'Cordé',
        gender: 'Female',
        skinColor: 'Light',
        hairColor: 'Brown',
        height: 157,
        eyeColor: 'Brown',
        mass: 'Unknown',
        homeworld: 'Naboo',
        birthYear: 'Unknown'
    },
    {
        name: 'Cliegg Lars',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'Brown',
        height: 183,
        eyeColor: 'Blue',
        mass: 'Unknown',
        homeworld: 'Tatooine',
        birthYear: '82BBY'
    },
    {
        name: 'Poggle the Lesser',
        gender: 'Male',
        skinColor: 'Green',
        hairColor: 'None',
        height: 183,
        eyeColor: 'Yellow',
        mass: 80,
        homeworld: 'Geonosis',
        birthYear: 'Unknown'
    },
    {
        name: 'Luminara Unduli',
        gender: 'Female',
        skinColor: 'Yellow',
        hairColor: 'Black',
        height: 170,
        eyeColor: 'Blue',
        mass: '56.2',
        homeworld: 'Mirial',
        birthYear: '58BBY'
    },
    {
        name: 'Barriss Offee',
        gender: 'Female',
        skinColor: 'Yellow',
        hairColor: 'Black',
        height: 166,
        eyeColor: 'Blue',
        mass: 50,
        homeworld: 'Mirial',
        birthYear: '40BBY'
    },
    {
        name: 'Dormé',
        gender: 'Female',
        skinColor: 'Light',
        hairColor: 'Brown',
        height: 165,
        eyeColor: 'Brown',
        mass: 'Unknown',
        homeworld: 'Naboo',
        birthYear: 'Unknown'
    },
    {
        name: 'Dooku',
        gender: 'Male',
        skinColor: 'Fair',
        hairColor: 'White',
        height: 193,
        eyeColor: 'Brown',
        mass: 80,
        homeworld: 'Serenno',
        birthYear: '102BBY'
    },
    {
        name: 'Bail Prestor Organa',
        gender: 'Male',
        skinColor: 'Tan',
        hairColor: 'Black',
        height: 191,
        eyeColor: 'Brown',
        mass: 'Unknown',
        homeworld: 'Alderaan',
        birthYear: '67BBY'
    },
    {
        name: 'Jango Fett',
        gender: 'Male',
        skinColor: 'Tan',
        hairColor: 'Black',
        height: 183,
        eyeColor: 'Brown',
        mass: 79,
        homeworld: 'Concord Dawn',
        birthYear: '66BBY'
    },
    {
        name: 'Zam Wesell',
        gender: 'Female',
        skinColor: 'Fair, Green, Yellow',
        hairColor: 'Blonde',
        height: 168,
        eyeColor: 'Yellow',
        mass: 55,
        homeworld: 'Zolan',
        birthYear: 'Unknown'
    },
    {
        name: 'Dexter Jettster',
        gender: 'Male',
        skinColor: 'Brown',
        hairColor: 'None',
        height: 198,
        eyeColor: 'Yellow',
        mass: 102,
        homeworld: 'Ojom',
        birthYear: 'Unknown'
    },
    {
        name: 'Lama Su',
        gender: 'Male',
        skinColor: 'Grey',
        hairColor: 'None',
        height: 229,
        eyeColor: 'Black',
        mass: 88,
        homeworld: 'Kamino',
        birthYear: 'Unknown'
    },
    {
        name: 'Taun We',
        gender: 'Female',
        skinColor: 'Grey',
        hairColor: 'None',
        height: 213,
        eyeColor: 'Black',
        mass: 'Unknown',
        homeworld: 'Kamino',
        birthYear: 'Unknown'
    },
    {
        name: 'Jocasta Nu',
        gender: 'Female',
        skinColor: 'Fair',
        hairColor: 'White',
        height: 167,
        eyeColor: 'Blue',
        mass: 'Unknown',
        homeworld: 'Coruscant',
        birthYear: 'Unknown'
    },
    {
        name: 'R4-P17',
        gender: 'Female',
        skinColor: 'Silver, Red',
        hairColor: 'None',
        height: 96,
        eyeColor: 'Red, Blue',
        mass: 'Unknown',
        homeworld: 'Unknown',
        birthYear: 'Unknown'
    },
    {
        name: 'Wat Tambor',
        gender: 'Male',
        skinColor: 'Green, Grey',
        hairColor: 'None',
        height: 193,
        eyeColor: 'Unknown',
        mass: 48,
        homeworld: 'Skako',
        birthYear: 'Unknown'
    },
    {
        name: 'San Hill',
        gender: 'Male',
        skinColor: 'Grey',
        hairColor: 'None',
        height: 191,
        eyeColor: 'Gold',
        mass: 'Unknown',
        homeworld: 'Muunilinst',
        birthYear: 'Unknown'
    },
    {
        name: 'Shaak Ti',
        gender: 'Female',
        skinColor: 'Red, Blue, White',
        hairColor: 'None',
        height: 178,
        eyeColor: 'Black',
        mass: 57,
        homeworld: 'Shili',
        birthYear: 'Unknown'
    },
    {
        name: 'Grievous',
        gender: 'Male',
        skinColor: 'Brown, White',
        hairColor: 'None',
        height: 216,
        eyeColor: 'Green, Yellow',
        mass: 159,
        homeworld: 'Kalee',
        birthYear: 'Unknown'
    },
    {
        name: 'Tarfful',
        gender: 'Male',
        skinColor: 'Brown',
        hairColor: 'Brown',
        height: 234,
        eyeColor: 'Blue',
        mass: 136,
        homeworld: 'Kashyyyk',
        birthYear: 'Unknown'
    },
    {
        name: 'Raymus Antilles',
        gender: 'Male',
        skinColor: 'Light',
        hairColor: 'Brown',
        height: 188,
        eyeColor: 'Brown',
        mass: 79,
        homeworld: 'Alderaan',
        birthYear: 'Unknown'
    },
    {
        name: 'Sly Moore',
        gender: 'Female',
        skinColor: 'Pale',
        hairColor: 'None',
        height: 178,
        eyeColor: 'White',
        mass: 48,
        homeworld: 'Umbara',
        birthYear: 'Unknown'
    },
    {
        name: 'Tion Medon',
        gender: 'Male',
        skinColor: 'Grey',
        hairColor: 'None',
        height: 206,
        eyeColor: 'Black',
        mass: 80,
        homeworld: 'Utapau',
        birthYear: 'Unknown'
    }
]

const NUMBER_OF_CHARACTERS = starWarsCharacters.length

const getRandomCharacter = () => starWarsCharacters[Math.floor(Math.random() * NUMBER_OF_CHARACTERS)]

const getRandomName = () => starWarsCharacters[Math.floor(Math.random() * NUMBER_OF_CHARACTERS)].name

const getRandomCharacters = (n = 1) =>
    Array(n)
        .fill('')
        .map(() => starWarsCharacters[Math.floor(Math.random() * NUMBER_OF_CHARACTERS)])

const getRandomNames = (n = 1) =>
    Array(n)
        .fill('')
        .map(() => starWarsCharacters[Math.floor(Math.random() * NUMBER_OF_CHARACTERS)].name)

export { getRandomCharacter, getRandomCharacters, getRandomName, getRandomNames }
export default { getRandomCharacter, getRandomCharacters, getRandomName, getRandomNames }
