export const state = {

    "categories": [
        {id: 1, name: "personal", numberOfItems: 10, parent: null},
        {id: 2, name: "work", numberOfItems: 3, parent: null},
        {id: 3, name: "hobbies", numberOfItems: 9, parent: null},
        {id: 4, name: "home", numberOfItems: 4, parent: 1},
        {id: 5, name: "finances", numberOfItems: 3, parent: 1},
        {id: 6, name: "family", numberOfItems: 3, parent: 1},
        {id: 7, name: "guitar", numberOfItems: 3, parent: 3},
        {id: 8, name: "painting", numberOfItems: 3, parent: 3},
        {id: 9, name: "gaming", numberOfItems: 3, parent: 3}
    ],

    items: [
        { id: 1, content: "Buy groceries", edit: false, completed: false, date: new Date(), category: 4 },
        { id: 2, content: "Paint the living room wall", edit: false, completed: false, date: new Date(), category: 4 },
        { id: 3, content: "Do the laundry", edit: false, completed: false, date: null, category: 4 },
        { id: 4, content: "Clean the garage", edit: false, completed: false, date: null, category: 4 },
        { id: 5, content: "File taxes", edit: false, completed: false, date: new Date(), category: 5 },
        { id: 6, content: "Sell XYZ stock", edit: false, completed: false, date: new Date(), category: 5 },
        { id: 7, content: "Buy XYZ crypto", edit: false, completed: false, date: null, category: 5 },
        { id: 8, content: "Dinner with family", edit: false, completed: false, date: new Date(), category: 6 },
        { id: 9, content: "Build the lego set with the kids", edit: false, completed: false, date: new Date(), category: 6 },
        { id: 10, content: "Buy the christmas presents", edit: false, completed: false, date: null, category: 6 },
        { id: 11, content: "Set goals for the quarter with the team", edit: false, completed: false, date: new Date(), category: 2 },
        { id: 12, content: "Decide on appraisals for the high performers", edit: false, completed: false, date: new Date(), category: 2 },
        { id: 13, content: "Organize the yearly office getaway", edit: false, completed: false, date: null, category: 2 },
        { id: 14, content: "Learn the A minor pentatonic scale", edit: false, completed: false, date: new Date(), category: 7 },
        { id: 15, content: "Learn to read sheet notation", edit: false, completed: false, date: new Date(), category: 7 },
        { id: 16, content: "Learn to play Smells like Teen Spirit", edit: false, completed: false, date: null, category: 7 },
        { id: 17, content: "Learn the basics of brush strokes", edit: false, completed: false, date: new Date(), category: 8 },
        { id: 18, content: "Learn to make urban sketches", edit: false, completed: false, date: new Date(), category: 8 },
        { id: 19, content: "Finish the bob ross follow along painting", edit: false, completed: false, date: null, category: 8 },
        { id: 20, content: "Learn the Jiggle Peek", edit: false, completed: false, date: new Date(), category: 9 },
        { id: 21, content: "Learn how to play Sage", edit: false, completed: false, date: new Date(), category: 9 },
        { id: 22, content: "Reach Platinum 3", edit: false, completed: false, date: null, category: 9 }
    ]
}