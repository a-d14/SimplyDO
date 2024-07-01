import * as model from './model.js';

import listView from './views/ListView.js';
import sidebarView from './views/sidebarView.js';
import addCategoryView from './views/addCategoryView.js';
import addItemView from './views/addItemView.js';

import { capitalizeFirstLetter } from './helpers.js';


// DISPLAY ITEMS
const controlItemDisplay = function() {
    listView.render(model.state.items[day].items);
}

/** SITE NAVIGATION **/

// DISPLAY
const controlSidebarDisplay = function() {

    let categories = model.state["categories"].map(cat => {return {...cat}});
    categories.push({id: -1, name: "inbox"});
    categories.push({id: -2, name: "today"});

    categories.forEach(cat => {
        cat.name = capitalizeFirstLetter(cat.name);
        if(cat.parent) {
            const parent = categories.find(c => c.id == cat.parent);
            if(parent.children) {
                parent.children.push(cat);
            } else {
                parent.children = [cat];
            }
        }
    });

    categories = categories.filter(cat => cat.parent === null);

    console.log(categories);

    sidebarView.setSelectedId(-2);
    sidebarView.render(categories);
    addCategoryView.render(model.state["categories"]);
}

// SWITCH TABS
const switchTab = function(id) {
    sidebarView.setSelectedId(+id);
    sidebarView.render();
}

// ADD A NEW TAB
const showForm = function() {
    addCategoryView.render();
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

function init() {
    // controlItemDisplay();
    controlSidebarDisplay();
    sidebarView.addHandlerCategorySelected(switchTab);
    addCategoryView.addFormDisplayHander(showForm);
    addItemView.addHandlerOnSubmit(addItemController);
    listView.addHandlerEditAndDeleteItem(editItemController, removeItemController, completeItemController);
}

init();