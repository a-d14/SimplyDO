import View from "./View.js";

class AddItemView extends View {
    
    _parent = document.querySelector('.main__list--add-item');

    _generateMarkup() {
        return `<input class="main__list--add-item-input input input__large" placeholder="Enter a task here..." name="itemEntry" type="text" id="item-entry" />
            <div class="main__list--add-item__controls">
                <input class="main__list--add-item-button" type="date" />
                <!-- <input class="main__list--add-item-button" type="datetime-local" /> -->
                <input class="main__list--add-item-button" type="time" />
                <select class="main__list--add-item-button">
                    <option value=default selected>Category</option>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white icon--medium" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                    </svg>  
                </select>
                <select class="main__list--add-item-button">
                    <option value=default selected>Priority</option>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white icon--medium" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                    </svg>  
                </select>
                <button type="submit" class="main__list--add-item-button main__list--add-item-button-add">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--medium icon--plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                    </svg> 
                </button>
        </div>`;
    }

    addHandlerOnSubmit(handler) {
        // this._parent.addEventListener('submit', (e) => {
        //     e.preventDefault();

        //     console.log(e.target.firstElementChild);

        //     const formData = new FormData(e.target);

        //     const dataObject = Object.fromEntries(formData.entries());

        //     handler(dataObject);

        //     e.target.firstElementChild.value = "";
        // });
    }

}

export default new AddItemView();