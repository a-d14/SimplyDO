import View from "./View.js";
import itemView from "./ItemView.js";

class ListView extends View {
    _parent = document.querySelector('.list-items');
    
    constructor() {
        super();
    }

    addHandlerEditAndDeleteItem(handlerEdit, handlerDelete) {
        this._parent.addEventListener('click', (e) => {
            console.log("onclick");
            const targetElement = e.target.closest('.list-item').getElementsByTagName('li')[0];
            const targetId = targetElement.dataset.id;
            console.log(targetId);
            console.log(e.target);
            if(e.target.closest('button').className === 'list-item__controls--delete') {
                handlerDelete(targetId);
            } else if(e.target.closest('button').className === 'list-item__controls--edit' || e.target.closest('button').className === 'list-item__controls--submit') {
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