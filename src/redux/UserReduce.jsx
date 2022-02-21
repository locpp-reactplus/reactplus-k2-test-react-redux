const initState = {
  ListUser: [],
  Update: false,
};

const userReduce = (state = initState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        ListUser: action.payload,
      };
    case "ADD_USER":
      return {
        ...state,
        ListUser: [...state.ListUser, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        ListUser: [...state.ListUser].filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "UPDATE":
      return {
        ...state,
        ListUser: state.ListUser.map((item) => {
          if (item.id === action.payload.id) {
            item.name = action.payload.name;
            item.fullName = action.payload.fullName;
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default userReduce;
