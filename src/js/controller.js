import * as model from './model.js';

import listView from './views/ListView.js';
import sidebarView from './views/sidebarView.js';
import addItemView from './views/addItemView.js';


// DISPLAY ITEMS
const controlItemDisplay = function(day = model.state.selectedDay) {
    listView.render(model.state.items[day].items);
}

// DISPLAY SIDE-NAV
const controlSidebarDisplay = function() {
    sidebarView.render();
}

// ADD ITEM TO LIST
const addItemController = function(dataObject) {

    if(dataObject.itemEntry.trim() === '') return;

    // console.log(dataObject);
    model.addItem(dataObject);
    controlItemDisplay();
}

// EDIT ITEM
const editItemController = function(id, content = null) {
    model.toggleEdit(id, content);
    controlItemDisplay();
}

// REMOVE ITEM FROM LIST
const removeItemController = function(id) {
    model.setItems(model.state.items[model.state.selectedDay].items.filter((item) => item.id != id));
    controlItemDisplay();
}

// ITEM COMPLETED
const completeItemController = function(id) {
    model.setItemComplete(id);
    controlItemDisplay();
}

// SWITCH BETWEEN DAYS
const switchDayController = function(day) {
    model.setSelectedDay(day);
    controlItemDisplay();
    controlSideNavDisplay();
}

function init() {
    controlItemDisplay();
    controlSidebarDisplay();
    sidebarView.addHandlerDayChange(switchDayController);
    addItemView.addHandlerOnSubmit(addItemController);
    listView.addHandlerEditAndDeleteItem(editItemController, removeItemController, completeItemController);
}

init();