// js/modules/ui/character-card.js

export class CharacterCard {
    constructor(container) {
        this.container = container;
        if (!this.container) {
            console.error('Character list container not found');
        }
    }

    createCard(characterData) {
        const card = document.createElement('div');
        card.className = 'character-card';
        
        card.innerHTML = this.generateCardHTML(characterData);
        this.setupCardEventListeners(card, characterData);
        
        this.container.appendChild(card);
        return card;
    }

    generateCardHTML(character) {
        const getModifier = (score) => {
            const mod = Math.floor((parseInt(score) - 10) / 2);
            return mod >= 0 ? `+${mod}` : mod;
        };

        return `
            <div class="character-card-header">
                <h3>${character.name}</h3>
                <div class="character-subtitle">
                    ${character.race} ${character.subrace ? `(${character.subrace})` : ''}
                    ${character.background}
                </div>
            </div>

            <div class="character-stats">
                ${Object.entries(character.abilities).map(([ability, score]) => `
                    <div class="stat-box">
                        <div class="stat-label">${ability.slice(0, 3).toUpperCase()}</div>
                        <div class="stat-value">${score} (${getModifier(score)})</div>
                    </div>
                `).join('')}
            </div>

            <div class="character-details">
                <div class="detail-section">
                    <h4>Skills</h4>
                    <div class="skill-list">
                        ${character.skills.map(skill => `
                            <span class="skill-tag">${skill}</span>
                        `).join('')}
                    </div>
                </div>

                <div class="detail-section">
                    <h4>Equipment</h4>
                    <div class="equipment-list">
                        ${character.equipment.armor ? `
                            <div class="equipment-item">
                                <span class="equipment-label">Armor:</span>
                                <span>${character.equipment.armor}</span>
                            </div>
                        ` : ''}
                        ${character.equipment.weapons.length > 0 ? `
                            <div class="equipment-item">
                                <span class="equipment-label">Weapons:</span>
                                <span>${character.equipment.weapons.join(', ')}</span>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <div class="detail-section">
                    <h4>Features</h4>
                    <div class="features-list">
                        ${character.features.racial.map(trait => `
                            <div class="feature-item">${trait}</div>
                        `).join('')}
                        ${character.features.background.map(section => `
                            <div class="feature-section">
                                <h5>${section.title}</h5>
                                ${section.items.map(item => `
                                    <div class="feature-item">${item}</div>
                                `).join('')}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="character-actions">
                <button class="button secondary edit-character">Edit</button>
                <button class="button secondary remove-character">Remove</button>
            </div>
        `;
    }

    setupCardEventListeners(card, characterData) {
        const removeBtn = card.querySelector('.remove-character');
        if (removeBtn) {
            removeBtn.addEventListener('click', () => {
                card.remove();
                this.onCharacterRemoved(characterData);
            });
        }

        const editBtn = card.querySelector('.edit-character');
        if (editBtn) {
            editBtn.addEventListener('click', () => {
                this.onCharacterEdit(characterData);
            });
        }
    }

    onCharacterRemoved(characterData) {
        // Event hook for character removal
        // Can be overridden or subscribed to by parent components
        console.log('Character removed:', characterData);
    }

    onCharacterEdit(characterData) {
        // Event hook for character editing
        // Can be overridden or subscribed to by parent components
        console.log('Edit character:', characterData);
    }

    updateCard(card, characterData) {
        card.innerHTML = this.generateCardHTML(characterData);
        this.setupCardEventListeners(card, characterData);
    }
}