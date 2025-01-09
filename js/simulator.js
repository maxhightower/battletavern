// js/simulator.js
import { CharacterCreator } from './modules/character-creator.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing simulator...');
    
    // Initialize Character Creator
    const characterCreator = new CharacterCreator();
    
    // Initialize Simulator
    const simulator = new Simulator();
});

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
        // Monster selection
        if (this.monsterSelect) {
            this.monsterSelect.addEventListener('change', (e) => this.handleMonsterSelection(e));
        }

        // Simulation controls
        if (this.runSimulation) {
            this.runSimulation.addEventListener('click', () => this.handleSimulation());
        }
        if (this.resetForm) {
            this.resetForm.addEventListener('click', () => this.handleReset());
        }
    }

    initializeMonsterList() {
        if (!this.monsterSelect) return;

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
        if (!this.selectedMonsters) return;

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
        if (!this.results) return;

        // Show results section
        this.results.classList.remove('hidden');

        const battleStats = document.getElementById('battle-stats');
        const battleGraph = document.getElementById('battle-graph');

        if (battleStats && battleGraph) {
            // Placeholder for simulation results
            battleStats.innerHTML = '<p>Simulation results will appear here...</p>';
            battleGraph.innerHTML = '<p>Battle visualization will appear here...</p>';
        }
    }

    handleReset() {
        if (this.selectedMonsters) {
            this.selectedMonsters.innerHTML = '';
        }
        if (this.results) {
            this.results.classList.add('hidden');
        }
    }
}