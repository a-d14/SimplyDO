let selectedDay = "monday";
let isEditing = false;
const listItems = document.getElementById("list-items");
const itemEntry = document.getElementById("item-entry");
const addItem = document.getElementById("add-item");
// create list item
const createListItem = function(itemId, itemContent) {
    const insertedElement = listItems.appendChild(document.createElement("li"));
    insertedElement.className = "list-item";
    insertedElement.setAttribute("data-item-id", itemId);
    const listItemContentHolder = document.createElement("p");
    listItemContentHolder.appendChild(document.createTextNode(itemContent));
    // insertedElement.appendChild(document.createTextNode(itemContent + " "));
    insertedElement.appendChild(listItemContentHolder);
    const deleteButton = document.createElement("button");
    deleteButton.id = "del";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    insertedElement.appendChild(deleteButton);
};
// the items must appear on page load
const loadItems = function() {
    while(listItems.firstChild)listItems.removeChild(listItems.firstChild);
    const itemsOfDay = items[selectedDay].items;
    for(let i = 0; i < itemsOfDay.length; i++)createListItem(itemsOfDay[i].id, itemsOfDay[i].content);
};
// addItem on button click
addItem.addEventListener("click", function() {
    const itemValue = itemEntry.value;
    if (itemValue.length !== 0) {
        const dayOfItem = items[selectedDay];
        dayOfItem.items.push({
            id: dayOfItem.length,
            content: itemValue
        });
        createListItem(dayOfItem.length, itemValue);
        dayOfItem.length++;
        console.log(dayOfItem);
    }
});
// remove item on delete button click
document.addEventListener("click", function(e) {
    const target = e.target.closest("#del");
    if (target) {
        const listElement = target.parentElement;
        const itemId = listElement.getAttribute("data-item-id");
        items[selectedDay].items = items[selectedDay].items.filter((x)=>x.id !== parseInt(itemId));
        console.log(items[selectedDay].items);
        loadItems();
    }
});
// change list item to input element on click
document.addEventListener("click", function(e) {
    isEditing = true;
    const target = e.target.closest(".list-item p");
    if (target) {
        const editItemInput = document.createElement("input");
        editItemInput.id = "#edit-item-input";
        editItemInput.type = "text";
        editItemInput.value = target.textContent;
        target.replaceWith(editItemInput);
    }
});
// to change input back to list item after editing
document.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && isEditing) {
        const editItemInput = e.target;
        const listElement = editItemInput.closest(".list-item");
        const itemId = listElement.getAttribute("data-item-id");
        const item = items[selectedDay].items.find((x)=>x.id === parseInt(itemId));
        item.content = editItemInput.value;
        const listItemContentHolder = document.createElement("p");
        listItemContentHolder.appendChild(document.createTextNode(editItemInput.value));
        editItemInput.replaceWith(listItemContentHolder);
        isEditing = false;
        console.log(items[selectedDay]);
    }
});
// changing tabs
document.getElementById("footer").addEventListener("click", function(e) {
    const target = e.target;
    selectedDay = target.textContent;
    loadItems();
});

//# sourceMappingURL=index.62406edb.js.map
