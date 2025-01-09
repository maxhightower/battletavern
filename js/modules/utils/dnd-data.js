// js/modules/dnd-data.js

// Export the data
export default DND_DATA;

export const DND_DATA = {
    races: {
        'Dragonborn': {
            subraces: [],
            abilityScoreIncrease: { strength: 2, charisma: 1 },
            traits: ['Breath Weapon', 'Damage Resistance']
        },
        'Dwarf': {
            subraces: ['Hill Dwarf', 'Mountain Dwarf'],
            abilityScoreIncrease: { constitution: 2 },
            traits: ['Darkvision', 'Dwarven Resilience', 'Tool Proficiency']
        },
        'Elf': {
            subraces: ['High Elf', 'Wood Elf', 'Dark Elf (Drow)'],
            abilityScoreIncrease: { dexterity: 2 },
            traits: ['Darkvision', 'Keen Senses', 'Fey Ancestry', 'Trance']
        },
        'Gnome': {
            subraces: ['Forest Gnome', 'Rock Gnome'],
            abilityScoreIncrease: { intelligence: 2 },
            traits: ['Darkvision', 'Gnome Cunning']
        },
        'Half-Elf': {
            subraces: [],
            abilityScoreIncrease: { charisma: 2, choice: 2 },
            traits: ['Darkvision', 'Fey Ancestry', 'Skill Versatility']
        },
        'Half-Orc': {
            subraces: [],
            abilityScoreIncrease: { strength: 2, constitution: 1 },
            traits: ['Darkvision', 'Relentless Endurance', 'Savage Attacks']
        },
        'Halfling': {
            subraces: ['Lightfoot', 'Stout'],
            abilityScoreIncrease: { dexterity: 2 },
            traits: ['Lucky', 'Brave', 'Halfling Nimbleness']
        },
        'Human': {
            subraces: [],
            abilityScoreIncrease: { all: 1 },
            traits: ['Extra Language']
        },
        'Tiefling': {
            subraces: [],
            abilityScoreIncrease: { charisma: 2, intelligence: 1 },
            traits: ['Darkvision', 'Hellish Resistance', 'Infernal Legacy']
        }
    },
    
    classes: {
        'Barbarian': {
            subclasses: {
                'Path of the Berserker': 3,
                'Path of the Totem Warrior': 3,
                'Path of the Ancestral Guardian': 3,
                'Path of the Storm Herald': 3,
                'Path of the Zealot': 3
            },
            hitDie: 12,
            spellcasting: false,
            proficiencies: {
                armor: ['Light armor', 'Medium armor', 'Shields'],
                weapons: ['Simple weapons', 'Martial weapons'],
                saves: ['Strength', 'Constitution']
            }
        },
        'Bard': {
            subclasses: {
                'College of Lore': 3,
                'College of Valor': 3,
                'College of Glamour': 3,
                'College of Swords': 3,
                'College of Whispers': 3
            },
            hitDie: 8,
            spellcasting: true,
            proficiencies: {
                armor: ['Light armor'],
                weapons: ['Simple weapons', 'Hand crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
                saves: ['Dexterity', 'Charisma']
            }
        },
        'Cleric': {
            subclasses: {
                'Knowledge Domain': 1,
                'Life Domain': 1,
                'Light Domain': 1,
                'Nature Domain': 1,
                'Tempest Domain': 1,
                'Trickery Domain': 1,
                'War Domain': 1
            },
            hitDie: 8,
            spellcasting: true,
            proficiencies: {
                armor: ['Light armor', 'Medium armor', 'Shields'],
                weapons: ['Simple weapons'],
                saves: ['Wisdom', 'Charisma']
            }
        },
        'Druid': {
            subclasses: {
                'Circle of the Land': 2,
                'Circle of the Moon': 2,
                'Circle of Dreams': 2,
                'Circle of the Shepherd': 2
            },
            hitDie: 8,
            spellcasting: true,
            proficiencies: {
                armor: ['Light armor', 'Medium armor', 'Shields'],
                weapons: ['Clubs', 'Daggers', 'Darts', 'Javelins', 'Maces', 'Quarterstaffs', 'Scimitars', 'Sickles', 'Slings', 'Spears'],
                saves: ['Intelligence', 'Wisdom']
            }
        },
        'Fighter': {
            subclasses: {
                'Champion': 3,
                'Battle Master': 3,
                'Eldritch Knight': 3,
                'Arcane Archer': 3,
                'Cavalier': 3,
                'Samurai': 3
            },
            hitDie: 10,
            spellcasting: false,
            proficiencies: {
                armor: ['All armor', 'Shields'],
                weapons: ['Simple weapons', 'Martial weapons'],
                saves: ['Strength', 'Constitution']
            }
        },
        'Monk': {
            subclasses: {
                'Way of the Open Hand': 3,
                'Way of Shadow': 3,
                'Way of the Four Elements': 3,
                'Way of the Drunken Master': 3,
                'Way of the Kensei': 3,
                'Way of the Sun Soul': 3
            },
            hitDie: 8,
            spellcasting: false,
            proficiencies: {
                armor: [],
                weapons: ['Simple weapons', 'Shortswords'],
                saves: ['Strength', 'Dexterity']
            }
        },
        'Paladin': {
            subclasses: {
                'Oath of Devotion': 3,
                'Oath of the Ancients': 3,
                'Oath of Vengeance': 3,
                'Oath of Conquest': 3,
                'Oath of Redemption': 3
            },
            hitDie: 10,
            spellcasting: true,
            proficiencies: {
                armor: ['All armor', 'Shields'],
                weapons: ['Simple weapons', 'Martial weapons'],
                saves: ['Wisdom', 'Charisma']
            }
        },
        'Ranger': {
            subclasses: {
                'Hunter': 3,
                'Beast Master': 3,
                'Gloom Stalker': 3,
                'Horizon Walker': 3,
                'Monster Slayer': 3
            },
            hitDie: 10,
            spellcasting: true,
            proficiencies: {
                armor: ['Light armor', 'Medium armor', 'Shields'],
                weapons: ['Simple weapons', 'Martial weapons'],
                saves: ['Strength', 'Dexterity']
            }
        },
        'Rogue': {
            subclasses: {
                'Thief': 3,
                'Assassin': 3,
                'Arcane Trickster': 3,
                'Inquisitive': 3,
                'Mastermind': 3,
                'Scout': 3,
                'Swashbuckler': 3
            },
            hitDie: 8,
            spellcasting: false,
            proficiencies: {
                armor: ['Light armor'],
                weapons: ['Simple weapons', 'Hand crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
                saves: ['Dexterity', 'Intelligence']
            }
        },
        'Sorcerer': {
            subclasses: {
                'Draconic Bloodline': 1,
                'Wild Magic': 1,
                'Divine Soul': 1,
                'Shadow Magic': 1,
                'Storm Sorcery': 1
            },
            hitDie: 6,
            spellcasting: true,
            proficiencies: {
                armor: [],
                weapons: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows'],
                saves: ['Constitution', 'Charisma']
            }
        },
        'Warlock': {
            subclasses: {
                'The Archfey': 1,
                'The Fiend': 1,
                'The Great Old One': 1,
                'The Celestial': 1,
                'The Hexblade': 1
            },
            hitDie: 8,
            spellcasting: true,
            proficiencies: {
                armor: ['Light armor'],
                weapons: ['Simple weapons'],
                saves: ['Wisdom', 'Charisma']
            }
        },
        'Wizard': {
            subclasses: {
                'School of Abjuration': 2,
                'School of Conjuration': 2,
                'School of Divination': 2,
                'School of Enchantment': 2,
                'School of Evocation': 2,
                'School of Illusion': 2,
                'School of Necromancy': 2,
                'School of Transmutation': 2,
                'War Magic': 2
            },
            hitDie: 6,
            spellcasting: true,
            proficiencies: {
                armor: [],
                weapons: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows'],
                saves: ['Intelligence', 'Wisdom']
            }
        }
    },

    armor: {
        light: [
            { name: 'Padded', ac: 11, type: 'light', cost: '5 gp', weight: '8 lb.' },
            { name: 'Leather', ac: 11, type: 'light', cost: '10 gp', weight: '10 lb.' },
            { name: 'Studded leather', ac: 12, type: 'light', cost: '45 gp', weight: '13 lb.' }
        ],
        medium: [
            { name: 'Hide', ac: 12, type: 'medium', cost: '10 gp', weight: '12 lb.' },
            { name: 'Chain shirt', ac: 13, type: 'medium', cost: '50 gp', weight: '20 lb.' },
            { name: 'Scale mail', ac: 14, type: 'medium', cost: '50 gp', weight: '45 lb.' },
            { name: 'Breastplate', ac: 14, type: 'medium', cost: '400 gp', weight: '20 lb.' },
            { name: 'Half plate', ac: 15, type: 'medium', cost: '750 gp', weight: '40 lb.' }
        ],
        heavy: [
            { name: 'Ring mail', ac: 14, type: 'heavy', cost: '30 gp', weight: '40 lb.' },
            { name: 'Chain mail', ac: 16, type: 'heavy', cost: '75 gp', weight: '55 lb.' },
            { name: 'Splint', ac: 17, type: 'heavy', cost: '200 gp', weight: '60 lb.' },
            { name: 'Plate', ac: 18, type: 'heavy', cost: '1,500 gp', weight: '65 lb.' }
        ],
        shield: [
            { name: 'Shield', ac: 2, type: 'shield', cost: '10 gp', weight: '6 lb.' }
        ]
    },

    weapons: {
        simple: {
            melee: [
                { name: 'Club', damage: '1d4', type: 'bludgeoning', properties: ['Light'], cost: '1 sp', weight: '2 lb.' },
                { name: 'Dagger', damage: '1d4', type: 'piercing', properties: ['Finesse', 'Light', 'Thrown (20/60)'], cost: '2 gp', weight: '1 lb.' },
                { name: 'Greatclub', damage: '1d8', type: 'bludgeoning', properties: ['Two-handed'], cost: '2 sp', weight: '10 lb.' },
                { name: 'Handaxe', damage: '1d6', type: 'slashing', properties: ['Light', 'Thrown (20/60)'], cost: '5 gp', weight: '2 lb.' },
                { name: 'Javelin', damage: '1d6', type: 'piercing', properties: ['Thrown (30/120)'], cost: '5 sp', weight: '2 lb.' },
                { name: 'Light hammer', damage: '1d4', type: 'bludgeoning', properties: ['Light', 'Thrown (20/60)'], cost: '2 gp', weight: '2 lb.' },
                { name: 'Mace', damage: '1d6', type: 'bludgeoning', properties: [], cost: '5 gp', weight: '4 lb.' },
                { name: 'Quarterstaff', damage: '1d6', type: 'bludgeoning', properties: ['Versatile (1d8)'], cost: '2 sp', weight: '4 lb.' },
                { name: 'Sickle', damage: '1d4', type: 'slashing', properties: ['Light'], cost: '1 gp', weight: '2 lb.' },
                { name: 'Spear', damage: '1d6', type: 'piercing', properties: ['Thrown (20/60)', 'Versatile (1d8)'], cost: '1 gp', weight: '3 lb.' }
            ],
            ranged: [
                { name: 'Light crossbow', damage: '1d8', type: 'piercing', properties: ['Ammunition (80/320)', 'Loading', 'Two-handed'], cost: '25 gp', weight: '5 lb.' },
                { name: 'Dart', damage: '1d4', type: 'piercing', properties: ['Finesse', 'Thrown (20/60)'], cost: '5 cp', weight: '1/4 lb.' },
                { name: 'Shortbow', damage: '1d6', type: 'piercing', properties: ['Ammunition (80/320)', 'Two-handed'], cost: '25 gp', weight: '2 lb.' },
                { name: 'Sling', damage: '1d4', type: 'bludgeoning', properties: ['Ammunition (30/120)'], cost: '1 sp', weight: '0 lb.' }
            ]
        },
        martial: {
            melee: [
                { name: 'Battleaxe', damage: '1d8', typemartial: {
            melee: [
                { name: 'Battleaxe', damage: '1d8', type: 'slashing', properties: ['Versatile (1d10)'], cost: '10 gp', weight: '4 lb.' },
                { name: 'Flail', damage: '1d8', type: 'bludgeoning', properties: [], cost: '10 gp', weight: '2 lb.' },
                { name: 'Glaive', damage: '1d10', type: 'slashing', properties: ['Heavy', 'Reach', 'Two-handed'], cost: '20 gp', weight: '6 lb.' },
                { name: 'Greataxe', damage: '1d12', type: 'slashing', properties: ['Heavy', 'Two-handed'], cost: '30 gp', weight: '7 lb.' },
                { name: 'Greatsword', damage: '2d6', type: 'slashing', properties: ['Heavy', 'Two-handed'], cost: '50 gp', weight: '6 lb.' },
                { name: 'Halberd', damage: '1d10', type: 'slashing', properties: ['Heavy', 'Reach', 'Two-handed'], cost: '20 gp', weight: '6 lb.' },
                { name: 'Lance', damage: '1d12', type: 'piercing', properties: ['Reach', 'Special'], cost: '10 gp', weight: '6 lb.' },
                { name: 'Longsword', damage: '1d8', type: 'slashing', properties: ['Versatile (1d10)'], cost: '15 gp', weight: '3 lb.' },
                { name: 'Maul', damage: '2d6', type: 'bludgeoning', properties: ['Heavy', 'Two-handed'], cost: '10 gp', weight: '10 lb.' },
                { name: 'Morningstar', damage: '1d8', type: 'piercing', properties: [], cost: '15 gp', weight: '4 lb.' },
                { name: 'Pike', damage: '1d10', type: 'piercing', properties: ['Heavy', 'Reach', 'Two-handed'], cost: '5 gp', weight: '18 lb.' },
                { name: 'Rapier', damage: '1d8', type: 'piercing', properties: ['Finesse'], cost: '25 gp', weight: '2 lb.' },
                { name: 'Scimitar', damage: '1d6', type: 'slashing', properties: ['Finesse', 'Light'], cost: '25 gp', weight: '3 lb.' },
                { name: 'Shortsword', damage: '1d6', type: 'piercing', properties: ['Finesse', 'Light'], cost: '10 gp', weight: '2 lb.' },
                { name: 'Trident', damage: '1d6', type: 'piercing', properties: ['Thrown (20/60)', 'Versatile (1d8)'], cost: '5 gp', weight: '4 lb.' },
                { name: 'War pick', damage: '1d8', type: 'piercing', properties: [], cost: '5 gp', weight: '2 lb.' },
                { name: 'Warhammer', damage: '1d8', type: 'bludgeoning', properties: ['Versatile (1d10)'], cost: '15 gp', weight: '2 lb.' },
                { name: 'Whip', damage: '1d4', type: 'slashing', properties: ['Finesse', 'Reach'], cost: '2 gp', weight: '3 lb.' }
            ],
            ranged: [
                { name: 'Blowgun', damage: '1', type: 'piercing', properties: ['Ammunition (25/100)', 'Loading'], cost: '10 gp', weight: '1 lb.' },
                { name: 'Hand crossbow', damage: '1d6', type: 'piercing', properties: ['Ammunition (30/120)', 'Light', 'Loading'], cost: '75 gp', weight: '3 lb.' },
                { name: 'Heavy crossbow', damage: '1d10', type: 'piercing', properties: ['Ammunition (100/400)', 'Heavy', 'Loading', 'Two-handed'], cost: '50 gp', weight: '18 lb.' },
                { name: 'Longbow', damage: '1d8', type: 'piercing', properties: ['Ammunition (150/600)', 'Heavy', 'Two-handed'], cost: '50 gp', weight: '2 lb.' }
            ]
        }
    },

    backgrounds: [
        {
            name: 'Acolyte',
            skillProficiencies: ['Insight', 'Religion'],
            languages: 2,
            equipment: ['Holy symbol', 'Prayer book', 'Stick of incense (5)', 'Vestments', 'Common clothes', 'Belt pouch with 15 gp']
        },
        {
            name: 'Charlatan',
            skillProficiencies: ['Deception', 'Sleight of Hand'],
            toolProficiencies: ['Disguise kit', 'Forgery kit'],
            equipment: ['Fine clothes', 'Disguise kit', 'Tools of the con of your choice', 'Belt pouch with 15 gp']
        },
        {
            name: 'Criminal',
            skillProficiencies: ['Deception', 'Stealth'],
            toolProficiencies: ["Thieves' tools", 'One type of gaming set'],
            equipment: ['Crowbar', 'Dark common clothes with hood', 'Belt pouch with 15 gp']
        },
        {
            name: 'Entertainer',
            skillProficiencies: ['Acrobatics', 'Performance'],
            toolProficiencies: ['Disguise kit', 'One type of musical instrument'],
            equipment: ['Musical instrument', 'Favor of an admirer', 'Costume', 'Belt pouch with 15 gp']
        },
        {
            name: 'Folk Hero',
            skillProficiencies: ['Animal Handling', 'Survival'],
            toolProficiencies: ["One type of artisan's tools", 'Land vehicles'],
            equipment: ["Set of artisan's tools", 'Shovel', 'Iron pot', 'Common clothes', 'Belt pouch with 10 gp']
        },
        {
            name: 'Guild Artisan',
            skillProficiencies: ['Insight', 'Persuasion'],
            toolProficiencies: ["One type of artisan's tools"],
            languages: 1,
            equipment: ["One set of artisan's tools", 'Letter of introduction from your guild', 'Traveler's clothes', 'Belt pouch with 15 gp']
        },
        {
            name: 'Noble',
            skillProficiencies: ['History', 'Persuasion'],
            toolProficiencies: ['One type of gaming set'],
            languages: 1,
            equipment: ['Fine clothes', 'Signet ring', 'Scroll of pedigree', 'Purse with 25 gp']
        },
        {
            name: 'Outlander',
            skillProficiencies: ['Athletics', 'Survival'],
            toolProficiencies: ['One type of musical instrument'],
            languages: 1,
            equipment: ['Staff', 'Hunting trap', 'Trophy from an animal', "Traveler's clothes", 'Belt pouch with 10 gp']
        },
        {
            name: 'Sage',
            skillProficiencies: ['Arcana', 'History'],
            languages: 2,
            equipment: ['Bottle of black ink', 'Quill', 'Small knife', 'Letter from dead colleague', 'Common clothes', 'Belt pouch with 10 gp']
        },
        {
            name: 'Sailor',
            skillProficiencies: ['Athletics', 'Perception'],
            toolProficiencies: ["Navigator's tools", 'Water vehicles'],
            equipment: ['Belaying pin (club)', 'Silk rope (50 feet)', 'Lucky charm', 'Common clothes', 'Belt pouch with 10 gp']
        },
        {
            name: 'Soldier',
            skillProficiencies: ['Athletics', 'Intimidation'],
            toolProficiencies: ['One type of gaming set', 'Land vehicles'],
            equipment: ['Insignia of rank', 'Trophy from fallen enemy', 'Set of bone dice or deck of cards', 'Common clothes', 'Belt pouch with 10 gp']
        },
        {
            name: 'Urchin',
            skillProficiencies: ['Sleight of Hand', 'Stealth'],
            toolProficiencies: ['Disguise kit', "Thieves' tools"],
            equipment: ['Small knife', 'Map of your home city', 'Pet mouse', 'Token from your parents', 'Common clothes', 'Belt pouch with 10 gp']
        }
            ],

    skills: {
        'Strength': ['Athletics'],
        'Dexterity': ['Acrobatics', 'Sleight of Hand', 'Stealth'],
        'Constitution': [],
        'Intelligence': ['Arcana', 'History', 'Investigation', 'Nature', 'Religion'],
        'Wisdom': ['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival'],
        'Charisma': ['Deception', 'Intimidation', 'Performance', 'Persuasion']
    }
};
