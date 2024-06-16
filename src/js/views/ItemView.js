import View from "./View.js";
import icons from 'url:../../assets/icons.svg';

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
                    <div class="list-item__controls">
                        <button type="button" class="list-item__controls--delete">
                            <svg class="delete">
                                <use href="${icons}#icon-bin"></use>
                            </svg>
                        </button>
                        <button type="button" class="list-item__controls--submit">
                            <svg class="submit">
                                <use href="${icons}#icon-plus"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="list-item">
                    <li data-id=${this._data.id}>${this._data.content}</li>
                    <div class="list-item__controls">
                        <button type="button" class="list-item__controls--complete">
                            <svg class="check">
                                <use href="${icons}#icon-checkmark2"></use>
                            </svg>
                        </button>
                        <button type="button" class="list-item__controls--edit">
                            <svg class="edit">
                                <use href="${icons}#icon-pencil"></use>
                            </svg>
                        </button>
                        <button type="button" class="list-item__controls--delete">
                            <svg class="delete">
                                <use href="${icons}#icon-bin"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
        }
    }
}

export default new ItemView();