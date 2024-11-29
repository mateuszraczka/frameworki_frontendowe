export default function AppReducer(state, action) {
  switch (action.type) {
    case "rate": {
      console.log("Rate action");
      return state.map((item) =>
        item.id === action.id
          ? { ...item, rating: action.rating }
          : item
      );
    }
    case "edit": {
      console.log("Edit action");
      return state.map((item) =>
        item.id === action.id
          ? { ...item, ...action.newData }
          : item
      );
    }
    case "delete": {
      console.log("Delete action");
      return state.filter((item) => item.id !== action.id);
    }
    case "add": {
      console.log("Add action");
      return [...state, action.data];
    }
    default:
      return state;
  }
}
