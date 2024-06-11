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
    // console.log(dataObject);
    model.addItem(dataObject);
    controlItemDisplay();
}

// UPDATE ITEM
const updateItemController = function() {
    // ADD CLICK LISTENER ON THE LIST
    
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
    addItemView.addHandlerOnSubmit(addItemController);
}

init();