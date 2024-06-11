import * as model from './model.js';

import listView from './views/ListView.js';
import daySelectorView from './views/daySelectorView.js';

// DISPLAY ITEMS
const controlItemDisplay = function(day = model.data.selectedDay) {
    listView.render(model.data.items[day].items);
}

// ADD ITEM TO LIST
const addItemController = function() {

}

// UPDATE ITEM
const updateItemController = function() {

}

// REMOVE ITEM FROM LIST
const removeItemController = function() {

}

// SWITCH BETWEEN DAYS
const switchDayController = function(day) {
    model.setSelectedDay(day);
    controlItemDisplay();
}

function init() {
    controlItemDisplay();
    daySelectorView.addHandlerDayChange(switchDayController);
}

init();