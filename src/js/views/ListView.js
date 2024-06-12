import View from "./View.js";
import itemView from "./ItemView.js";

class ListView extends View {
    _parent = document.querySelector('.list-items');
    
    constructor() {
        super();
    }

    addHandlerEditAndDeleteItem(handlerEdit, handlerDelete) {
        this._parent.addEventListener('click', (e) => {
            const targetElement = e.target.parentNode.getElementsByTagName('li')[0];
            const targetId = targetElement.dataset.id;
            if(e.target.className === 'delete-button') {
                handlerDelete(targetId);
            } else if(e.target.className === 'edit-button') {
                const inputElement = targetElement.getElementsByTagName('input')[0];
                handlerEdit(+targetId, inputElement ? inputElement.value : null);
            }
        });
    }

    _generateMarkup() {
        const markup = this._data.map(item => itemView.render(item, false)).join('');
        return markup;
    }

}

export default new ListView();