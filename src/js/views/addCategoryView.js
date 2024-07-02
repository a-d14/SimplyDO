import { capitalizeFirstLetter } from "../helpers";
import View from "./View";

class AddCategoryView extends View {

    _parent = document.querySelector('.main__navigation__add-category');

    constructor() {
        super();
        this._parent.addEventListener('click', (e) => {
            const targetElement = e.target.closest('.main__navigation__add-category__button');
            if(targetElement) {
                targetElement.classList.toggle('clicked');
                targetElement.previousElementSibling.classList.toggle('main__navigation__add-category--form__hidden');
            }
        });
    }

  _generateMarkup() {
    return `<form class="main__navigation__add-category--form main__navigation__add-category--form__hidden">
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
            <button type="button" class="main__navigation__add-category__button">
                <svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--small icon--plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                </svg>                          
            </button>
            Add Category
    `;
  }


  addFormSubmitHandler(handler) {
    this._parent.addEventListener("submit", (e) => {
        e.preventDefault();
        handler();
    })
  }

}

export default new AddCategoryView();