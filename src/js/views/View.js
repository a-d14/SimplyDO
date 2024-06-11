export default class View {
    _data;

    render(data, render = true) {
        this._data = data;
        const markup = this._generateMarkup();

        if(!render) return markup;

        this.clear();
        this._parent.insertAdjacentHTML('afterbegin', markup);
    }

    clear() {
        this._parent.innerHTML = '';
    }

}