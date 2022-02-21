import {action} from "../types"

const initState = [
    {
        id : "0",
        name : "book 1",
        price : 40
    }
];

export function Reducer(state = initState, action : action) {
    switch (action.type) {
        case "GET_ALL_BOOK_ACTION":
            return action.payload;
        case "ADD_BOOK_ACTION":
            const bookNew = action.payload;
            return [
                ...state,
                bookNew
            ];

        case "DELETE_BOOK_ACTION":
            const newBooks = state.filter((book, index)=>{
                return book.id != action.payload.id;
            });
            return newBooks;

        case "EDIT_BOOK_ACTION":
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};
