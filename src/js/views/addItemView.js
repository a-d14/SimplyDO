import View from "./View.js";

class AddItemView extends View {
    
    _parent = document.querySelector('.add-item');

    addHandlerOnSubmit(handler) {
        this._parent.addEventListener('submit', (e) => {
            e.preventDefault();

            console.log(e.target.firstElementChild);

            const formData = new FormData(e.target);

            const dataObject = Object.fromEntries(formData.entries());

            handler(dataObject);

            e.target.firstElementChild.value = "";
        });
    }

}

export default new AddItemView();