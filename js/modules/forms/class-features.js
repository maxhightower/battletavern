// js/modules/forms/class-features.js
import { DND_DATA } from '../utils/dnd-data.js';

export class ClassFeatureManager {
    constructor() {
        this.initializeElements();
        this.setupEventListeners();
    }

    initializeElements() {
        this.classSelect = document.getElementById('char-class');
        this.subclassContainer = document.getElementById('subclass-container');
        this.subclassSelect = document.getElementById('char-subclass');
        this.levelInput = document.getElementById('char-level');
        this.spellsSection = document.getElementById('spells-section');
        this.featuresContainer = document.getElementById('features-container');
    }

    setupEventListeners() {
        this.classSelect?.addEventListener('change', () => this.handleClassChange());
        this.levelInput?.addEventListener('change', () => this.handleLevelChange());
    }

    handleClassChange() {
        const selectedClass = DND_DATA.getClass(this.classSelect.value);
        if (!selectedClass) return;

        const level = parseInt(this.levelInput.value);
        
        this.updateSubclassOptions(selectedClass, level);
        this.updateSpellcasting(selectedClass);
        this.updateClassFeatures(selectedClass, level);
    }

    handleLevelChange() {
        const selectedClass = DND_DATA.getClass(this.classSelect.value);
        if (!selectedClass) return;

        const level = parseInt(this.levelInput.value);
        
        this.updateSubclassOptions(selectedClass, level);
        this.updateClassFeatures(selectedClass, level);
    }

    updateSubclassOptions(selectedClass, level) {
        if (!this.subclassContainer || !this.subclassSelect) return;

        const availableSubclasses = Object.entries(selectedClass.subclasses)
            .filter(([_, reqLevel]) => level >= reqLevel);

        if (availableSubclasses.length > 0) {
            this.subclassSelect.innerHTML = '<option value="">Select Subclass</option>';
            availableSubclasses.forEach(([subclass, reqLevel]) => {
                const option = document.createElement('option');
                option.value = subclass;
                option.textContent = `${subclass} (Level ${reqLevel})`;
                this.subclassSelect.appendChild(option);
            });
            this.subclassContainer.classList.remove('hidden');
        } else {
            this.subclassContainer.classList.add('hidden');
        }
    }

    updateSpellcasting(selectedClass) {
        if (!this.spellsSection) return;

        if (selectedClass.spellcasting) {
            this.spellsSection.classList.remove('hidden');
            // TODO: Implement spell selection logic
        } else {
            this.spellsSection.classList.add('hidden');
        }
    }

    updateClassFeatures(selectedClass, level) {
        if (!this.featuresContainer) return;

        this.featuresContainer.innerHTML = '<h4>Class Features</h4>';
        // TODO: Add class features based on level
    }

    getSelectedFeatures() {
        return {
            class: this.classSelect?.value,
            subclass: this.subclassSelect?.value,
            level: parseInt(this.levelInput?.value) || 1,
            spells: [] // TODO: Implement spell selection
        };
    }

    reset() {
        this.classSelect.value = '';
        this.subclassSelect.value = '';
        this.levelInput.value = '1';
        this.spellsSection.classList.add('hidden');
        this.subclassContainer.classList.add('hidden');
        this.featuresContainer.innerHTML = '';
    }
}