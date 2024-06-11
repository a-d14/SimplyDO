export const state = {
    items: {
        "monday": {
            items: [
                { id: 1, content: "Buy groceries", completed: false },
                { id: 2, content: "Call the doctor", completed: true },
                { id: 3, content: "Attend team meeting", completed: false },
                { id: 4, content: "Go for a run", completed: false },
            ],
            length: 4
        },
        "tuesday": {
            items: [
                { id: 3, content: "Attend team meeting", completed: false }
            ],
            length: 1
        },
        "wednesday": {
            items: [
                { id: 4, content: "Go for a run", completed: false },
                { id: 5, content: "Read a book", completed: true }
            ],
            length: 2
        },
        "thursday": {
            items: [
                { id: 6, content: "Write project report", completed: false },
                { id: 7, content: "Visit the bank", completed: false }
            ],
            length: 2
        },
        "friday": {
            items: [
                { id: 8, content: "Prepare for presentation", completed: false },
                { id: 9, content: "Watch a movie", completed: false }
            ],
            length: 2
        },
        "saturday": {
            items: [
                { id: 10, content: "Clean the house", completed: true },
                { id: 11, content: "Meet friends for lunch", completed: false }
            ],
            length: 2
        },
        "sunday": {
            items: [
                { id: 12, content: "Relax and unwind", completed: false }
            ],
            length: 1
        }
    },
    selectedDay: "monday"
};

export const addItem = function(data, day = state.selectedDay) {
    const itemsOfDay = state.items[day];
    itemsOfDay.items.push({id: itemsOfDay.length + 1, content: data.itemEntry, completed: false});
    itemsOfDay.length++;
}

export const setSelectedDay = function(day) {
    state.selectedDay = day;
}