function fetchRedcuer(state = { name: "" }, action) {
  console.log(action)
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}

export default fetchRedcuer;
