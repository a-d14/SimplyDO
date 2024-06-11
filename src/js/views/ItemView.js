import View from "./View.js";

class ItemView extends View {

    constructor() {
        super();
    }

    _generateMarkup(isEditing = false) {
        if(isEditing) {
            return `<input type="text" value=${this._data.content} data-id=${this._data.id} />`;
        } else {
            return `<li data-id=${this._data.id}>${this._data.content}</li>`;
        }
    }
}

export default new ItemView();