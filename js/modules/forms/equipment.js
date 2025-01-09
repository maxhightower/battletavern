// js/modules/forms/equipment.js
import { DND_DATA } from '../utils/dnd-data.js';

export class EquipmentManager {
    constructor() {
        this.initializeElements();
        this.setupEventListeners();
        this.populateArmorSelect();
    }

    initializeElements() {
        this.armorSelect = document.getElementById('armor-select');
        this.weaponsContainer = document.getElementById('weapons-container');
        this.addWeaponBtn = document.getElementById('add-weapon');
    }

    setupEventListeners() {
        this.addWeaponBtn?.addEventListener('click', () => this.addWeaponSelection());
    }

    populateArmorSelect() {
        if (!this.armorSelect) return;

        this.armorSelect.innerHTML = '<option value="">Select Armor</option>';
        
        Object.entries(DND_DATA.armor).forEach(([category, items]) => {
            const group = document.createElement('optgroup');
            group.label = category.charAt(0).toUpperCase() + category.slice(1);
            
            items.forEach(armor => {
                const option = document.createElement('option');
                option.value = armor.name.toLowerCase();
                option.textContent = `${armor.name} (AC ${armor.ac})`;
                group.appendChild(option);
            });
            
            this.armorSelect.appendChild(group);
        });
    }

    addWeaponSelection() {
        if (!this.weaponsContainer) return;

        const weaponDiv = document.createElement('div');
        weaponDiv.className = 'weapon-selection';
        
        const select = document.createElement('select');
        select.className = 'weapon-select';
        select.innerHTML = '<option value="">Select Weapon</option>';

        // Add simple weapons
        const simpleGroup = document.createElement('optgroup');
        simpleGroup.label = 'Simple Weapons';
        [...DND_DATA.weapons.simple.melee, ...DND_DATA.weapons.simple.ranged].forEach(weapon => {
            const option = document.createElement('option');
            option.value = weapon.name.toLowerCase();
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.type})`;
            simpleGroup.appendChild(option);
        });
        select.appendChild(simpleGroup);

        // Add martial weapons
        const martialGroup = document.createElement('optgroup');
        martialGroup.label = 'Martial Weapons';
        [...DND_DATA.weapons.martial.melee, ...DND_DATA.weapons.martial.ranged].forEach(weapon => {
            const option = document.createElement('option');
            option.value = weapon.name.toLowerCase();
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.type})`;
            martialGroup.appendChild(option);
        });
        select.appendChild(martialGroup);

        // Add remove button
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'button secondary';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => weaponDiv.remove();

        weaponDiv.appendChild(select);
        weaponDiv.appendChild(removeBtn);
        this.weaponsContainer.insertBefore(weaponDiv, this.addWeaponBtn);
    }

    updateProficiencies(classProficiencies) {
        if (!this.armorSelect) return;

        Array.from(this.armorSelect.options).forEach(option => {
            const armorType = option.parentElement?.label?.toLowerCase().split(' ')[0];
            option.disabled = !classProficiencies.armor.some(prof => 
                prof.toLowerCase().includes(armorType) || prof === 'All armor'
            );
        });
    }

    getSelectedEquipment() {
        return {
            armor: this.armorSelect?.value || '',
            weapons: Array.from(this.weaponsContainer?.getElementsByClassName('weapon-select') || [])
                .map(select => select.value)
                .filter(Boolean)
        };
    }

    reset() {
        if (this.armorSelect) this.armorSelect.value = '';
        if (this.weaponsContainer) {
            const selections = this.weaponsContainer.getElementsByClassName('weapon-selection');
            Array.from(selections).forEach(selection => selection.remove());
        }
    }
}