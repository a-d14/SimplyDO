import View from "./View.js";

class DaySelectorView extends View {

    _parent = document.querySelector('.select-day');

    addHandlerDayChange(handler) {
        this._parent.addEventListener('click', (e) => {
            console.log(e.target.innerText.trim());
            const targetDay = e.target.innerText;
            handler(targetDay);
        });
    }

}

export default new DaySelectorView();