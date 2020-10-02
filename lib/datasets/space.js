"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomPlanets = exports.getRandomPlanetName = exports.getRandomPlanet = exports.getRandomCelestialObjects = exports.getRandomCelestialObjectName = exports.getRandomCelestialObject = void 0;
const planets = [
    {
        name: '1 Ceres',
        bodyName: '(1) Cérès',
        id: 'ceres',
        isPlanet: true,
        moons: []
    },
    {
        name: '136199 Eris',
        bodyName: '(136199) Éris',
        id: 'eris',
        isPlanet: true,
        moons: ['Dysnomie']
    },
    {
        name: 'Uranus',
        bodyName: 'Uranus',
        id: 'uranus',
        isPlanet: true,
        moons: [
            'Ariel',
            'Umbriel',
            'Titania',
            'Obéron',
            'Miranda',
            'Cordélia',
            'Ophélie',
            'Bianca',
            'Cressida',
            'Desdémone',
            'Juliette',
            'Portia',
            'Rosalinde',
            'Belinda',
            'Puck',
            'Caliban',
            'Sycorax',
            'Prospero',
            'Setebos',
            'Stephano',
            'Trinculo',
            'Francisco',
            'Margaret',
            'Ferdinand',
            'Perdita',
            'Mab',
            'Cupid'
        ]
    },
    {
        name: 'Pluto',
        bodyName: 'Pluton',
        id: 'pluton',
        isPlanet: true,
        moons: ['Charon', 'Nix', 'Hydra', 'Kerberos', 'Styx']
    },
    {
        name: 'Neptune',
        bodyName: 'Neptune',
        id: 'neptune',
        isPlanet: true,
        moons: ['Triton', 'Néreïde', 'Naïade', 'Thalassa', 'Despina', 'Galatée', 'Larissa', 'Protée', 'Halimède', 'Psamathée', 'Sao', 'Laomédie', 'Néso', 'Hippocampe']
    },
    {
        name: '136108 Haumea',
        bodyName: '(136108) Hauméa',
        id: 'haumea',
        isPlanet: true,
        moons: ['Namaka', "Hi'iaka"]
    },
    {
        name: '136472 Makemake',
        bodyName: '(136472) Makémaké',
        id: 'makemake',
        isPlanet: true,
        moons: ['S/2015 (136472) 1']
    },
    {
        name: 'Jupiter',
        bodyName: 'Jupiter',
        id: 'jupiter',
        isPlanet: true,
        moons: [
            'Io',
            'Europe',
            'Ganymède',
            'Callisto',
            'Amalthée',
            'Himalia',
            'Élara',
            'Pasiphaé',
            'Sinopé',
            'Lysithéa',
            'Carmé',
            'Ananké',
            'Léda',
            'Thébé',
            'Adrastée',
            'Métis',
            'Callirrhoé',
            'Thémisto',
            'Mégaclité',
            'Taygété',
            'Chaldéné',
            'Harpalyké',
            'Kalyké',
            'Iocasté',
            'Erinomé',
            'Isonoé',
            'Praxidyké',
            'Autonoé',
            'Thyoné',
            'Hermippé',
            'Aitné',
            'Eurydomé',
            'Euanthé',
            'Euporie',
            'Orthosie',
            'Spondé',
            'Calé',
            'Pasithée',
            'Hégémone',
            'Mnémé',
            'Aoedé',
            'Thelxinoé',
            'Arché',
            'Callichore',
            'Hélicé',
            'Carpo',
            'Eukéladé',
            'Cyllène',
            'Coré',
            'Hersé',
            'S/2003 J 2',
            'Euphémé',
            'S/2003 J 4',
            'Eiréné',
            'S/2003 J 9',
            'S/2003 J 10',
            'S/2003 J 12',
            'Philophrosyne',
            'S/2003 J 16',
            'S/2003 J 18',
            'S/2003 J 19',
            'S/2003 J 23',
            'Dia',
            'S/2010 J 1',
            'S/2010 J 2',
            'S/2011 J 1',
            'S/2011 J 2',
            'S/2017 J 1',
            'S/2016 J 1',
            'Valétudo',
            'S/2017 J 2',
            'S/2017 J 3',
            'Pandia',
            'S/2017 J 5',
            'S/2017 J 6',
            'S/2017 J 7',
            'S/2017 J 8',
            'S/2017 J 9',
            'Ersa'
        ]
    },
    {
        name: 'Mars',
        bodyName: 'Mars',
        id: 'mars',
        isPlanet: true,
        moons: ['Phobos', 'Deïmos']
    },
    {
        name: 'Mercury',
        bodyName: 'Mercure',
        id: 'mercure',
        isPlanet: true,
        moons: []
    },
    {
        name: 'Saturn',
        bodyName: 'Saturne',
        id: 'saturne',
        isPlanet: true,
        moons: [
            'Mimas',
            'Encelade',
            'Téthys',
            'Dioné',
            'Rhéa',
            'Titan',
            'Hypérion',
            'Japet',
            'Phoebé',
            'Janus',
            'Epiméthée',
            'Hélène',
            'Télesto',
            'Calypso',
            'Atlas',
            'Prométhée',
            'Pandore',
            'Pan',
            'Ymir',
            'Paaliaq',
            'Tarvos',
            'Ijiraq',
            'Suttungr',
            'Kiviuq',
            'Mundilfari',
            'Albiorix',
            'Skathi',
            'Erriapo',
            'Siarnaq',
            'Thrymr',
            'Narvi',
            'Méthone',
            'Pallène',
            'Pollux',
            'Daphnis',
            'Aegir',
            'Bebhionn',
            'Bergelmir',
            'Bestla',
            'Farbauti',
            'Fenrir',
            'Fornjot',
            'Hati',
            'Hyrrokkin',
            'Kari',
            'Loge',
            'Skoll',
            'Surtur',
            'Anthé',
            'Jarnsaxa',
            'Greip',
            'Tarqeq',
            'Égéon',
            'S/2004 S 7',
            'S/2004 S 12',
            'S/2004 S 13',
            'S/2004 S 17',
            'S/2006 S 1',
            'S/2006 S 3',
            'S/2007 S 2',
            'S/2007 S 3',
            'S/2009 S 1',
            'S/2004 S 3',
            'S/2004 S 4',
            'S/2004 S 6'
        ]
    },
    {
        name: 'Earth',
        bodyName: 'La Terre',
        id: 'terre',
        isPlanet: true,
        moons: ['La Lune']
    },
    {
        name: 'Venus',
        bodyName: 'Vénus',
        id: 'venus',
        isPlanet: true,
        moons: []
    }
];
const objects = [
    {
        name: 'Moon',
        bodyName: 'La Lune',
        id: 'lune',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Phobos',
        bodyName: 'Phobos',
        id: 'phobos',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Deimos',
        bodyName: 'Deïmos',
        id: 'deimos',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Io',
        bodyName: 'Io',
        id: 'io',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Europa',
        bodyName: 'Europe',
        id: 'europe',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Ganymede',
        bodyName: 'Ganymède',
        id: 'ganymede',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Callisto',
        bodyName: 'Callisto',
        id: 'callisto',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Amalthea',
        bodyName: 'Amalthée',
        id: 'amalthee',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Himalia',
        bodyName: 'Himalia',
        id: 'himalia',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Elara',
        bodyName: 'Élara',
        id: 'elara',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Pasiphae',
        bodyName: 'Pasiphaé',
        id: 'pasiphae',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Sinope',
        bodyName: 'Sinopé',
        id: 'sinope',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Lysithea',
        bodyName: 'Lysithéa',
        id: 'lysithea',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Carme',
        bodyName: 'Carmé',
        id: 'carme',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Ananke',
        bodyName: 'Ananké',
        id: 'ananke',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Leda',
        bodyName: 'Léda',
        id: 'leda',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Thebe',
        bodyName: 'Thébé',
        id: 'thebe',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Adrastea',
        bodyName: 'Adrastée',
        id: 'adrastee',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Metis',
        bodyName: 'Métis',
        id: 'metis',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Callirrhoe',
        bodyName: 'Callirrhoé',
        id: 'callirrhoe ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Themisto',
        bodyName: 'Thémisto',
        id: 'themisto ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Megaclite',
        bodyName: 'Mégaclité',
        id: 'megaclite ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Taygete',
        bodyName: 'Taygété',
        id: 'taygete ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Chaldene',
        bodyName: 'Chaldéné',
        id: 'chaldene ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Harpalyke',
        bodyName: 'Harpalyké',
        id: 'harpalyke ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Kalyke',
        bodyName: 'Kalyké',
        id: 'kalyke ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Iocaste',
        bodyName: 'Iocasté',
        id: 'iocaste ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Erinome',
        bodyName: 'Erinomé',
        id: 'erinome ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Isonoe',
        bodyName: 'Isonoé',
        id: 'isonoe ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Praxidike',
        bodyName: 'Praxidyké',
        id: 'praxidike ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Autonoe',
        bodyName: 'Autonoé',
        id: 'autonoe ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Thyone',
        bodyName: 'Thyoné',
        id: 'thyone ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Hermippe',
        bodyName: 'Hermippé',
        id: 'hermippe ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Aitne',
        bodyName: 'Aitné',
        id: 'aitne ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Eurydome',
        bodyName: 'Eurydomé',
        id: 'eurydome ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Euanthe',
        bodyName: 'Euanthé',
        id: 'euanthe ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Euporie',
        bodyName: 'Euporie',
        id: 'euporie ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Orthosie',
        bodyName: 'Orthosie',
        id: 'orthosie ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Sponde',
        bodyName: 'Spondé',
        id: 'sponde ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Kale',
        bodyName: 'Calé',
        id: 'cale ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Pasithee',
        bodyName: 'Pasithée',
        id: 'pasithee ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Hegemone',
        bodyName: 'Hégémone',
        id: 'hegemone ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Mneme',
        bodyName: 'Mnémé',
        id: 'mneme ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Aoede',
        bodyName: 'Aoedé',
        id: 'aoede ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Thelxinoe',
        bodyName: 'Thelxinoé',
        id: 'thelxinoe ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Arche',
        bodyName: 'Arché',
        id: 'arche ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Kallichore',
        bodyName: 'Callichore',
        id: 'callichore ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Helike',
        bodyName: 'Hélicé',
        id: 'helice ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Carpo',
        bodyName: 'Carpo',
        id: 'carpo ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Eukelade',
        bodyName: 'Eukéladé',
        id: 'eukelade ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Cyllene',
        bodyName: 'Cyllène',
        id: 'cyllene ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Kore',
        bodyName: 'Coré',
        id: 'core ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Herse',
        bodyName: 'Hersé',
        id: 'herse ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2003 J 2',
        bodyName: 'S/2003 J 2',
        id: 's2003j2 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Eupheme',
        bodyName: 'Euphémé',
        id: 'eupheme',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2003 J 4',
        bodyName: 'S/2003 J 4',
        id: 's2003j4 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Eirene',
        bodyName: 'Eiréné',
        id: 'eirene',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2003 J 9',
        bodyName: 'S/2003 J 9',
        id: 's2003j9 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2003 J 10',
        bodyName: 'S/2003 J 10',
        id: 's2003j10 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2003 J 12',
        bodyName: 'S/2003 J 12',
        id: 's2003j12 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Philophrosyne',
        bodyName: 'Philophrosyne',
        id: 'philophrosyne',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2003 J 16',
        bodyName: 'S/2003 J 16',
        id: 's2003j16 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2003 J 18',
        bodyName: 'S/2003 J 18',
        id: 's2003j18 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2003 J 19',
        bodyName: 'S/2003 J 19',
        id: 's2003j19 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2003 J 23',
        bodyName: 'S/2003 J 23',
        id: 's2003j23 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Mimas',
        bodyName: 'Mimas',
        id: 'mimas',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Enceladus',
        bodyName: 'Encelade',
        id: 'encelade',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Tethys',
        bodyName: 'Téthys',
        id: 'tethys',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Dione',
        bodyName: 'Dioné',
        id: 'dione',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Rhea',
        bodyName: 'Rhéa',
        id: 'rhea',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Titan',
        bodyName: 'Titan',
        id: 'titan',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Hyperion',
        bodyName: 'Hypérion',
        id: 'hyperion',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Iapetus',
        bodyName: 'Japet',
        id: 'japet',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Phoebe',
        bodyName: 'Phoebé',
        id: 'phoebe',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Janus',
        bodyName: 'Janus',
        id: 'janus',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Epimetheus',
        bodyName: 'Epiméthée',
        id: 'epimethee',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Helene',
        bodyName: 'Hélène',
        id: 'helene',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Telesto',
        bodyName: 'Télesto',
        id: 'telesto',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Calypso',
        bodyName: 'Calypso',
        id: 'calypso',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Atlas',
        bodyName: 'Atlas',
        id: 'atlas',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Prometheus',
        bodyName: 'Prométhée',
        id: 'promethee',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Pandora',
        bodyName: 'Pandore',
        id: 'pandore',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Pan',
        bodyName: 'Pan',
        id: 'pan',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Ymir',
        bodyName: 'Ymir',
        id: 'ymir ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Paaliaq',
        bodyName: 'Paaliaq',
        id: 'paaliaq ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Tarvos',
        bodyName: 'Tarvos',
        id: 'tarvos ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Ijiraq',
        bodyName: 'Ijiraq',
        id: 'ijiraq ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Suttungr',
        bodyName: 'Suttungr',
        id: 'suttungr ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Kiviuq',
        bodyName: 'Kiviuq',
        id: 'kiviuq ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Mundilfari',
        bodyName: 'Mundilfari',
        id: 'mundilfari ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Albiorix',
        bodyName: 'Albiorix',
        id: 'albiorix ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Skathi',
        bodyName: 'Skathi',
        id: 'skathi ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Erriapus',
        bodyName: 'Erriapo',
        id: 'erriapo',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Siarnaq',
        bodyName: 'Siarnaq',
        id: 'siarnaq ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Thrymr',
        bodyName: 'Thrymr',
        id: 'thrymr ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Narvi',
        bodyName: 'Narvi',
        id: 'narvi ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Methone',
        bodyName: 'Méthone',
        id: 'methone ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Pallene',
        bodyName: 'Pallène',
        id: 'pallene ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Polydeuces',
        bodyName: 'Pollux',
        id: 'pollux',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Daphnis',
        bodyName: 'Daphnis',
        id: 'daphnis ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Aegir',
        bodyName: 'Aegir',
        id: 'aegir ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Bebhionn',
        bodyName: 'Bebhionn',
        id: 'bebhionn ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Bergelmir',
        bodyName: 'Bergelmir',
        id: 'bergelmir ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Bestla',
        bodyName: 'Bestla',
        id: 'bestla ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Farbauti',
        bodyName: 'Farbauti',
        id: 'farbauti ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Fenrir',
        bodyName: 'Fenrir',
        id: 'fenrir ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Fornjot',
        bodyName: 'Fornjot',
        id: 'fornjot ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Hati',
        bodyName: 'Hati',
        id: 'hati ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Hyrrokkin',
        bodyName: 'Hyrrokkin',
        id: 'hyrrokkin ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Kari',
        bodyName: 'Kari',
        id: 'kari ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Loge',
        bodyName: 'Loge',
        id: 'loge ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Skoll',
        bodyName: 'Skoll',
        id: 'skoll ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Surtur',
        bodyName: 'Surtur',
        id: 'surtur ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Anthe',
        bodyName: 'Anthé',
        id: 'anthe ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Jarnsaxa',
        bodyName: 'Jarnsaxa',
        id: 'jarnsaxa ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Greip',
        bodyName: 'Greip',
        id: 'greip ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Tarqeq',
        bodyName: 'Tarqeq',
        id: 'tarqeq ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Aegaeon',
        bodyName: 'Égéon',
        id: 'egeon',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2004 S 7',
        bodyName: 'S/2004 S 7',
        id: 's2004s7 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2004 S 12',
        bodyName: 'S/2004 S 12',
        id: 's2004s12 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2004 S 13',
        bodyName: 'S/2004 S 13',
        id: 's2004s13 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2004 S 17',
        bodyName: 'S/2004 S 17',
        id: 's2004s17 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2006 S 1',
        bodyName: 'S/2006 S 1',
        id: 's2006s1 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2006 S 3',
        bodyName: 'S/2006 S 3',
        id: 's2006s3 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2007 S 2',
        bodyName: 'S/2007 S 2',
        id: 's2007s2 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2007 S 3',
        bodyName: 'S/2007 S 3',
        id: 's2007s3 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2009 S 1',
        bodyName: 'S/2009 S 1',
        id: 's2009s1 ',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Ariel',
        bodyName: 'Ariel',
        id: 'ariel',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Umbriel',
        bodyName: 'Umbriel',
        id: 'umbriel',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Titania',
        bodyName: 'Titania',
        id: 'titania',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Oberon',
        bodyName: 'Obéron',
        id: 'oberon',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Miranda',
        bodyName: 'Miranda',
        id: 'miranda',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Cordelia',
        bodyName: 'Cordélia',
        id: 'cordelia',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Ophelia',
        bodyName: 'Ophélie',
        id: 'ophelia',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Bianca',
        bodyName: 'Bianca',
        id: 'bianca',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Cressida',
        bodyName: 'Cressida',
        id: 'cressida',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Desdemona',
        bodyName: 'Desdémone',
        id: 'desdemona',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Juliet',
        bodyName: 'Juliette',
        id: 'juliet',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Portia',
        bodyName: 'Portia',
        id: 'portia',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Rosalind',
        bodyName: 'Rosalinde',
        id: 'rosalind',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Belinda',
        bodyName: 'Belinda',
        id: 'belinda',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Puck',
        bodyName: 'Puck',
        id: 'puck',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Caliban',
        bodyName: 'Caliban',
        id: 'caliban',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Sycorax',
        bodyName: 'Sycorax',
        id: 'sycorax',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Prospero',
        bodyName: 'Prospero',
        id: 'prospero',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Setebos',
        bodyName: 'Setebos',
        id: 'setebos',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Stephano',
        bodyName: 'Stephano',
        id: 'stephano',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Trinculo',
        bodyName: 'Trinculo',
        id: 'trinculo',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Francisco',
        bodyName: 'Francisco',
        id: 'francisco',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Margaret',
        bodyName: 'Margaret',
        id: 'margaret',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Ferdinand',
        bodyName: 'Ferdinand',
        id: 'ferdinand',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Perdita',
        bodyName: 'Perdita',
        id: 'perdita',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Mab',
        bodyName: 'Mab',
        id: 'mab',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Cupid',
        bodyName: 'Cupid',
        id: 'cupid',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Triton',
        bodyName: 'Triton',
        id: 'triton',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Nereid',
        bodyName: 'Néreïde',
        id: 'nereide',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Naiad',
        bodyName: 'Naïade',
        id: 'naiade',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Thalassa',
        bodyName: 'Thalassa',
        id: 'thalassa',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Despina',
        bodyName: 'Despina',
        id: 'despina',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Galatea',
        bodyName: 'Galatée',
        id: 'galatee',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Larissa',
        bodyName: 'Larissa',
        id: 'larissa',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Proteus',
        bodyName: 'Protée',
        id: 'protee',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Halimede',
        bodyName: 'Halimède',
        id: 'halimede',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Psamathe',
        bodyName: 'Psamathée',
        id: 'psamathee',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Sao',
        bodyName: 'Sao',
        id: 'sao',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Laomedeia',
        bodyName: 'Laomédie',
        id: 'laomedie',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Neso',
        bodyName: 'Néso',
        id: 'neso',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Charon',
        bodyName: 'Charon',
        id: 'charon',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Nix',
        bodyName: 'Nix',
        id: 'nix',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Hydra',
        bodyName: 'Hydra',
        id: 'hydra',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Namaka',
        bodyName: 'Namaka',
        id: 'namaka',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Hiʻiaka',
        bodyName: "Hi'iaka",
        id: 'hiiaka',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Dysnomia',
        bodyName: 'Dysnomie',
        id: 'dysnomie',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Dia',
        bodyName: 'Dia',
        id: 'dia',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2004 S 3',
        bodyName: 'S/2004 S 3',
        id: 's2004s3',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2004 S 4',
        bodyName: 'S/2004 S 4',
        id: 's2004s4',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2004 S 6',
        bodyName: 'S/2004 S 6',
        id: 's2004s6',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2010 J 1',
        bodyName: 'S/2010 J 1',
        id: 's2010j1',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2010 J 2',
        bodyName: 'S/2010 J 2',
        id: 's2010j2',
        isPlanet: false,
        moons: []
    },
    {
        name: '1 Ceres',
        bodyName: '(1) Cérès',
        id: 'ceres',
        isPlanet: true,
        moons: []
    },
    {
        name: '6 Hebe',
        bodyName: '(6) Hébé',
        id: 'hebe',
        isPlanet: false,
        moons: []
    },
    {
        name: '47171 Lempo',
        bodyName: '(47171) Lempo',
        id: 'lempo',
        isPlanet: false,
        moons: []
    },
    {
        name: 'The Little Prince',
        bodyName: 'Petit-Prince',
        id: 'petitprince',
        isPlanet: false,
        moons: []
    },
    {
        name: '762 Pulcova',
        bodyName: '(762) Pulcova',
        id: 'pulcova',
        isPlanet: false,
        moons: []
    },
    {
        name: '4179 Toutatis',
        bodyName: '(4179) Toutatis',
        id: 'toutatis',
        isPlanet: false,
        moons: []
    },
    {
        name: '50000 Quaoar',
        bodyName: '(50000) Quaoar',
        id: 'quaoar',
        isPlanet: false,
        moons: []
    },
    {
        name: '2867 Šteins',
        bodyName: '(2867) Šteins',
        id: 'steins',
        isPlanet: false,
        moons: []
    },
    {
        name: '136199 Eris',
        bodyName: '(136199) Éris',
        id: 'eris',
        isPlanet: true,
        moons: ['Dysnomie']
    },
    {
        name: '5 Astraea',
        bodyName: '(5) Astrée',
        id: 'astree',
        isPlanet: false,
        moons: []
    },
    {
        name: '5145 Pholus',
        bodyName: '(5145) Pholus',
        id: 'pholus',
        isPlanet: false,
        moons: []
    },
    {
        name: '4769 Castalia',
        bodyName: '(4769) Castalia',
        id: 'castalia',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Remus',
        bodyName: 'Rémus',
        id: 'remus',
        isPlanet: false,
        moons: []
    },
    {
        name: '624 Hektor',
        bodyName: '(624) Hector',
        id: 'hector',
        isPlanet: false,
        moons: []
    },
    {
        name: '216 Kleopatra',
        bodyName: '(216) Kléopatra',
        id: 'kleopatra',
        isPlanet: false,
        moons: []
    },
    {
        name: '3753 Cruithne',
        bodyName: '(3753) Cruithne',
        id: 'cruithne',
        isPlanet: false,
        moons: []
    },
    {
        name: '3 Junon',
        bodyName: '(3) Junon',
        id: 'junon',
        isPlanet: false,
        moons: []
    },
    {
        name: '10 Hygiea',
        bodyName: '(10) Hygie',
        id: 'hygie',
        isPlanet: false,
        moons: []
    },
    {
        name: '21 Lutetia',
        bodyName: '(21) Lutetia',
        id: 'lutetia',
        isPlanet: false,
        moons: []
    },
    {
        name: '253 Mathilde',
        bodyName: '(253) Mathilde',
        id: 'mathilde',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Uranus',
        bodyName: 'Uranus',
        id: 'uranus',
        isPlanet: true,
        moons: [
            'Ariel',
            'Umbriel',
            'Titania',
            'Obéron',
            'Miranda',
            'Cordélia',
            'Ophélie',
            'Bianca',
            'Cressida',
            'Desdémone',
            'Juliette',
            'Portia',
            'Rosalinde',
            'Belinda',
            'Puck',
            'Caliban',
            'Sycorax',
            'Prospero',
            'Setebos',
            'Stephano',
            'Trinculo',
            'Francisco',
            'Margaret',
            'Ferdinand',
            'Perdita',
            'Mab',
            'Cupid'
        ]
    },
    {
        name: '7 Iris',
        bodyName: '(7) Iris',
        id: 'iris',
        isPlanet: false,
        moons: []
    },
    {
        name: '433 Eros',
        bodyName: '(433) Éros',
        id: 'eros',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Vanth',
        bodyName: 'Vanth',
        id: 'vanth',
        isPlanet: false,
        moons: []
    },
    {
        name: '90377 Sedna',
        bodyName: '(90377) Sedna',
        id: 'sedna',
        isPlanet: false,
        moons: []
    },
    {
        name: '10199 Chariklo',
        bodyName: '(10199) Chariklo',
        id: 'chariklo',
        isPlanet: false,
        moons: []
    },
    {
        name: '87 Sylvia',
        bodyName: '(87) Sylvia',
        id: 'sylvia',
        isPlanet: false,
        moons: []
    },
    {
        name: '(243) Ida I Dactyl',
        bodyName: 'Dactyl',
        id: 'dactyl',
        isPlanet: false,
        moons: []
    },
    {
        name: '90482 Orcus',
        bodyName: '(90482) Orcus',
        id: 'orcus',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Pluto',
        bodyName: 'Pluton',
        id: 'pluton',
        isPlanet: true,
        moons: ['Charon', 'Nix', 'Hydra', 'Kerberos', 'Styx']
    },
    {
        name: '5335 Damocles',
        bodyName: '(5335) Damoclès',
        id: 'damocles',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Romulus',
        bodyName: 'Romulus',
        id: 'romulus',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Alexhelios',
        bodyName: 'Alexhélios',
        id: 'alexhelios',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Cleoselene',
        bodyName: 'Cléoséléné',
        id: 'cleoselene',
        isPlanet: false,
        moons: []
    },
    {
        name: '8 Flora',
        bodyName: '(8) Flore',
        id: 'flore',
        isPlanet: false,
        moons: []
    },
    {
        name: '2060 Chiron',
        bodyName: '(2060) Chiron',
        id: 'chiron',
        isPlanet: false,
        moons: []
    },
    {
        name: '5261 Eureka',
        bodyName: '(5261) Eurêka',
        id: 'eureka',
        isPlanet: false,
        moons: []
    },
    {
        name: '588 Achilles',
        bodyName: '(588) Achille',
        id: 'achille',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Weywot',
        bodyName: 'Weywot',
        id: 'weywot',
        isPlanet: false,
        moons: []
    },
    {
        name: '28978 Ixion',
        bodyName: '(28978) Ixion',
        id: 'ixion',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Neptune',
        bodyName: 'Neptune',
        id: 'neptune',
        isPlanet: true,
        moons: ['Triton', 'Néreïde', 'Naïade', 'Thalassa', 'Despina', 'Galatée', 'Larissa', 'Protée', 'Halimède', 'Psamathée', 'Sao', 'Laomédie', 'Néso', 'Hippocampe']
    },
    {
        name: 'Shoemaker-Levy 9',
        bodyName: 'Shoemaker-Levy 9',
        id: 'sl9',
        isPlanet: false,
        moons: []
    },
    {
        name: '9 Metis',
        bodyName: '(9) Métis',
        id: '9metis',
        isPlanet: false,
        moons: []
    },
    {
        name: '136108 Haumea',
        bodyName: '(136108) Hauméa',
        id: 'haumea',
        isPlanet: true,
        moons: ['Namaka', "Hi'iaka"]
    },
    {
        name: '7066 Nessus',
        bodyName: '(7066) Nessus',
        id: 'nessus',
        isPlanet: false,
        moons: []
    },
    {
        name: '25143 Itokawa',
        bodyName: '(25143) Itokawa',
        id: 'itokawa',
        isPlanet: false,
        moons: []
    },
    {
        name: '10370 Hylonome',
        bodyName: '(10370) Hylonome',
        id: 'hylonome',
        isPlanet: false,
        moons: []
    },
    {
        name: '45 Eugenia',
        bodyName: '(45) Eugénie',
        id: 'eugenia',
        isPlanet: false,
        moons: []
    },
    {
        name: '(308933) 2006 SQ372',
        bodyName: '(308933) 2006 SQ372',
        id: '2006SQ372',
        isPlanet: false,
        moons: []
    },
    {
        name: '2 Pallas',
        bodyName: '(2) Pallas',
        id: 'pallas',
        isPlanet: false,
        moons: []
    },
    {
        name: '8405 Asbolus',
        bodyName: '(8405) Asbolus',
        id: 'asbolus',
        isPlanet: false,
        moons: []
    },
    {
        name: '20000 Varuna',
        bodyName: '(20000) Varuna',
        id: 'varuna',
        isPlanet: false,
        moons: []
    },
    {
        name: '4 Vesta',
        bodyName: '(4) Vesta',
        id: 'vesta',
        isPlanet: false,
        moons: []
    },
    {
        name: '243 Ida',
        bodyName: '(243) Ida',
        id: 'ida',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Comet Hyakutake',
        bodyName: 'Hyakutake',
        id: 'hyakutake',
        isPlanet: false,
        moons: []
    },
    {
        name: '951 Gaspra',
        bodyName: '(951) Gaspra',
        id: 'gaspra',
        isPlanet: false,
        moons: []
    },
    {
        name: '15760 Albion',
        bodyName: '(15760) Albion',
        id: 'albion',
        isPlanet: false,
        moons: []
    },
    {
        name: '136472 Makemake',
        bodyName: '(136472) Makémaké',
        id: 'makemake',
        isPlanet: true,
        moons: ['S/2015 (136472) 1']
    },
    {
        name: "Halley's Comet",
        bodyName: 'Comète de Halley',
        id: 'halley',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Jupiter',
        bodyName: 'Jupiter',
        id: 'jupiter',
        isPlanet: true,
        moons: [
            'Io',
            'Europe',
            'Ganymède',
            'Callisto',
            'Amalthée',
            'Himalia',
            'Élara',
            'Pasiphaé',
            'Sinopé',
            'Lysithéa',
            'Carmé',
            'Ananké',
            'Léda',
            'Thébé',
            'Adrastée',
            'Métis',
            'Callirrhoé',
            'Thémisto',
            'Mégaclité',
            'Taygété',
            'Chaldéné',
            'Harpalyké',
            'Kalyké',
            'Iocasté',
            'Erinomé',
            'Isonoé',
            'Praxidyké',
            'Autonoé',
            'Thyoné',
            'Hermippé',
            'Aitné',
            'Eurydomé',
            'Euanthé',
            'Euporie',
            'Orthosie',
            'Spondé',
            'Calé',
            'Pasithée',
            'Hégémone',
            'Mnémé',
            'Aoedé',
            'Thelxinoé',
            'Arché',
            'Callichore',
            'Hélicé',
            'Carpo',
            'Eukéladé',
            'Cyllène',
            'Coré',
            'Hersé',
            'S/2003 J 2',
            'Euphémé',
            'S/2003 J 4',
            'Eiréné',
            'S/2003 J 9',
            'S/2003 J 10',
            'S/2003 J 12',
            'Philophrosyne',
            'S/2003 J 16',
            'S/2003 J 18',
            'S/2003 J 19',
            'S/2003 J 23',
            'Dia',
            'S/2010 J 1',
            'S/2010 J 2',
            'S/2011 J 1',
            'S/2011 J 2',
            'S/2017 J 1',
            'S/2016 J 1',
            'Valétudo',
            'S/2017 J 2',
            'S/2017 J 3',
            'Pandia',
            'S/2017 J 5',
            'S/2017 J 6',
            'S/2017 J 7',
            'S/2017 J 8',
            'S/2017 J 9',
            'Ersa'
        ]
    },
    {
        name: 'Mars',
        bodyName: 'Mars',
        id: 'mars',
        isPlanet: true,
        moons: ['Phobos', 'Deïmos']
    },
    {
        name: 'Mercury',
        bodyName: 'Mercure',
        id: 'mercure',
        isPlanet: true,
        moons: []
    },
    {
        name: 'Saturn',
        bodyName: 'Saturne',
        id: 'saturne',
        isPlanet: true,
        moons: [
            'Mimas',
            'Encelade',
            'Téthys',
            'Dioné',
            'Rhéa',
            'Titan',
            'Hypérion',
            'Japet',
            'Phoebé',
            'Janus',
            'Epiméthée',
            'Hélène',
            'Télesto',
            'Calypso',
            'Atlas',
            'Prométhée',
            'Pandore',
            'Pan',
            'Ymir',
            'Paaliaq',
            'Tarvos',
            'Ijiraq',
            'Suttungr',
            'Kiviuq',
            'Mundilfari',
            'Albiorix',
            'Skathi',
            'Erriapo',
            'Siarnaq',
            'Thrymr',
            'Narvi',
            'Méthone',
            'Pallène',
            'Pollux',
            'Daphnis',
            'Aegir',
            'Bebhionn',
            'Bergelmir',
            'Bestla',
            'Farbauti',
            'Fenrir',
            'Fornjot',
            'Hati',
            'Hyrrokkin',
            'Kari',
            'Loge',
            'Skoll',
            'Surtur',
            'Anthé',
            'Jarnsaxa',
            'Greip',
            'Tarqeq',
            'Égéon',
            'S/2004 S 7',
            'S/2004 S 12',
            'S/2004 S 13',
            'S/2004 S 17',
            'S/2006 S 1',
            'S/2006 S 3',
            'S/2007 S 2',
            'S/2007 S 3',
            'S/2009 S 1',
            'S/2004 S 3',
            'S/2004 S 4',
            'S/2004 S 6'
        ]
    },
    {
        name: 'Sun',
        bodyName: 'Le Soleil',
        id: 'soleil',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Earth',
        bodyName: 'La Terre',
        id: 'terre',
        isPlanet: true,
        moons: ['La Lune']
    },
    {
        name: 'Venus',
        bodyName: 'Vénus',
        id: 'venus',
        isPlanet: true,
        moons: []
    },
    {
        name: 'Kerberos',
        bodyName: 'Kerberos',
        id: 'kerberos',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2011 J 1',
        bodyName: 'S/2011 J 1',
        id: 's2011j1',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2011 J 2',
        bodyName: 'S/2011 J 2',
        id: 's2011j2',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Styx',
        bodyName: 'Styx',
        id: 'styx',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Hippocamp',
        bodyName: 'Hippocampe',
        id: 'hippocampe',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2015 (136472) 1',
        bodyName: 'S/2015 (136472) 1',
        id: 'mk2',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2017 J 1',
        bodyName: 'S/2017 J 1',
        id: 's2017j1',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2016 J 1',
        bodyName: 'S/2016 J 1',
        id: 's2016j1',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Valetudo',
        bodyName: 'Valétudo',
        id: 'valetudo',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2017 J 2',
        bodyName: 'S/2017 J 2',
        id: 's2017j2',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2017 J 3',
        bodyName: 'S/2017 J 3',
        id: 's2017j3',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Pandia',
        bodyName: 'Pandia',
        id: 'pandia',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2017 J 5',
        bodyName: 'S/2017 J 5',
        id: 's2017j5',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2017 J 6',
        bodyName: 'S/2017 J 6',
        id: 's2017j6',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2017 J 7',
        bodyName: 'S/2017 J 7',
        id: 's2017j7',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2017 J 8',
        bodyName: 'S/2017 J 8',
        id: 's2017j8',
        isPlanet: false,
        moons: []
    },
    {
        name: 'S/2017 J 9',
        bodyName: 'S/2017 J 9',
        id: 's2017j9',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Ersa',
        bodyName: 'Ersa',
        id: 'ersa',
        isPlanet: false,
        moons: []
    },
    {
        name: 'Ultima Thule',
        bodyName: '(486958) 2014 MU 69',
        id: 'ultima-thule',
        isPlanet: false,
        moons: []
    },
    {
        name: '101955 Bennu',
        bodyName: '(101955) Bénou',
        id: 'benou',
        isPlanet: false,
        moons: []
    }
];
const NUMBER_OF_PLANETS = planets.length;
const NUMBER_OF_OBJECTS = objects.length;
const getRandomCelestialObject = () => objects[Math.floor(Math.random() * NUMBER_OF_OBJECTS)];
exports.getRandomCelestialObject = getRandomCelestialObject;
const getRandomPlanet = () => planets[Math.floor(Math.random() * NUMBER_OF_PLANETS)];
exports.getRandomPlanet = getRandomPlanet;
const getRandomCelestialObjects = (n = 1) => Array(n)
    .fill('')
    .map(() => objects[Math.floor(Math.random() * NUMBER_OF_OBJECTS)]);
exports.getRandomCelestialObjects = getRandomCelestialObjects;
const getRandomPlanets = (n = 1) => Array(n)
    .fill('')
    .map(() => planets[Math.floor(Math.random() * NUMBER_OF_PLANETS)]);
exports.getRandomPlanets = getRandomPlanets;
const getRandomCelestialObjectName = () => objects[Math.floor(Math.random() * NUMBER_OF_OBJECTS)].bodyName;
exports.getRandomCelestialObjectName = getRandomCelestialObjectName;
const getRandomPlanetName = () => planets[Math.floor(Math.random() * NUMBER_OF_PLANETS)].bodyName;
exports.getRandomPlanetName = getRandomPlanetName;
exports.default = { getRandomCelestialObject, getRandomCelestialObjectName, getRandomCelestialObjects, getRandomPlanet, getRandomPlanetName, getRandomPlanets };
