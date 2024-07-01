export default class View {
    _data;

    render(data = this._data, render = true) {
        this._data = data;
        console.log(this._data);
        const markup = this._generateMarkup();

        if(!render) return markup;

        this.clear();
        this._parent.insertAdjacentHTML('afterbegin', markup);
    }

    clear() {
        this._parent.innerHTML = '';
    }

}