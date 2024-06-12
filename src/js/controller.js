import * as model from './model.js';

import listView from './views/ListView.js';
import daySelectorView from './views/daySelectorView.js';
import addItemView from './views/addItemView.js';


// DISPLAY ITEMS
const controlItemDisplay = function(day = model.state.selectedDay) {
    listView.render(model.state.items[day].items);
}

// ADD ITEM TO LIST
const addItemController = function(formData) {
    const dataObject = Object.fromEntries(formData.entries());

    if(dataObject.itemEntry.trim() === '') return;

    // console.log(dataObject);
    model.addItem(dataObject);
    controlItemDisplay();
}

const editItemController = function(id, content = null) {
    model.toggleEdit(id, content);
    controlItemDisplay();
}

// REMOVE ITEM FROM LIST
const removeItemController = function(id) {
    model.setItems(model.state.items[model.state.selectedDay].items.filter((item) => item.id != id));
    controlItemDisplay();
}

// SWITCH BETWEEN DAYS
const switchDayController = function(day) {
    model.setSelectedDay(day);
    controlItemDisplay();
}

function init() {
    controlItemDisplay();
    daySelectorView.addHandlerDayChange(switchDayController);
    addItemView.addHandlerOnSubmit(addItemController);
    listView.addHandlerEditAndDeleteItem(editItemController, removeItemController);
}

init();