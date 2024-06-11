import View from "./View.js";
import itemView from "./ItemView.js";

class ListView extends View {
    _parent = document.querySelector('.list-items');
    
    constructor() {
        super();
    }

    addHandlerDeleteItem(handler) {
        
    }

    _generateMarkup() {
        const markup = this._data.map(item => itemView.render(item, false)).join('');
        return markup;
    }

}

export default new ListView();