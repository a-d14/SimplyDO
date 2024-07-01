// export const state = {
//     categories: {
//     },
//     items: {
//         "monday": {
//             items: [
//                 { id: 1, content: "Buy groceries", edit: false, completed: false },
//                 { id: 2, content: "Call the doctor", edit: false, completed: false },
//                 { id: 3, content: "Attend team meeting", edit: false, completed: false },
//                 { id: 4, content: "Go for a run", edit: false, completed: false },
//             ],
//             length: 4
//         },
//         "tuesday": {
//             items: [
//                 { id: 3, content: "Attend team meeting", edit: false, completed: false }
//             ],
//             length: 1
//         },
//         "wednesday": {
//             items: [
//                 { id: 4, content: "Go for a run", edit: false, completed: false },
//                 { id: 5, content: "Read a book", edit: false, completed: false }
//             ],
//             length: 2
//         },
//         "thursday": {
//             items: [
//                 { id: 6, content: "Write project report", edit: false, completed: false },
//                 { id: 7, content: "Visit the bank", edit: false, completed: false }
//             ],
//             length: 2
//         },
//         "friday": {
//             items: [
//                 { id: 8, content: "Prepare for presentation", edit: false, completed: false },
//                 { id: 9, content: "Watch a movie", edit: false, completed: false }
//             ],
//             length: 2
//         },
//         "saturday": {
//             items: [
//                 { id: 10, content: "Clean the house", edit: false, completed: false },
//                 { id: 11, content: "Meet friends for lunch", edit: false, completed: false }
//             ],
//             length: 2
//         },
//         "sunday": {
//             items: [
//                 { id: 12, content: "Relax and unwind", edit: false, completed: false }
//             ],
//             length: 1
//         }
//     },
//     selectedDay: "monday"
// };

// export const setItems = function(items) {
//     state.items[state.selectedDay].items = items;
// }

// export const addItem = function(data, day = state.selectedDay) {
//     const itemsOfDay = state.items[day];
//     itemsOfDay.items.push({id: itemsOfDay.length + 1, content: data.itemEntry.trim(), edit: false});
//     itemsOfDay.length++;
//     console.log(state.items[day]);
// }

// export const setSelectedDay = function(day) {
//     state.selectedDay = day;
// }

// export const toggleEdit = function(id, content= null) {

//     if(content != null)
//         state.items[state.selectedDay].items.find(item => item.id === id).content = content;

//     state.items[state.selectedDay].items.find(item => item.id === id).edit = 
//         !state.items[state.selectedDay].items.find(item => item.id === id).edit;
// }

// export const setItemComplete = function(id) {
//     state.items[state.selectedDay].items.find((item) => item.id === id).completed = 
//         !state.items[state.selectedDay].items.find((item) => item.id === id).completed;
    
//     console.log(state.items[state.selectedDay].items.find((item) => item.id === id));
// }