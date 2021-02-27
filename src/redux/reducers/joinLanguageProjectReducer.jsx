const projectLanguages = (state = [], action) => {
  switch (action.type) {
    case "SET_PROJECT_LANGUAGES":
      return action.payload;
    case "RESET_PROJECT_LANGUAGES":
      return [];
    default:
      return state;
  }
};

export default projectLanguages;
