export default function AppReducer(state, action) {
  switch (action.type) {
    case "rate": {
      console.log("Rate action");
      const item = state.find((item) => item.id === action.id);
      item.rating = action.rating;
      return [...state];
    }
    case "edit": {
      console.log("Edit action");
      const itemIndex = state.findIndex((item) => item.id === action.id);
      if (itemIndex !== -1) {
        state[itemIndex] = { ...state[itemIndex], ...action.newData };
      }
      return [...state];
    }
    case "delete": {
      console.log("Delete action");
      const newState = state.filter((item) => item.id !== action.id);
      return [...newState];
    }
    default:
      return state;
  }
}
