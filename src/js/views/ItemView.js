import View from "./View.js";

class ItemView extends View {

    constructor() {
        super();
    }
    

    _generateMarkup() {
        if(this._data.edit) {
            console.log(this._data.content);
            return `
                <div class="list-item">
                    <li data-id=${this._data.id}><input type="text" value="${this._data.content}"/></li>
                    <div class="list-item-controls">
                        <button type="button" class="delete-button">Delete</button>
                        <button type="button" class="edit-button">Submit</button>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="list-item">
                    <li data-id=${this._data.id}>${this._data.content}</li>
                    <div class="list-item__controls">
                        <button type="button" class="delete-button">Delete</button>
                        <button type="button" class="edit-button">Edit</button>
                    </div>
                </div>
            `;
        }
    }
}

export default new ItemView();