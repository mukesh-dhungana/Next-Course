const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return [...state, { id: action.payload.id, title: "", list: [] }];

    case "DELETE_NOTE":
      console.log(action.payload);
      return [...state.filter((note) => note.id !== action.payload)];

    case "ADD_TITLE":
      return [
        ...state.map((s) =>
          s.id === action.payload.id ? { ...s, title: action.payload.title } : s
        ),
      ];

    case "ADD_LIST":
      return [
        ...state.map((s) =>
          s.id === action.payload.id
            ? { ...s, list: [...s.list, action.payload.list] }
            : s
        ),
      ];

    default:
      return state;
  }
};

export default reducer;
