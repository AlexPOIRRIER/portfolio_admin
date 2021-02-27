const popUp = (state = { toggle: false, func: null }, action) => {
  switch (action.type) {
    case "SET_POPUP":
      return {
        ...state,
        toggle: action.payload.toggle,
        func: action.payload.func,
      };
    case "RESET_POPUP":
      return action.payload;
    default:
      return state;
  }
};

export default popUp;
