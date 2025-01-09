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
        }
        // Add more races as needed
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
        }
        // Add more classes as needed
    }
};

class CharacterCreator {
    constructor() {
        // Modal elements
        this.modal = document.getElementById('character-modal');
        this.addCharacterBtn = document.getElementById('add-character');
        this.closeBtn = document.querySelector('.close-modal');
        this.cancelBtn = document.querySelector('.cancel-modal');
        this.form = document.getElementById('character-form');
        this.characterList = document.getElementById('character-list');

        if (!this.modal || !this.addCharacterBtn || !this.closeBtn || !this.cancelBtn) {
            console.error('Required elements not found');
            return;
        }

        this.setupEventListeners();
        this.initializeFormData();
    }

    setupEventListeners() {
        // Modal controls
        this.addCharacterBtn.addEventListener('click', () => this.openModal());
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.cancelBtn.addEventListener('click', () => this.closeModal());
        
        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Race selection change
        const raceSelect = document.getElementById('char-race');
        if (raceSelect) {
            raceSelect.addEventListener('change', (e) => this.handleRaceChange(e));
        }

        // Class selection change
        const classSelect = document.getElementById('char-class');
        if (classSelect) {
            classSelect.addEventListener('change', (e) => this.handleClassChange(e));
        }

        // Form submission
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    initializeFormData() {
        // Populate race dropdown
        const raceSelect = document.getElementById('char-race');
        if (raceSelect) {
            Object.keys(DND_DATA.races).forEach(race => {
                const option = document.createElement('option');
                option.value = race;
                option.textContent = race;
                raceSelect.appendChild(option);
            });
        }

        // Populate class dropdown
        const classSelect = document.getElementById('char-class');
        if (classSelect) {
            Object.keys(DND_DATA.classes).forEach(className => {
                const option = document.createElement('option');
                option.value = className;
                option.textContent = className;
                classSelect.appendChild(option);
            });
        }
    }

    openModal() {
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    closeModal() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
        if (this.form) {
            this.form.reset();
        }
    }

    handleRaceChange(event) {
        const selectedRace = DND_DATA.races[event.target.value];
        const subraceContainer = document.getElementById('subrace-container');
        const subraceSelect = document.getElementById('char-subrace');

        if (selectedRace && selectedRace.subraces.length > 0) {
            // Clear and populate subrace options
            subraceSelect.innerHTML = '<option value="">Select Subrace</option>';
            selectedRace.subraces.forEach(subrace => {
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
        const selectedClass = DND_DATA.classes[event.target.value];
        const subclassContainer = document.getElementById('subclass-container');
        const spellsSection = document.getElementById('spells-section');

        if (selectedClass) {
            // Handle subclass display
            if (selectedClass.subclasses.length > 0) {
                const subclassSelect = document.getElementById('char-subclass');
                subclassSelect.innerHTML = '<option value="">Select Subclass</option>';
                selectedClass.subclasses.forEach(subclass => {
                    const option = document.createElement('option');
                    option.value = subclass;
                    option.textContent = subclass;
                    subclassSelect.appendChild(option);
                });
                subclassContainer.classList.remove('hidden');
            } else {
                subclassContainer.classList.add('hidden');
            }

            // Handle spellcasting section
            if (selectedClass.spellcasting) {
                spellsSection.classList.remove('hidden');
            } else {
                spellsSection.classList.add('hidden');
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        
        // Gather character data
        const characterData = {
            name: document.getElementById('char-name').value,
            race: document.getElementById('char-race').value,
            class: document.getElementById('char-class').value,
            level: document.getElementById('char-level').value,
            abilities: {
                strength: document.getElementById('strength').value,
                dexterity: document.getElementById('dexterity').value,
                constitution: document.getElementById('constitution').value,
                intelligence: document.getElementById('intelligence').value,
                wisdom: document.getElementById('wisdom').value,
                charisma: document.getElementById('charisma').value
            }
        };

        // Create character card and add to list
        this.createCharacterCard(characterData);
        this.closeModal();
    }

    createCharacterCard(character) {
        const card = document.createElement('div');
        card.className = 'character-card';
        
        card.innerHTML = `
            <div class="character-card-header">
                <h3>${character.name}</h3>
                <div>Level ${character.level} ${character.race} ${character.class}</div>
            </div>
            <div class="character-stats">
                <div class="stat-box">
                    <div>STR</div>
                    <div>${character.abilities.strength}</div>
                </div>
                <div class="stat-box">
                    <div>DEX</div>
                    <div>${character.abilities.dexterity}</div>
                </div>
                <div class="stat-box">
                    <div>CON</div>
                    <div>${character.abilities.constitution}</div>
                </div>
                <div class="stat-box">
                    <div>INT</div>
                    <div>${character.abilities.intelligence}</div>
                </div>
                <div class="stat-box">
                    <div>WIS</div>
                    <div>${character.abilities.wisdom}</div>
                </div>
                <div class="stat-box">
                    <div>CHA</div>
                    <div>${character.abilities.charisma}</div>
                </div>
            </div>
            <div class="character-actions">
                <button class="button secondary">Edit</button>
                <button class="button secondary remove-character">Remove</button>
            </div>
        `;

        // Add event listener for remove button
        const removeButton = card.querySelector('.remove-character');
        removeButton.addEventListener('click', () => card.remove());

        this.characterList.appendChild(card);
    }
}

// Initialize character creator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const characterCreator = new CharacterCreator();
});