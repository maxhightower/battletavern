// js/modules/forms/form-handlers.js
import { DND_DATA } from '../utils/dnd-data.js';

export class FormHandlers {
    constructor() {
        this.initializeElements();
        this.setupEventListeners();
        this.populateSelects();
    }

    initializeElements() {
        this.form = document.getElementById('character-form');
        this.raceSelect = document.getElementById('char-race');
        this.subraceContainer = document.getElementById('subrace-container');
        this.subraceSelect = document.getElementById('char-subrace');
        this.backgroundSelect = document.getElementById('char-background');
        this.nameInput = document.getElementById('char-name');
        this.skillGrid = document.getElementById('skill-proficiencies');
    }

    setupEventListeners() {
        if (this.raceSelect) {
            this.raceSelect.addEventListener('change', () => this.handleRaceChange());
        }
        if (this.backgroundSelect) {
            this.backgroundSelect.addEventListener('change', () => this.handleBackgroundChange());
        }
    }

    populateSelects() {
        // Populate races
        if (this.raceSelect) {
            this.raceSelect.innerHTML = '<option value="">Select Race</option>';
            Object.keys(DND_DATA.races).forEach(race => {
                const option = document.createElement('option');
                option.value = race;
                option.textContent = race;
                this.raceSelect.appendChild(option);
            });
        }

        // Populate backgrounds
        if (this.backgroundSelect) {
            this.backgroundSelect.innerHTML = '<option value="">Select Background</option>';
            DND_DATA.backgrounds.forEach(background => {
                const option = document.createElement('option');
                option.value = background.name;
                option.textContent = background.name;
                this.backgroundSelect.appendChild(option);
            });
        }
    }

    handleRaceChange() {
        const selectedRace = DND_DATA.getRace(this.raceSelect.value);
        
        if (selectedRace?.subraces?.length > 0) {
            this.subraceSelect.innerHTML = '<option value="">Select Subrace</option>';
            selectedRace.subraces.forEach(subrace => {
                const option = document.createElement('option');
                option.value = subrace;
                option.textContent = subrace;
                this.subraceSelect.appendChild(option);
            });
            this.subraceContainer.classList.remove('hidden');
        } else {
            this.subraceContainer.classList.add('hidden');
        }

        // Trigger racial traits update
        this.updateRacialTraits(selectedRace);
    }

    handleBackgroundChange() {
        const selectedBackground = DND_DATA.backgrounds.find(
            bg => bg.name === this.backgroundSelect.value
        );
        
        if (selectedBackground) {
            this.updateSkillProficiencies(selectedBackground.skillProficiencies);
            this.updateBackgroundFeatures(selectedBackground);
        }
    }

    updateSkillProficiencies(proficiencies) {
        if (!this.skillGrid) return;

        this.skillGrid.innerHTML = '';
        
        Object.entries(DND_DATA.skills).forEach(([ability, skills]) => {
            skills.forEach(skill => {
                const div = document.createElement('div');
                div.className = 'skill-item';
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `skill-${skill.toLowerCase()}`;
                checkbox.checked = proficiencies.includes(skill);
                checkbox.disabled = proficiencies.includes(skill);

                const label = document.createElement('label');
                label.htmlFor = checkbox.id;
                label.textContent = `${skill} (${ability.slice(0, 3)})`;

                div.appendChild(checkbox);
                div.appendChild(label);
                this.skillGrid.appendChild(div);
            });
        });
    }

    updateRacialTraits(race) {
        const traitsContainer = document.getElementById('racial-traits');
        if (!traitsContainer || !race) return;

        traitsContainer.innerHTML = '<h4>Racial Traits</h4>';
        race.traits.forEach(trait => {
            const traitDiv = document.createElement('div');
            traitDiv.className = 'trait-item';
            traitDiv.textContent = trait;
            traitsContainer.appendChild(traitDiv);
        });
    }

    updateBackgroundFeatures(background) {
        const featuresContainer = document.getElementById('background-features');
        if (!featuresContainer || !background) return;

        featuresContainer.innerHTML = '<h4>Background Features</h4>';
        
        // Equipment
        const equipmentList = document.createElement('div');
        equipmentList.className = 'feature-section';
        equipmentList.innerHTML = '<h5>Equipment</h5>';
        background.equipment.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = item;
            equipmentList.appendChild(itemDiv);
        });
        featuresContainer.appendChild(equipmentList);

        // Proficiencies
        if (background.toolProficiencies) {
            const profList = document.createElement('div');
            profList.className = 'feature-section';
            profList.innerHTML = '<h5>Tool Proficiencies</h5>';
            background.toolProficiencies.forEach(prof => {
                const profDiv = document.createElement('div');
                profDiv.textContent = prof;
                profList.appendChild(profDiv);
            });
            featuresContainer.appendChild(profList);
        }
    }

    gatherFormData() {
        return {
            name: this.nameInput?.value || '',
            race: this.raceSelect?.value || '',
            subrace: this.subraceSelect?.value || '',
            background: this.backgroundSelect?.value || '',
            skills: Array.from(this.skillGrid?.querySelectorAll('input:checked') || [])
                .map(checkbox => checkbox.id.replace('skill-', '')),
            features: {
                racial: Array.from(document.querySelectorAll('#racial-traits .trait-item'))
                    .map(trait => trait.textContent),
                background: Array.from(document.querySelectorAll('#background-features .feature-section'))
                    .map(section => ({
                        title: section.querySelector('h5')?.textContent || '',
                        items: Array.from(section.querySelectorAll('div:not(.feature-section)'))
                            .map(item => item.textContent)
                    }))
            }
        };
    }

    validateForm() {
        const requiredFields = {
            name: this.nameInput,
            race: this.raceSelect,
            background: this.backgroundSelect
        };

        let isValid = true;
        Object.entries(requiredFields).forEach(([fieldName, element]) => {
            if (!element?.value) {
                isValid = false;
                this.showError(element, `${fieldName} is required`);
            } else {
                this.clearError(element);
            }
        });

        return isValid;
    }

    showError(element, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        element.parentElement.appendChild(errorDiv);
        element.classList.add('error');
    }

    clearError(element) {
        const errorDiv = element.parentElement.querySelector('.form-error');
        if (errorDiv) errorDiv.remove();
        element.classList.remove('error');
    }

    reset() {
        this.form?.reset();
        this.subraceContainer?.classList.add('hidden');
        this.skillGrid.innerHTML = '';
        document.getElementById('racial-traits').innerHTML = '';
        document.getElementById('background-features').innerHTML = '';
        
        // Clear all error messages
        document.querySelectorAll('.form-error').forEach(error => error.remove());
        document.querySelectorAll('.error').forEach(element => element.classList.remove('error'));
    }
}