import * as actionTypes from "./types";

// const productsApi = "https://61b75f1864e4a10017d18ada.mockapi.io/api/products";

// fetch(productsApi)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (product) {
//     return product;
//   });

const initialState = {
  todoList: [
    {
      product_code: "abc12",
      product_name: "abc2",
      id: "2",
    },

    {
      product_code: "mmb",
      product_name: "ád",
      id: "4",
    },
    {
      product_code: "123",
      product_name: "123",
      id: "5",
    },
  ],
  isAdd: true,
  todoUpdated: {},
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] };
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    case actionTypes.EDIT_TODO:
      return {
        ...state,
        isAdd: false,
        todoUpdated: action.payload,
      };
    case actionTypes.UPDATE_TODO:
      const list = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...action.payload };
        }
        return todo;
      });
      return {
        ...state,
        todoList: [...list],
        isAdd: true,
      };
    default:
      return state;
  }
};

export default todoReducer;
