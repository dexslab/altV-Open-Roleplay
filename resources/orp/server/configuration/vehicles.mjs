import * as alt from 'alt';

export const VehiclePriceType = {
    boat: 30000,
    speedboat: 48000,
    commercial: 75000,
    compact: 8200,
    coupe: 12000,
    cycle: 480,
    emergency: 0,
    industrial: 75000,
    military: 0,
    motorcycle: 4800,
    muscle: 240000,
    offroad: 34000,
    aircraft: 520000,
    suv: 98000,
    sedan: 48000,
    service: 58000,
    sport: 280000,
    sportclassic: 360000,
    super: 280000,
    trailer: 0,
    train: 0,
    utility: 24000,
    van: 18000
};

alt.onClient('fetch:VehiclePrices', player => {
    alt.emitClient(player, 'return:VehiclePrices', JSON.stringify(VehiclePriceType));
});

export const Vehicles = [
    // Class: Boat
    {
        display: 'Dinghy',
        name: 'dinghy',
        type: 'boat',
        class: 'boat',
        sell: true,
        rank: 1
    },
    {
        display: 'Dinghy 2',
        name: 'dinghy2',
        type: 'boat',
        class: 'boat',
        sell: true,
        rank: 1
    },
    {
        display: 'Dinghy 3',
        name: 'dinghy3',
        type: 'boat',
        class: 'boat',
        sell: true,
        rank: 1
    },
    {
        display: 'Dinghy 4',
        name: 'dinghy4',
        type: 'boat',
        class: 'boat',
        sell: true,
        rank: 1
    },
    {
        display: 'Marquis',
        name: 'marquis',
        type: 'boat',
        class: 'boat',
        sell: true,
        rank: 1
    },
    {
        display: 'Seashark',
        name: 'seashark',
        type: 'boat',
        class: 'boat',
        sell: true,
        rank: 1
    },
    {
        display: 'Seashark 2',
        name: 'seashark2',
        type: 'boat',
        class: 'boat',
        sell: true,
        rank: 1
    },
    {
        display: 'Seashark 3',
        name: 'seashark3',
        type: 'boat',
        class: 'boat',
        sell: true,
        rank: 1
    },
    {
        display: 'Squalo',
        name: 'squalo',
        type: 'boat',
        class: 'boat',
        sell: true,
        rank: 1
    },
    {
        display: 'Suntrap',
        name: 'suntrap',
        type: 'boat',
        class: 'boat',
        sell: true,
        rank: 1
    },
    {
        display: 'Tropic',
        name: 'tropic',
        type: 'boat',
        class: 'boat',
        sell: true,
        rank: 1
    },
    {
        display: 'Tropic 2',
        name: 'tropic2',
        type: 'boat',
        class: 'boat',
        sell: true,
        rank: 1
    },
    // Class Speedboat
    {
        display: 'Speeder',
        name: 'speeder',
        type: 'boat',
        class: 'speedboat',
        sell: true,
        rank: 1
    },
    {
        display: 'Speeder 2',
        name: 'speeder2',
        type: 'boat',
        class: 'speedboat',
        sell: true,
        rank: 1
    },
    {
        display: 'Toro',
        name: 'toro',
        type: 'boat',
        class: 'speedboat',
        sell: true,
        rank: 1
    },
    {
        display: 'Toro 2',
        name: 'toro2',
        type: 'boat',
        class: 'speedboat',
        sell: true,
        rank: 1
    },
    {
        display: 'Jetmax',
        name: 'jetmax',
        type: 'boat',
        class: 'speedboat',
        sell: true,
        rank: 1
    },
    // Class Commercial
    {
        display: 'Benson',
        name: 'benson',
        type: 'vehicle',
        class: 'commercial',
        sell: true,
        rank: 1
    },
    {
        display: 'Biff',
        name: 'biff',
        type: 'vehicle',
        class: 'commercial',
        sell: false,
        rank: 1
    },
    {
        display: 'Cerberus',
        name: 'cerberus',
        type: 'vehicle',
        class: 'commercial',
        sell: false,
        rank: 1
    },
    {
        display: 'Cerberus 2',
        name: 'cerberus2',
        type: 'vehicle',
        class: 'commercial',
        sell: false,
        rank: 1
    },
    {
        display: 'Cerberus 3',
        name: 'cerberus3',
        type: 'vehicle',
        class: 'commercial',
        sell: false,
        rank: 1
    },
    {
        display: 'Hauler',
        name: 'hauler',
        type: 'vehicle',
        class: 'commercial',
        sell: true,
        rank: 1
    },
    {
        display: 'Hauler 2',
        name: 'hauler2',
        type: 'vehicle',
        class: 'commercial',
        sell: false,
        rank: 1
    },
    {
        display: 'Mule',
        name: 'mule',
        type: 'vehicle',
        class: 'commercial',
        sell: true,
        rank: 1
    },
    {
        display: 'Mule 2',
        name: 'mule2',
        type: 'vehicle',
        class: 'commercial',
        sell: true,
        rank: 1
    },
    {
        display: 'Mule 3',
        name: 'mule3',
        type: 'vehicle',
        class: 'commercial',
        sell: true,
        rank: 1
    },
    {
        display: 'Mule 4',
        name: 'mule4',
        type: 'vehicle',
        class: 'commercial',
        sell: true,
        rank: 1
    },
    {
        display: 'Packer',
        name: 'packer',
        type: 'vehicle',
        class: 'commercial',
        sell: true,
        rank: 1
    },
    {
        display: 'Phantom',
        name: 'phantom',
        type: 'vehicle',
        class: 'commercial',
        sell: true,
        rank: 1
    },
    {
        display: 'Phantom 2',
        name: 'phantom2',
        type: 'vehicle',
        class: 'commercial',
        sell: false,
        rank: 1
    },
    {
        display: 'Phantom 3',
        name: 'phantom3',
        type: 'vehicle',
        class: 'commercial',
        sell: true,
        rank: 1
    },
    {
        display: 'Pounder',
        name: 'pounder',
        type: 'vehicle',
        class: 'commercial',
        sell: false,
        rank: 1
    },
    {
        display: 'Pounder 2',
        name: 'pounder2',
        type: 'vehicle',
        class: 'commercial',
        sell: false,
        rank: 1
    },
    {
        display: 'Stockade',
        name: 'stockade',
        type: 'vehicle',
        class: 'commercial',
        sell: false,
        rank: 1
    },
    {
        display: 'Stockade 3',
        name: 'stockade3',
        type: 'vehicle',
        class: 'commercial',
        sell: false,
        rank: 1
    },
    {
        display: 'Terabyte',
        name: 'terabyte',
        type: 'vehicle',
        class: 'commercial',
        sell: false,
        rank: 1
    },
    // Class Compact
    {
        display: 'Blista',
        name: 'blista',
        type: 'vehicle',
        class: 'compact',
        sell: true,
        rank: 1
    },
    {
        display: 'Brioso',
        name: 'brioso',
        type: 'vehicle',
        class: 'compact',
        sell: true,
        rank: 1
    },
    {
        display: 'Dilettante',
        name: 'dilettante',
        type: 'vehicle',
        class: 'compact',
        sell: true,
        rank: 1
    },
    {
        display: 'Issi 2',
        name: 'issi2',
        type: 'vehicle',
        class: 'compact',
        sell: true,
        rank: 1
    },
    {
        display: 'Issi 3',
        name: 'issi3',
        type: 'vehicle',
        class: 'compact',
        sell: true,
        rank: 1
    },
    {
        display: 'Issi 4',
        name: 'issi4',
        type: 'vehicle',
        class: 'compact',
        sell: false,
        rank: 1
    },
    {
        display: 'Issi 5',
        name: 'issi5',
        type: 'vehicle',
        class: 'compact',
        sell: false,
        rank: 1
    },
    {
        display: 'Panto',
        name: 'panto',
        type: 'vehicle',
        class: 'compact',
        sell: true,
        rank: 1
    },
    {
        display: 'Prairie',
        name: 'prairie',
        type: 'vehicle',
        class: 'compact',
        sell: true,
        rank: 1
    },
    {
        display: 'Rhapsody',
        name: 'rhapsody',
        type: 'vehicle',
        class: 'compact',
        sell: true,
        rank: 1
    },
    // Class Coupe
    {
        display: 'Cog Cabrio',
        name: 'cogcabrio',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'Exemplar',
        name: 'exemplar',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'F620',
        name: 'f620',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'Felon',
        name: 'felon',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'Felon 2',
        name: 'felon2',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'Jackal',
        name: 'jackal',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'Oracle',
        name: 'oracle',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'Oracle 2',
        name: 'oracle2',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'Sentinel',
        name: 'sentinel',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'Sentinel 2',
        name: 'sentinel2',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'Windsor',
        name: 'windsor',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'Windsor 2',
        name: 'windsor',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'Zion',
        name: 'zion',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    {
        display: 'Zion 2',
        name: 'zion2',
        type: 'vehicle',
        class: 'coupe',
        sell: true,
        rank: 1
    },
    // Class Cycle
    {
        display: 'BMX',
        name: 'bmx',
        type: 'vehicle',
        class: 'cycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Cruiser',
        name: 'cruiser',
        type: 'vehicle',
        class: 'cycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Fixter',
        name: 'fixter',
        type: 'vehicle',
        class: 'cycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Scorcher',
        name: 'scorcher',
        type: 'vehicle',
        class: 'cycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Tribike',
        name: 'tribike',
        type: 'vehicle',
        class: 'cycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Tribike 2',
        name: 'tribike2',
        type: 'vehicle',
        class: 'cycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Tribike 3',
        name: 'tribike3',
        type: 'vehicle',
        class: 'cycle',
        sell: true,
        rank: 1
    },
    // Class Emergency
    {
        display: 'Dilettante 2',
        name: 'dilettante2',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Ambulance',
        name: 'ambulance',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'FBI',
        name: 'fbi',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'FBI 2',
        name: 'fbi2',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Firetruck',
        name: 'firetruk',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Life Guard',
        name: 'lguard',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Prisoner Bus',
        name: 'pbus',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Police',
        name: 'police',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Police 2',
        name: 'police2',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Police 3',
        name: 'police3',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Police 4',
        name: 'police4',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Police Bike',
        name: 'policeb',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Police Maverick',
        name: 'polmav',
        type: 'aircraft',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Police Old 1',
        name: 'policeold1',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Police Old 2',
        name: 'policeold2',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Police Van',
        name: 'policet',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Police Ranger',
        name: 'pranger',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Police Predator',
        name: 'predator',
        type: 'boat',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Riot',
        name: 'riot',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Riot 2',
        name: 'riot2',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Sheriff',
        name: 'sheriff',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    {
        display: 'Sheriff 2',
        name: 'sheriff2',
        type: 'vehicle',
        class: 'emergency',
        sell: false,
        rank: 1
    },
    // Class Industrial
    {
        display: 'Bulldozer',
        name: 'bulldozer',
        type: 'vehicle',
        class: 'industrial',
        sell: false,
        rank: 1
    },
    {
        display: 'Cutter',
        name: 'cutter',
        type: 'vehicle',
        class: 'industrial',
        sell: false,
        rank: 1
    },
    {
        display: 'Dump',
        name: 'dump',
        type: 'vehicle',
        class: 'industrial',
        sell: false,
        rank: 1
    },
    {
        display: 'Flatbed',
        name: 'flatbed',
        type: 'vehicle',
        class: 'industrial',
        sell: true,
        rank: 1
    },
    {
        display: 'Guardian',
        name: 'guardian',
        type: 'vehicle',
        class: 'industrial',
        sell: false,
        rank: 1
    },
    {
        display: 'Handler',
        name: 'handler',
        type: 'vehicle',
        class: 'industrial',
        sell: false,
        rank: 1
    },
    {
        display: 'Mixer',
        name: 'mixer',
        type: 'vehicle',
        class: 'industrial',
        sell: false,
        rank: 1
    },
    {
        display: 'Mixer 2',
        name: 'mixer2',
        type: 'vehicle',
        class: 'industrial',
        sell: false,
        rank: 1
    },
    {
        display: 'Rubble',
        name: 'rubble',
        type: 'vehicle',
        class: 'industrial',
        sell: true,
        rank: 1
    },
    {
        display: 'Tip Truck',
        name: 'tiptruck',
        type: 'vehicle',
        class: 'industrial',
        sell: true,
        rank: 1
    },
    {
        display: 'Tip Truck 2',
        name: 'tiptruck2',
        type: 'vehicle',
        class: 'industrial',
        sell: false,
        rank: 1
    },
    // Class Military
    {
        display: 'Akula',
        name: 'akula',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Annihilator',
        name: 'annihilator',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Buzzard',
        name: 'buzzard',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Buzzard 2',
        name: 'buzzard2',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Cargobob',
        name: 'cargobob',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Cargobob 2',
        name: 'cargobob2',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Cargobob 3',
        name: 'cargobob3',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Cargobob 4',
        name: 'cargobob4',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Frogger',
        name: 'frogger',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Frogger 2',
        name: 'frogger2',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Hunter',
        name: 'hunter',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Valkyrie',
        name: 'valkyrie',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Valkyrie 2',
        name: 'valkyrie2',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Skylift',
        name: 'skylift',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Savage',
        name: 'savage',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'APC',
        name: 'apc',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Barracks',
        name: 'barracks',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Barracks 2',
        name: 'barracks2',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Barracks 3',
        name: 'barracks3',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Barrage',
        name: 'barrage',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Chernobog',
        name: 'chernobog',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Crusader',
        name: 'crusader',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Halftrack',
        name: 'halftrack',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Khanjali',
        name: 'Khanjali',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Rhino',
        name: 'rhino',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Scarab',
        name: 'scarab',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Scarab 2',
        name: 'scarab2',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Scarab 3',
        name: 'scarab3',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Thruster',
        name: 'thruster',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Trailer Small 2',
        name: 'trailersmall2',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Insurgent',
        name: 'insurgent',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Insurgent 2',
        name: 'insurgent2',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Insurgent 3',
        name: 'insurgent3',
        type: 'vehicle',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Menacer',
        name: 'menacer',
        type: 'vehicle',
        class: 'military',
        sell: true,
        rank: 1
    },
    {
        display: 'Nightshark',
        name: 'nightshark',
        type: 'vehicle',
        class: 'military',
        sell: true,
        rank: 1
    },
    {
        display: 'Technical',
        name: 'technical',
        type: 'vehicle',
        class: 'military',
        sell: true,
        rank: 1
    },
    {
        display: 'Technical 2',
        name: 'technical2',
        type: 'vehicle',
        class: 'military',
        sell: true,
        rank: 1
    },
    {
        display: 'Technical 3',
        name: 'technical3',
        type: 'vehicle',
        class: 'military',
        sell: true,
        rank: 1
    },
    {
        display: 'Bombushka',
        name: 'bombushka',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Besra',
        name: 'besra',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Cargo Plane',
        name: 'cargoplane',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Cuban 800',
        name: 'cuban800',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Cuban 800',
        name: 'cuban800',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Hydra',
        name: 'hydra',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Jet',
        name: 'jet',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Lazer',
        name: 'lazer',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Mogul',
        name: 'mogul',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Molotok',
        name: 'molotok',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Nokota',
        name: 'nokota',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Pyro',
        name: 'pyro',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Rogue',
        name: 'rogue',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Starling',
        name: 'starling',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Strikeforce',
        name: 'strikeforce',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Titan',
        name: 'titan',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Tula',
        name: 'tula',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    {
        display: 'Volatol',
        name: 'volatol',
        type: 'aircraft',
        class: 'military',
        sell: false,
        rank: 1
    },
    // Class Motorcycle
    {
        display: 'Akuma',
        name: 'akuma',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Avarus',
        name: 'avarus',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Bagger',
        name: 'bagger',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Bati',
        name: 'bati',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Bati 2',
        name: 'bati2',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'BF400',
        name: 'bf400',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Carbon RS',
        name: 'carbonrs',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Chimera',
        name: 'chimera',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Cliffhanger',
        name: 'cliffhanger',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Daemon',
        name: 'daemon',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Daemon 2',
        name: 'daemon',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Defiler',
        name: 'defiler',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Deathbike',
        name: 'deathbike',
        type: 'vehicle',
        class: 'motorcycle',
        sell: false,
        rank: 1
    },
    {
        display: 'Deathbike 2',
        name: 'deathbike2',
        type: 'vehicle',
        class: 'motorcycle',
        sell: false,
        rank: 1
    },
    {
        display: 'Deathbike 3',
        name: 'deathbike3',
        type: 'vehicle',
        class: 'motorcycle',
        sell: false,
        rank: 1
    },
    {
        display: 'Diablous',
        name: 'diablous',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Diablous 2',
        name: 'diablous2',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Double',
        name: 'double',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Enduro',
        name: 'enduro',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Esskey',
        name: 'esskey',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Faggio',
        name: 'faggio',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Faggio 2',
        name: 'faggio2',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Faggio 3',
        name: 'faggio3',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'FCR',
        name: 'fcr',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'FCR 2',
        name: 'fcr2',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Gargoyle',
        name: 'gargoyle',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Hakuchou',
        name: 'Hakuchou',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Hakuchou 2',
        name: 'hakuchou2',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Hexer',
        name: 'hexer',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'innovation',
        name: 'innovation',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Lectro',
        name: 'lectro',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Manchez',
        name: 'manchez',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Nemesis',
        name: 'nemesis',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Nightblade',
        name: 'nightblade',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Oppressor',
        name: 'oppressor',
        type: 'vehicle',
        class: 'motorcycle',
        sell: false,
        rank: 1
    },
    {
        display: 'Oppressor 2',
        name: 'oppressor2',
        type: 'vehicle',
        class: 'motorcycle',
        sell: false,
        rank: 1
    },
    {
        display: 'PCJ',
        name: 'pcj',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Ratbike',
        name: 'ratbike',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Ruffian',
        name: 'ruffian',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'R Rocket',
        name: 'rrocket',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Sanchez',
        name: 'sanchez',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Sanchez 2',
        name: 'sanchez2',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Sanctus',
        name: 'sanctus',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Shotaro',
        name: 'shotaro',
        type: 'vehicle',
        class: 'motorcycle',
        sell: false,
        rank: 1
    },
    {
        display: 'Sovereign',
        name: 'sovereign',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Thrust',
        name: 'thrust',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Vader',
        name: 'vader',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Vindicator',
        name: 'vindicator',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Vortex',
        name: 'vortex',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Wolfsbane',
        name: 'wolfsbane',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Zombie A',
        name: 'zombiea',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    {
        display: 'Zombie B',
        name: 'zombieb',
        type: 'vehicle',
        class: 'motorcycle',
        sell: true,
        rank: 1
    },
    // Class Muscle
    {
        display: 'Blade',
        name: 'blade',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Buccaneer',
        name: 'buccaneer',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Buccaneer 2',
        name: 'buccaneer2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Chino',
        name: 'chino',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Chino 2',
        name: 'chino2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Clique',
        name: 'clique',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Coquette 3',
        name: 'coquette3',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Deviant',
        name: 'deviant',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Dominator',
        name: 'Dominator',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Dominator 2',
        name: 'dominator2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Dominator 3',
        name: 'dominator3',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Dominator 4',
        name: 'dominator4',
        type: 'vehicle',
        class: 'muscle',
        sell: false,
        rank: 1
    },
    {
        display: 'Dominator 5',
        name: 'deominator5',
        type: 'vehicle',
        class: 'muscle',
        sell: false,
        rank: 1
    },
    {
        display: 'Dominator 6',
        name: 'dominator6',
        type: 'vehicle',
        class: 'muscle',
        sell: false,
        rank: 1
    },
    {
        display: 'Dukes',
        name: 'dukes',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Dukes 2',
        name: 'dukes2',
        type: 'vehicle',
        class: 'muscle',
        sell: false,
        rank: 1
    },
    {
        display: 'Faction',
        name: 'faction',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Faction 2',
        name: 'faction2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Faction 3',
        name: 'faction3',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Gauntlet',
        name: 'gauntlet',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Gauntlet 2',
        name: 'gauntlet2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Gauntlet 3',
        name: 'gauntlet3',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Gauntlet 4',
        name: 'gauntlet4',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Hermes',
        name: 'hermes',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Hotknife',
        name: 'hotknife',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Impaler',
        name: 'impaler',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Impaler 2',
        name: 'impaler2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Impaler 3',
        name: 'impaler3',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Impaler 4',
        name: 'impaler4',
        type: 'vehicle',
        class: 'muscle',
        sell: false,
        rank: 1
    },
    {
        display: 'Imperator',
        name: 'imperator',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Imperator 2',
        name: 'imperator2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Imperator 3',
        name: 'imperator3',
        type: 'vehicle',
        class: 'muscle',
        sell: false,
        rank: 1
    },
    {
        display: 'Lurcher',
        name: 'lurcher',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Moonbeam',
        name: 'moonbeam',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Moonbeam 2',
        name: 'moonbeam2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Nightshade',
        name: 'nightshade',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Peyote 2',
        name: 'peyote2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Phoenix',
        name: 'phoenix',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Picador',
        name: 'picador',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Ratloader',
        name: 'ratloader',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Ratloader 2',
        name: 'ratloader2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Ruiner',
        name: 'ruiner',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Ruiner 2',
        name: 'ruiner2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Ruiner 3',
        name: 'ruiner3',
        type: 'vehicle',
        class: 'muscle',
        sell: false,
        rank: 1
    },
    {
        display: 'Sabre GT',
        name: 'sabregt',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Sabre GT 2',
        name: 'sabregt2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Slamvan',
        name: 'slamvan',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Slamvan 2',
        name: 'slamvan2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Slamvan 3',
        name: 'slamvan3',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Slamvan 4',
        name: 'slamvan4',
        type: 'vehicle',
        class: 'muscle',
        sell: false,
        rank: 1
    },
    {
        display: 'Slamvan 5',
        name: 'slamvan5',
        type: 'vehicle',
        class: 'muscle',
        sell: false,
        rank: 1
    },
    {
        display: 'Slamvan 6',
        name: 'slamvan6',
        type: 'vehicle',
        class: 'muscle',
        sell: false,
        rank: 1
    },
    {
        display: 'Stalion',
        name: 'stalion',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Stallion 2',
        name: 'stallion2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Tampa',
        name: 'tampa',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Tampa 3',
        name: 'tamp3',
        type: 'vehicle',
        class: 'muscle',
        sell: false,
        rank: 1
    },
    {
        display: 'Tulip',
        name: 'tulip',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Vamos',
        name: 'vamos',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Vigero',
        name: 'vigero',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Virgo',
        name: 'virgo',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Virgo 2',
        name: 'virgo2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Virgo 3',
        name: 'virgo3',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Voodoo',
        name: 'voodoo',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Voodoo2',
        name: 'voodoo2',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    {
        display: 'Yosemite',
        name: 'yosemite',
        type: 'vehicle',
        class: 'muscle',
        sell: true,
        rank: 1
    },
    // Class Offroad
    {
        display: 'BF Injection',
        name: 'bfinjection',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Bifta',
        name: 'bifta',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Blazer',
        name: 'blazer',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Blazer 2',
        name: 'blazer2',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Blazer 3',
        name: 'blazer3',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Blazer 4',
        name: 'blazer4',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Blazer5',
        name: 'blazer5',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Bodhi 2',
        name: 'bodhi2',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Brawler',
        name: 'brawler',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Bruiser',
        name: 'bruiser',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Bruiser 2',
        name: 'bruiser2',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Bruiser 3',
        name: 'Bruiser 3',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Caracara 2',
        name: 'caracara2',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'DLoader',
        name: 'dloader',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Dubsta3',
        name: 'dubsta3',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Dune',
        name: 'dune',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Dune 2',
        name: 'dune2',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Dune 3',
        name: 'dune3',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Dune 4',
        name: 'dune4',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Dune 5',
        name: 'dune5',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Free Crawler',
        name: 'freecrawler',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Hellion',
        name: 'hellion',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Kalahari',
        name: 'kalahari',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Marshall',
        name: 'marshall',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Mesa3',
        name: 'mesa3',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Monster',
        name: 'monster',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Monster 3',
        name: 'monster3',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Monster 4',
        name: 'monster4',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Monster 5',
        name: 'monster5',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Rancher XL',
        name: 'rancherxl',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Rancher XL 2',
        name: 'rancherxl2',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Rebel',
        name: 'rebel',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Rebel 2',
        name: 'rebel2',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Riata',
        name: 'riata',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Sand King',
        name: 'sandking',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Sand King 2',
        name: 'sandking2',
        type: 'vehicle',
        class: 'offroad',
        sell: true,
        rank: 1
    },
    {
        display: 'Trophy Truck',
        name: 'trophytruck',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    {
        display: 'Trophy Truck 2',
        name: 'trophytruck2',
        type: 'vehicle',
        class: 'offroad',
        sell: false,
        rank: 1
    },
    // Class Aircraft
    {
        display: 'Havok',
        name: 'havok',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Maverick',
        name: 'maverick',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Sea Sparrow',
        name: 'seasparrow',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },

    {
        display: 'Super Volito',
        name: 'supervolito',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Super Volito',
        name: 'supervolito2',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Swift',
        name: 'swift',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Swift 2',
        name: 'swift2',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Volatus',
        name: 'volatus',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Alphaz1',
        name: 'alphaz1',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Avenger',
        name: 'avenger',
        type: 'aircraft',
        class: 'aircraft',
        sell: false,
        rank: 1
    },
    {
        display: 'Blimp',
        name: 'blimp',
        type: 'aircraft',
        class: 'aircraft',
        sell: false,
        rank: 1
    },
    {
        display: 'Blimp 2',
        name: 'blimp2',
        type: 'aircraft',
        class: 'aircraft',
        sell: false,
        rank: 1
    },
    {
        display: 'Blimp 3',
        name: 'blimp3',
        type: 'aircraft',
        class: 'aircraft',
        sell: false,
        rank: 1
    },
    {
        display: 'Dodo',
        name: 'dodo',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Duster',
        name: 'duster',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Luxor',
        name: 'luxor',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Luxor 2',
        name: 'luxor2',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Mammatus',
        name: 'mammatus',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Microlight',
        name: 'microlight',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Miljet',
        name: 'miljet',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Nimbus',
        name: 'nimbus',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Seabreeze',
        name: 'seabreeze',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Shamal',
        name: 'shamal',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Velum',
        name: 'velum',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Velum2',
        name: 'velum2',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    {
        display: 'Vestra',
        name: 'vestra',
        type: 'aircraft',
        class: 'aircraft',
        sell: true,
        rank: 1
    },
    // Class SUV
    {
        display: 'Baller',
        name: 'baller',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Baller 2',
        name: 'baller2',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Baller 3',
        name: 'baller3',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Baller 4',
        name: 'baller4',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Baller 5',
        name: 'baller5',
        type: 'vehicle',
        class: 'suv',
        sell: false,
        rank: 1
    },
    {
        display: 'Baller 6',
        name: 'baller6',
        type: 'vehicle',
        class: 'suv',
        sell: false,
        rank: 1
    },
    {
        display: 'BJXL',
        name: 'bjxl',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Cavalcade',
        name: 'cavalcade',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Cavalcade 2',
        name: 'cavalcade2',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Contender',
        name: 'contender',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Dubsta',
        name: 'dubsta',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Dubsta 2',
        name: 'dubsta2',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'FQ2',
        name: 'fq2',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Granger',
        name: 'granger',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Gresley',
        name: 'gresley',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Habanero',
        name: 'habanero',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Huntley',
        name: 'huntley',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Landstalker',
        name: 'landstalker',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Mesa',
        name: 'mesa',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Mesa 2',
        name: 'mesa2',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Novak',
        name: 'novak',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Patriot',
        name: 'patriot',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Patriot 2',
        name: 'patriot2',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Radi',
        name: 'radi',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Rocoto',
        name: 'rocoto',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Seminole',
        name: 'seminole',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Serrano',
        name: 'serrano',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'Toros',
        name: 'toros',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'XLS',
        name: 'xls',
        type: 'vehicle',
        class: 'suv',
        sell: true,
        rank: 1
    },
    {
        display: 'XLS2',
        name: 'xls2',
        type: 'vehicle',
        class: 'suv',
        sell: false,
        rank: 1
    },
    // SEDAN
    {
        display: 'ASEA',
        name: 'asea',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Asea 2',
        name: 'asea2',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Asterope',
        name: 'asterope',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'COG 55',
        name: 'cog55',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'COG 552',
        name: 'cog552',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Cognoscenti',
        name: 'cognoscenti',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Cognoscenti 2',
        name: 'cognoscenti2',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Emperor',
        name: 'emperor',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Emperor 2',
        name: 'emperor2',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Emperor 3',
        name: 'emperor3',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Fugitive',
        name: 'fugitive',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Glendale',
        name: 'glendale',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Ingot',
        name: 'ingot',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Intruder',
        name: 'intruder',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Limo2',
        name: 'limo2',
        type: 'vehicle',
        class: 'sedan',
        sell: false,
        rank: 1
    },
    {
        display: 'Premier',
        name: 'premier',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Primo',
        name: 'primo',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Primo 2',
        name: 'primo2',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Regina',
        name: 'regina',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Romero',
        name: 'romero',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Schafter 2',
        name: 'schafter2',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Schafter 5',
        name: 'schafter5',
        type: 'vehicle',
        class: 'sedan',
        sell: false,
        rank: 1
    },
    {
        display: 'Schafter 6',
        name: 'schafter6',
        type: 'vehicle',
        class: 'sedan',
        sell: false,
        rank: 1
    },
    {
        display: 'Stafford',
        name: 'stafford',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Stanier',
        name: 'stanier',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Stratum',
        name: 'stratum',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Stretch',
        name: 'stretch',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Super D',
        name: 'superd',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Surge',
        name: 'surge',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Tail Gater',
        name: 'tailgater',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Warrener',
        name: 'warrener',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    {
        display: 'Washington',
        name: 'washington',
        type: 'vehicle',
        class: 'sedan',
        sell: true,
        rank: 1
    },
    // Service
    {
        display: 'Airbus',
        name: 'airbus',
        type: 'vehicle',
        class: 'service',
        sell: false,
        rank: 1
    },
    {
        display: 'Brickade',
        name: 'brickade',
        type: 'vehicle',
        class: 'service',
        sell: false,
        rank: 1
    },
    {
        display: 'Bus',
        name: 'bus',
        type: 'vehicle',
        class: 'service',
        sell: false,
        rank: 1
    },
    {
        display: 'Coach',
        name: 'coach',
        type: 'vehicle',
        class: 'service',
        sell: false,
        rank: 1
    },
    {
        display: 'PBUS2',
        name: 'pbus2',
        type: 'vehicle',
        class: 'service',
        sell: false,
        rank: 1
    },
    {
        display: 'Rallytruck',
        name: 'rallytruck',
        type: 'vehicle',
        class: 'service',
        sell: false,
        rank: 1
    },
    {
        display: 'Rentalbus',
        name: 'rentalbus',
        type: 'vehicle',
        class: 'service',
        sell: false,
        rank: 1
    },
    {
        display: 'Taxi',
        name: 'taxi',
        type: 'vehicle',
        class: 'service',
        sell: false,
        rank: 1
    },
    {
        display: 'Tourbus',
        name: 'tourbus',
        type: 'vehicle',
        class: 'service',
        sell: false,
        rank: 1
    },
    {
        display: 'Trash',
        name: 'trash',
        type: 'vehicle',
        class: 'service',
        sell: false,
        rank: 1
    },
    {
        display: 'Trash 2',
        name: 'trash2',
        type: 'vehicle',
        class: 'service',
        sell: false,
        rank: 1
    },
    {
        display: 'Wastelander',
        name: 'wastelander',
        type: 'vehicle',
        class: 'service',
        sell: false,
        rank: 1
    },
    // Sport
    {
        display: 'Alpha',
        name: 'alpha',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Banshee',
        name: 'banshee',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Bestia GTS',
        name: 'bestiagts',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Blista 2',
        name: 'blista2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Blista 3',
        name: 'blista3',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Buffalo',
        name: 'buffalo',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Buffalo 2',
        name: 'buffalo2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Buffalo 3',
        name: 'buffalo3',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Carbonizzare',
        name: 'carbonizzare',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Comet 2',
        name: 'comet2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Comet 3',
        name: 'comet3',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Comet 4',
        name: 'comet4',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Coquette',
        name: 'coquette',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Drafter',
        name: 'drafter',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Dynasty',
        name: 'dynasty',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Deveste',
        name: 'deveste',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Elegy',
        name: 'elegy',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Elegy 2',
        name: 'elegy2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Feltzer 2',
        name: 'feltzer2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Furore GT',
        name: 'furoregt',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Fusilade',
        name: 'fusilade',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Futo',
        name: 'futo',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Hotring',
        name: 'hotring',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Issi 7',
        name: 'issi7',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Infernus 2',
        name: 'infernus2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Itali GTO',
        name: 'italigto',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Jugular',
        name: 'jugular',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Jester',
        name: 'jester',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Jester 2',
        name: 'jester2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Khamelion',
        name: 'khamelion',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Kuruma',
        name: 'kuruma',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Kuruma 2',
        name: 'kuruma2',
        type: 'vehicle',
        class: 'sport',
        sell: false,
        rank: 1
    },
    {
        display: 'Locust',
        name: 'locust',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Lynx',
        name: 'lynx',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Massacro',
        name: 'massacro',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Massacro 2',
        name: 'massacro2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Neo',
        name: 'neo',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Neon',
        name: 'neon',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'NineF',
        name: 'ninef',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'NineF2',
        name: 'ninef2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Omnis',
        name: 'omnis',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Paragon',
        name: 'paragon',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Paragon 2',
        name: 'paragon2',
        type: 'vehicle',
        class: 'sport',
        sell: false,
        rank: 1
    },
    {
        display: 'Pariah',
        name: 'pariah',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Penumbra',
        name: 'penumbra',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Raiden',
        name: 'raiden',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Rapid GT',
        name: 'rapidgt',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Rapid GT 2',
        name: 'rapidgt2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Raptor',
        name: 'raptor',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Revolter',
        name: 'revolter',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Ruston',
        name: 'ruston',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Schafter 3',
        name: 'schafter3',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Schafter 4',
        name: 'schafter4',
        type: 'vehicle',
        class: 'sport',
        sell: false,
        rank: 1
    },
    {
        display: 'Schafter 5',
        name: 'schafter5',
        type: 'vehicle',
        class: 'sport',
        sell: false,
        rank: 1
    },
    {
        display: 'Schafter 6',
        name: 'schafter6',
        type: 'vehicle',
        class: 'sport',
        sell: false,
        rank: 1
    },
    {
        display: 'Schlagen',
        name: 'schlagen',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Schwarzer',
        name: 'schwarzer',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Sentinel 3',
        name: 'sentinel3',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Seven 70',
        name: 'seven70',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Specter',
        name: 'specter',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Specter 2',
        name: 'specter2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Streiter',
        name: 'streiter',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Sultan',
        name: 'sultan',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Surano',
        name: 'surano',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Tampa 2',
        name: 'tampa2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Tropos',
        name: 'tropos',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'Verlierer2',
        name: 'verlierer2',
        type: 'vehicle',
        class: 'sport',
        sell: true,
        rank: 1
    },
    {
        display: 'ZR 380',
        name: 'zr380',
        type: 'vehicle',
        class: 'sport',
        sell: false,
        rank: 1
    },
    {
        display: 'ZR 3802',
        name: 'zr3802',
        type: 'vehicle',
        class: 'sport',
        sell: false,
        rank: 1
    },
    {
        display: 'ZR 380 Fucking Ugly',
        name: 'zr3803',
        type: 'vehicle',
        class: 'sport',
        sell: false,
        rank: 1
    },
    // Sport Classic
    {
        display: 'Ardent',
        name: 'ardent',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'BType',
        name: 'btype',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'BType2',
        name: 'btype2',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'BType3',
        name: 'btype3',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Casco',
        name: 'casco',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Cheetah 2',
        name: 'cheetah2',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Coquette 2',
        name: 'coquette2',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Deluxo',
        name: 'deluxo',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Dynasty',
        name: 'dynasty',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Feltzer 3',
        name: 'feltzer3',
        type: 'vehicle',
        class: 'sportclassic',
        sell: false,
        rank: 1
    },
    {
        display: 'GT500',
        name: 'gt500',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'JB700',
        name: 'jb700',
        type: 'vehicle',
        class: 'sportclassic',
        sell: false,
        rank: 1
    },
    {
        display: 'Mamba',
        name: 'mamba',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Manana',
        name: 'manana',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Monroe',
        name: 'monroe',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Nebula',
        name: 'nebula',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Peyote',
        name: 'peyote',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Pigalle',
        name: 'pigalle',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Rapid GT 3',
        name: 'rapidgt3',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Retinue',
        name: 'retinue',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Savestra',
        name: 'savestra',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Stinger',
        name: 'stinger',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Stinger GT',
        name: 'stingergt',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Stromberg',
        name: 'stromberg',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Swinger',
        name: 'swinger',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Torero',
        name: 'torero',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Tornado',
        name: 'tornado',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Tornado 2',
        name: 'tornado2',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Tornado 3',
        name: 'tornado3',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Tornado 4',
        name: 'tornado4',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Tornado 5',
        name: 'tornado5',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Tornado 6',
        name: 'tornado6',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Turismo 2',
        name: 'turismo2',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Viseris',
        name: 'viseris',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Z Type',
        name: 'ztype',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Zion 3',
        name: 'zion3',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    {
        display: 'Cheburek',
        name: 'cheburek',
        type: 'vehicle',
        class: 'sportclassic',
        sell: true,
        rank: 1
    },
    // Class Super
    {
        display: 'Adder',
        name: 'adder',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Autarch',
        name: 'autarch',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Banshee2',
        name: 'banshee2',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Bullet',
        name: 'bullet',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Cheetah',
        name: 'cheetah',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Cyclone',
        name: 'cyclone',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Entity XF',
        name: 'entityxf',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Emerus',
        name: 'emerus',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'FMJ',
        name: 'fmj',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'GP1',
        name: 'gp1',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Infernus',
        name: 'infernus',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Itali GTB',
        name: 'italigtb',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Itali GTB2',
        name: 'italigtb2',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Krieger',
        name: 'krieger',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'le7b',
        name: 'le7b',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'nero',
        name: 'nero',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Nero 2',
        name: 'nero2',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Osiris',
        name: 'osiris',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Penetrator',
        name: 'penetrator',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'PFister 811',
        name: 'pfister811',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Prototipo',
        name: 'prototipo',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Reaper',
        name: 'reaper',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'S80',
        name: 's80',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'SC1',
        name: 'sc1',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Scram Jet',
        name: 'scramjet',
        type: 'vehicle',
        class: 'super',
        sell: false,
        rank: 1
    },
    {
        display: 'Sheava',
        name: 'sheava',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Sultan RS',
        name: 'sultanrs',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'T20',
        name: 't20',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Tempesta',
        name: 'tempesta',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Tezeract',
        name: 'tezeract',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Thrax',
        name: 'thrax',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Turismo R',
        name: 'turismor',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Tyrus',
        name: 'tyrus',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Vacca',
        name: 'vacca',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Vagner',
        name: 'vagner',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Vigilante',
        name: 'vigilante',
        type: 'vehicle',
        class: 'super',
        sell: false,
        rank: 1
    },
    {
        display: 'Visi One',
        name: 'visione',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Voltic',
        name: 'voltic',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Voltic 2',
        name: 'voltic2',
        type: 'vehicle',
        class: 'super',
        sell: false,
        rank: 1
    },
    {
        display: 'XA 21',
        name: 'xa21',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Zentorno',
        name: 'zentorno',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    {
        display: 'Zorrusso',
        name: 'zorrusso',
        type: 'vehicle',
        class: 'super',
        sell: true,
        rank: 1
    },
    // Trailer
    {
        display: 'Army Tanker',
        name: 'armytanker',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Army Trailer',
        name: 'armytrailer2',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Bale Trailer',
        name: 'baletrailer',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Boat Trailer',
        name: 'boattrailer',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Cable Car',
        name: 'cablecar',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Dock Trailer',
        name: 'docktrailer',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Grain Trailer',
        name: 'graintrailer',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Prop Trailer',
        name: 'proptrailer',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Rake Trailer',
        name: 'raketrailer',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'TR2',
        name: 'tr2',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'TR3',
        name: 'tr3',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'TR4',
        name: 'tr4',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'TRFlat',
        name: 'trflat',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'TV Trailer',
        name: 'tvtrailer',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Tanker',
        name: 'tanker',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Tanker2',
        name: 'tanker2',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Trailer Logs',
        name: 'trailerlogs',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Trailer Small',
        name: 'trailersmall',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Trailer S',
        name: 'trailers',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Trailer S2',
        name: 'trailers2',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    {
        display: 'Trailer S3',
        name: 'trailers3',
        type: 'vehicle',
        class: 'trailer',
        sell: false,
        rank: 1
    },
    // Trains
    {
        display: 'Freight',
        name: 'freight',
        type: 'train',
        class: 'train',
        sell: false,
        rank: 1
    },
    {
        display: 'Freightcar',
        name: 'freightcar',
        type: 'train',
        class: 'train',
        sell: false,
        rank: 1
    },
    {
        display: 'Freightcont1',
        name: 'freightcont1',
        type: 'train',
        class: 'train',
        sell: false,
        rank: 1
    },
    {
        display: 'Freightcont2',
        name: 'freightcont2',
        type: 'train',
        class: 'train',
        sell: false,
        rank: 1
    },
    {
        display: 'Freightgrain',
        name: 'freightgrain',
        type: 'train',
        class: 'train',
        sell: false,
        rank: 1
    },
    {
        display: 'Tankercar',
        name: 'tankercar',
        type: 'train',
        class: 'train',
        sell: false,
        rank: 1
    },
    // Utility
    {
        display: 'Air Tug',
        name: 'airtug',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    {
        display: 'Caddy',
        name: 'caddy',
        type: 'vehicle',
        class: 'utility',
        sell: true,
        rank: 1
    },
    {
        display: 'Caddy 2',
        name: 'caddy2',
        type: 'vehicle',
        class: 'utility',
        sell: true,
        rank: 1
    },
    {
        display: 'Caddy 3',
        name: 'caddy3',
        type: 'vehicle',
        class: 'utility',
        sell: true,
        rank: 1
    },
    {
        display: 'Docktug',
        name: 'docktug',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    {
        display: 'Forklift',
        name: 'forklift',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    {
        display: 'Mower',
        name: 'mower',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    {
        display: 'Ripley',
        name: 'ripley',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    {
        display: 'Sadler',
        name: 'salder',
        type: 'vehicle',
        class: 'utility',
        sell: true,
        rank: 1
    },
    {
        display: 'Sadler 2',
        name: 'sadler2',
        type: 'vehicle',
        class: 'utility',
        sell: true,
        rank: 1
    },
    {
        display: 'Scrap',
        name: 'scrap',
        type: 'vehicle',
        class: 'utility',
        sell: true,
        rank: 1
    },
    {
        display: 'Tow Truck',
        name: 'towtruck',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    {
        display: 'Tow Truck 2',
        name: 'towtruck2',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    {
        display: 'Tractor',
        name: 'tractor',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    {
        display: 'Tractor 2',
        name: 'tractor2',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    {
        display: 'Tractor3',
        name: 'tractor3',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    {
        display: 'Utillitruck',
        name: 'utillitruck',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    {
        display: 'Utillitruck2',
        name: 'utillitruck2',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    {
        display: 'Utillitruck3',
        name: 'utillitruck3',
        type: 'vehicle',
        class: 'utility',
        sell: false,
        rank: 1
    },
    // Vans
    {
        display: 'Bison',
        name: 'bison',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Bison 2',
        name: 'bison2',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Bison 3',
        name: 'bison3',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Bobcat XL',
        name: 'bobcatxl',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Boxville',
        name: 'boxville',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Boxville 2',
        name: 'boxville2',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Boxville 3',
        name: 'boxville3',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Boxville 4',
        name: 'boxville4',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Boxville 5',
        name: 'boxville5',
        type: 'vehicle',
        class: 'van',
        sell: false,
        rank: 1
    },
    {
        display: 'Burrito',
        name: 'burrito',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Burrito 2',
        name: 'burrito2',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Burrito3',
        name: 'burrito3',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Burrito4',
        name: 'burrito4',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Burrito5',
        name: 'burrito5',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Camper',
        name: 'camper',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Gang Burrito',
        name: 'gburrito',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Gang Burrito 2',
        name: 'gburrito2',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Journey',
        name: 'journey',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Minivan',
        name: 'minivan',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Minivan 2',
        name: 'minivan2',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Paradise',
        name: 'paradise',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Pony',
        name: 'pony',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Pony 2',
        name: 'pony',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Rumpo',
        name: 'rumpo',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Rumpo 2',
        name: 'rumpo2',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Rumpo 3',
        name: 'rumpo3',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Speedo',
        name: 'speedo',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Speedo 2',
        name: 'speedo2',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Surfer',
        name: 'surfer',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Surfer 2',
        name: 'surfer2',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Taco',
        name: 'taco',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Youga',
        name: 'youga',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    },
    {
        display: 'Youga 2',
        name: 'youga2',
        type: 'vehicle',
        class: 'van',
        sell: true,
        rank: 1
    }
];
