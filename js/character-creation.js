// character-creation.js

// D&D 5E Data
const DND_DATA = {
    races: {
        'Dragonborn': {
            subraces: [],
            abilityScoreIncrease: { strength: 2, charisma: 1 },
            traits: ['Breath Weapon', 'Damage Resistance']
        },
        'Dwarf': {
            subraces: ['Hill Dwarf', 'Mountain Dwarf'],
            abilityScoreIncrease: { constitution: 2 },
            traits: ['Darkvision', 'Dwarven Resilience']
        },
        'Elf': {
            subraces: ['High Elf', 'Wood Elf', 'Dark Elf'],
            abilityScoreIncrease: { dexterity: 2 },
            traits: ['Darkvision', 'Keen Senses']
        },
        // Add more races...
    },
    
    classes: {
        'Fighter': {
            subclasses: ['Champion', 'Battle Master', 'Eldritch Knight'],
            hitDie: 10,
            spellcasting: false,
            proficiencies: ['All armor', 'Shields', 'Simple weapons', 'Martial weapons']
        },
        'Wizard': {
            subclasses: ['School of Evocation', 'School of Abjuration', 'School of Divination'],
            hitDie: 6,
            spellcasting: true,
            proficiencies: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows']
        },
        // Add more classes...
    },

    backgrounds: [
        'Acolyte',
        'Criminal',
        'Folk Hero',
        'Noble',
        'Sage',
        'Soldier'
        // Add more backgrounds...
    ],

    armor: {
        light: [
            { name: 'Padded', ac: 11, type: 'light' },
            { name: 'Leather', ac: 11, type: 'light' },
            { name: 'Studded leather', ac: 12, type: 'light' }
        ],
        medium: [
            { name: 'Hide', ac: 12, type: 'medium' },
            { name: 'Chain shirt', ac: 13, type: 'medium' },
            { name: 'Scale mail', ac: 14, type: 'medium' }
        ],
        heavy: [
            { name: 'Ring mail', ac: 14, type: 'heavy' },
            { name: 'Chain mail', ac: 16, type: 'heavy' },
            { name: 'Plate', ac: 18, type: 'heavy' }
        ]
    },

    weapons: {
        simple: [
            { name: 'Dagger', damage: '1d4', type: 'piercing' },
            { name: 'Club', damage: '1d4', type: 'bludgeoning' },
            { name: 'Spear', damage: '1d6', type: 'piercing' }
        ],
        martial: [
            { name: 'Longsword', damage: '1d8', type: 'slashing' },
            { name: 'Battleaxe', damage: '1d8', type: 'slashing' },
            { name: 'Greatsword', damage: '2d6', type: 'slashing' }
        ]
    }
};

// Character Creation Modal
class CharacterCreator {
    constructor() {
        this.modal = document.getElementById('character-modal');
        this.form = document.getElementById('character-form');
        this.addCharacterBtn = document.getElementById('add-character');
        this.closeBtn = document.querySelector('.close-modal');
        this.cancelBtn = document.querySelector('.cancel-modal');
        this.characterList = document.getElementById('character-list');
        
        this.setupEventListeners();
        this.populateFormSelections();
    }

    setupEventListeners() {
        // Modal controls
        this.addCharacterBtn.addEventListener('click', () => this.openModal());
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.cancelBtn.addEventListener('click', () => this.closeModal());
        
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Race selection
        document.getElementById('char-race').addEventListener('change', (e) => this.handleRaceChange(e));
        
        // Class selection
        document.getElementById('char-class').addEventListener('change', (e) => this.handleClassChange(e));
        
        // Ability score changes
        const abilityScores = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
        abilityScores.forEach(ability => {
            document.getElementById(ability).addEventListener('change', (e) => this.updateAbilityModifier(e.target));
        });
    }

    populateFormSelections() {
        // Populate races
        const raceSelect = document.getElementById('char-race');
        Object.keys(DND_DATA.races).forEach(race => {
            const option = document.createElement('option');
            option.value = race;
            option.textContent = race;
            raceSelect.appendChild(option);
        });

        // Populate classes
        const classSelect = document.getElementById('char-class');
        Object.keys(DND_DATA.classes).forEach(className => {
            const option = document.createElement('option');
            option.value = className;
            option.textContent = className;
            classSelect.appendChild(option);
        });

        // Populate backgrounds
        const backgroundSelect = document.getElementById('char-background');
        DND_DATA.backgrounds.forEach(background => {
            const option = document.createElement('option');
            option.value = background;
            option.textContent = background;
            backgroundSelect.appendChild(option);
        });
    }

    handleRaceChange(event) {
        const race = DND_DATA.races[event.target.value];
        const subraceContainer = document.getElementById('subrace-container');
        const subraceSelect = document.getElementById('char-subrace');
        
        if (race && race.subraces.length > 0) {
            subraceSelect.innerHTML = '<option value="">Select Subrace</option>';
            race.subraces.forEach(subrace => {
                const option = document.createElement('option');
                option.value = subrace;
                option.textContent = subrace;
                subraceSelect.appendChild(option);
            });
            subraceContainer.classList.remove('hidden');
        } else {
            subraceContainer.classList.add('hidden');
        }
    }

