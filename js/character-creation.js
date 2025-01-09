// character-creation.js

class CharacterCreator {
    constructor() {
        // Modal elements
        this.modal = document.getElementById('character-modal');
        this.addCharacterBtn = document.getElementById('add-character');
        this.closeBtn = document.querySelector('.close-modal');
        this.cancelBtn = document.querySelector('.cancel-modal');
        this.form = document.getElementById('character-form');
        this.characterList = document.getElementById('character-list');

        // Bind methods
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.setupEventListeners();
        this.initializeForm();
    }

    setupEventListeners() {
        // Modal controls
        this.addCharacterBtn.addEventListener('click', this.openModal);
        this.closeBtn.addEventListener('click', this.closeModal);
        this.cancelBtn.addEventListener('click', this.closeModal);
        this.modal.addEventListener('click', this.handleOutsideClick);

        // Prevent modal content clicks from closing the modal
        this.modal.querySelector('.modal-content').addEventListener('click', e => {
            e.stopPropagation();
        });

        // Form handling
        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit);
        }

        // Add keyboard event listener for Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    initializeForm() {
        // Add your existing form initialization code here
        // (populating dropdowns, setting up ability score calculations, etc.)
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

    handleOutsideClick(event) {
        if (event.target === this.modal) {
            this.closeModal();
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        
        // Gather form data and create character
        const characterData = this.gatherFormData();
        this.createCharacterCard(characterData);
        this.closeModal();
    }

    gatherFormData() {
        // Your existing form data gathering code
        return {
            name: document.getElementById('char-name').value,
            race: document.getElementById('char-race').value,
            class: document.getElementById('char-class').value,
            level: document.getElementById('char-level').value,
            // ... other character data
        };
    }

    createCharacterCard(character) {
        // Your existing character card creation code
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const characterCreator = new CharacterCreator();
});