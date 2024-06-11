import View from "./View.js";

class AddItemView extends View {
    
    _parent = document.querySelector('.add-item');

    addHandlerOnSubmit(handler) {
        this._parent.addEventListener('submit', (e) => {
            e.preventDefault();
            handler(new FormData(e.target));
        });
    }

}

export default new AddItemView();