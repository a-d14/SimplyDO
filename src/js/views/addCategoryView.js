import { capitalizeFirstLetter } from "../helpers";
import View from "./View";

class AddCategoryView extends View {

    _parent = document.querySelector('.main__navigation__add-category');

    _displayForm = false;

    constructor() {
        super();
        
    }

  _generateMarkup() {
    return `<form class="main__navigation__add-category--form ${!this._displayForm ? 'main__navigation__add-category--form__hidden' : ''}">
                <p><strong>Add Category</strong></p>
                <input class="input input__small main__navigation__add-category--form__input" type="text" placeholder="Enter Name" />
                <select class="input__small dropdown" name="" id="">
                    <option selected>Select a Category</option>
                    ${
                        this._data.map((cat) => (
                            `<option>${capitalizeFirstLetter(cat.name)}</option>`
                        ))
                    }
                </select>
                <button class="main__navigation__add-category--form__button" type="submit">Add</button>
            </form>
            <button type="button" class="main__navigation__add-category__button ${this._displayForm ? 'clicked' : ''}">
                <svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--small icon--plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                </svg>                          
            </button>
            Add Category
    `;
  }

  handleFormSubmission(event) {
    // event.preventDefault();
    console.log('submit');
  }

  toggleFormDisplay() {
    this._displayForm = !this._displayForm;
    console.log(this._displayForm);
  }

  addFormDisplayHander(handler) {
    this._parent.addEventListener('click', (e) => {
        if(e.target.tagName.toLowerCase() === 'svg' || e.target.tagName.toLowerCase() === 'path' || e.target.classList.contains('main__navigation__add-category__button')) {
            console.log(e.target);
            this.toggleFormDisplay();
            handler();
        }
    });
  }

}

export default new AddCategoryView();