    handleClassChange(event) {
        const characterClass = DND_DATA.classes[event.target.value];
        const subclassContainer = document.getElementById('subclass-container');
        const subclassSelect = document.getElementById('char-subclass');
        const spellsSection = document.getElementById('spells-section');
        
        // Handle subclass
        if (characterClass && characterClass.subclasses.length > 0) {
            subclassSelect.innerHTML = '<option value="">Select Subclass</option>';
            characterClass.subclasses.forEach(subclass => {
                const option = document.createElement('option');
                option.value = subclass;
                option.textContent = subclass;
                subclassSelect.appendChild(option);
            });
            subclassContainer.classList.remove('hidden');
        } else {
            subclassContainer.classList.add('hidden');
        }
        
        // Handle spellcasting
        if (characterClass && characterClass.spellcasting) {
            spellsSection.classList.remove('hidden');
            this.populateSpellOptions(event.target.value);
        } else {
            spellsSection.classList.add('hidden');
        }
    }

    updateAbilityModifier(input) {
        const score = parseInt(input.value);
        const modifier = Math.floor((score - 10) / 2);
        const modifierSpan = input.nextElementSibling;
        modifierSpan.textContent = modifier >= 0 ? `+${modifier}` : modifier;
    }

    populateSpellOptions(characterClass) {
        // This would be populated with actual spell lists based on class
        const spellList = document.getElementById('spell-list');
        spellList.innerHTML = '<p>Spell selection will be implemented based on class and level.</p>';
    }

    handleSubmit(event) {
        event.preventDefault();
        
        // Gather all form data
        const characterData = {
            name: document.getElementById('char-name').value,
            race: document.getElementById('char-race').value,
            subrace: document.getElementById('char-subrace').value,
            class: document.getElementById('char-class').value,
            subclass: document.getElementById('char-subclass').value,
            level: document.getElementById('char-level').value,
            background: document.getElementById('char-background').value,
            abilities: {
                strength: document.getElementById('strength').value,
                dexterity: document.getElementById('dexterity').value,
                constitution: document.getElementById('constitution').value,
                intelligence: document.getElementById('intelligence').value,
                wisdom: document.getElementById('wisdom').value,
                charisma: document.getElementById('charisma').value
            }
        };

        this.createCharacterCard(characterData);
        this.closeModal();
        this.form.reset();
    }

    createCharacterCard(character) {
        const card = document.createElement('div');
        card.className = 'character-card';
        
        card.innerHTML = `
            <div class="character-card-header">
                <h3>${character.name}</h3>
                <div>Level ${character.level} ${character.race} ${character.class}</div>
            </div>
            <div class="character-card-content">
                <div class="character-stat">
                    <div>STR</div>
                    <div>${character.abilities.strength} (${Math.floor((character.abilities.strength - 10) / 2)})</div>
                </div>
                <div class="character-stat">
                    <div>DEX</div>
                    <div>${character.abilities.dexterity} (${Math.floor((character.abilities.dexterity - 10) / 2)})</div>
                </div>
                <div class="character-stat">
                    <div>CON</div>
                    <div>${character.abilities.constitution} (${Math.floor((character.abilities.constitution - 10) / 2)})</div>
                </div>
                <div class="character-stat">
                    <div>INT</div>
                    <div>${character.abilities.intelligence} (${Math.floor((character.abilities.intelligence - 10) / 2)})</div>
                </div>
                <div class="character-stat">
                    <div>WIS</div>
                    <div>${character.abilities.wisdom} (${Math.floor((character.abilities.wisdom - 10) / 2)})</div>
                </div>
                <div class="character-stat">
                    <div>CHA</div>
                    <div>${character.abilities.charisma} (${Math.floor((character.abilities.charisma - 10) / 2)})</div>
                </div>
            </div>
            <div class="character-actions">
                <button class="button secondary edit-character">Edit</button>
                <button class="button secondary remove-character">Remove</button>
            </div>
        `;
        
        // Add event listeners for edit and remove buttons
        card.querySelector('.edit-character').addEventListener('click', () => this.editCharacter(character));
        card.querySelector('.remove-character').addEventListener('click', () => card.remove());
        
        this.characterList.appendChild(card);
    }

    editCharacter(character) {
        // Populate form with character data and open modal
        document.getElementById('char-name').value = character.name;
        document.getElementById('char-race').value = character.race;
        // ... populate other fields ...
        this.openModal();
    }

    openModal() {
        this.modal.classList.remove('hidden');
    }

    closeModal() {
        this.modal.classList.add('hidden');
    }
}

// Initialize character creator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const characterCreator = new CharacterCreator();
});