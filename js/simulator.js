// simulator.js

class Simulator {
    constructor() {
        this.monsterSelect = document.getElementById('monster-select');
        this.selectedMonsters = document.getElementById('selected-monsters');
        this.runSimulation = document.getElementById('run-simulation');
        this.resetForm = document.getElementById('reset-form');
        this.results = document.getElementById('results');

        this.setupEventListeners();
        this.initializeMonsterList();
    }

    setupEventListeners() {
        if (this.runSimulation) {
            this.runSimulation.addEventListener('click', () => this.handleSimulation());
        }

        if (this.resetForm) {
            this.resetForm.addEventListener('click', () => this.handleReset());
        }

        if (this.monsterSelect) {
            this.monsterSelect.addEventListener('change', (e) => this.handleMonsterSelection(e));
        }
    }

    initializeMonsterList() {
        // Populate monster selection (placeholder)
        const monsters = [
            'Goblin',
            'Orc',
            'Dragon Wyrmling',
            'Bugbear',
            'Ogre'
        ];

        monsters.forEach(monster => {
            const option = document.createElement('option');
            option.value = monster.toLowerCase();
            option.textContent = monster;
            this.monsterSelect.appendChild(option);
        });
    }

    handleMonsterSelection(event) {
        const selectedMonster = event.target.value;
        if (selectedMonster) {
            this.addMonsterTag(event.target.options[event.target.selectedIndex].text);
            event.target.value = ''; // Reset selection
        }
    }

    addMonsterTag(monsterName) {
        const tag = document.createElement('div');
        tag.className = 'monster-tag';
        tag.innerHTML = `
            ${monsterName}
            <button class="remove-monster">&times;</button>
        `;

        tag.querySelector('.remove-monster').addEventListener('click', () => {
            tag.remove();
        });

        this.selectedMonsters.appendChild(tag);
    }

    handleSimulation() {
        // Placeholder for simulation logic
        this.results.classList.remove('hidden');
        // Add simulation results display logic here
    }

    handleReset() {
        this.selectedMonsters.innerHTML = '';
        this.results.classList.add('hidden');
        // Add any additional reset logic here
    }
}

// Initialize simulator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const simulator = new Simulator();
});