import View from "./View.js";

class ItemView extends View {

    constructor() {
        super();
    }

    _generateMarkup(isEditing = false) {
        if(isEditing) {
            return `<input type="text" value=${this._data.content} data-id=${this._data.id} />`;
        } else {
            return `
                <div>
                    <li data-id=${this._data.id}>${this._data.content}</li>
                    <button type="button" class="delete-button">Delete</button>
                </div>
            `;
        }
    }
}

export default new ItemView();