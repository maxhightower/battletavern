import { DND_DATA } from './utils/dnd-data.js';
import { AbilityScoreManager } from './forms/ability-scores.js';
import { ClassFeatureManager } from './forms/class-features.js';
import { EquipmentManager } from './forms/equipment.js';
import { FormHandlers } from './forms/form-handlers.js';
import { CharacterCard } from './ui/character-card.js';
import { ModalController } from './ui/modal.js';

export class CharacterCreator {
    constructor() {
        this.initializeComponents();
        this.setupEventListeners();
    }

    initializeComponents() {
        // Initialize modal controller
        this.modalController = new ModalController();

        // Initialize sub-modules
        this.abilityScores = new AbilityScoreManager();
        this.classFeatures = new ClassFeatureManager();
        this.equipment = new EquipmentManager();
        this.formHandlers = new FormHandlers();
        this.characterCards = new CharacterCard(document.getElementById('character-list'));

        // Initialize elements
        this.addCharacterBtn = document.getElementById('add-character');
        this.form = document.getElementById('character-form');

        if (!this.addCharacterBtn || !this.form) {
            console.error('Required elements not found in CharacterCreator');
        }
    }

    setupEventListeners() {
        // Add event listener to the "Add Character" button
        if (this.addCharacterBtn) {
            this.addCharacterBtn.addEventListener('click', () => {
                console.log('Add Character button clicked'); // Debug log
                this.modalController.open();
            });
        }

        // Add event listener to the form submission
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Form submitted');  // Debug log

        const characterData = {
            ...this.formHandlers.gatherFormData(),
            abilities: this.abilityScores.getAbilityScores(),
            equipment: this.equipment.getSelectedEquipment(),
            features: this.classFeatures.getSelectedFeatures()
        };

        console.log('Character data:', characterData);  // Debug log
        this.characterCards.createCard(characterData);
        this.modalController.close();
        this.form?.reset();
    }
}