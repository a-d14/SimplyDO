import View from "./View.js";

class SidebarView extends View {

    _parent = document.querySelector('.select-day__items');

    _generateMarkup() {
        return ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(
            day => {
                if(day === this._data) {
                    return `<li class="select-day__item select-day__item--select">${day}</li>`;
                } else {
                    return `<li class="select-day__item">${day}</li>`
                }
            }
        ).join('');
    }

    addHandlerDayChange(handler) {
        this._parent.addEventListener('click', (e) => {
            console.log(e.target.innerText.trim());
            const targetDay = e.target.innerText;
            handler(targetDay);
        });
    }

}

export default new SidebarView();