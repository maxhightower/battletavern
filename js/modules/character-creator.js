// js/modules/character-creator.js
import { DND_DATA } from './utils/dnd-data.js';
import { AbilityScoreManager } from './forms/ability-scores.js';
import { ClassFeatureManager } from './forms/class-features.js';
import { EquipmentManager } from './forms/equipment.js';
import { FormHandlers } from './forms/form-handlers.js';
import { CharacterCard } from './ui/character-card.js';

export class CharacterCreator {
    constructor() {
        this.initializeComponents();
        this.setupEventListeners();
    }

    initializeComponents() {
        // Initialize sub-modules
        this.abilityScores = new AbilityScoreManager();
        this.classFeatures = new ClassFeatureManager();
        this.equipment = new EquipmentManager();
        this.formHandlers = new FormHandlers();
        this.characterCards = new CharacterCard(document.getElementById('character-list'));

        // Initialize elements
        this.addCharacterBtn = document.getElementById('add-character');
        this.modal = document.getElementById('character-modal');
        this.form = document.getElementById('character-form');
        
        if (!this.addCharacterBtn || !this.modal || !this.form) {
            console.error('Required elements not found in CharacterCreator');
        }
    }

    setupEventListeners() {
        if (this.addCharacterBtn) {
            this.addCharacterBtn.addEventListener('click', () => {
                console.log('Add Character button clicked'); // Debug log
                this.openModal();
            });
        }

        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        // Modal close button
        const closeBtn = this.modal?.querySelector('.close-modal');
        const cancelBtn = this.modal?.querySelector('.cancel-modal');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => this.closeModal());
        }

        // Close on outside click
        this.modal?.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    openModal() {
        console.log('Opening modal');  // Debug log
        if (this.modal) {
            this.modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        } else {
            console.error('Modal element not found');
        }
    }

    closeModal() {
        console.log('Closing modal');  // Debug log
        if (this.modal) {
            this.modal.classList.add('hidden');
            document.body.style.overflow = '';
            this.form?.reset();
        } else {
            console.error('Modal element not found');
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
        this.closeModal();
    }
}

// Add a debug log when the module is loaded
console.log('CharacterCreator module loaded');