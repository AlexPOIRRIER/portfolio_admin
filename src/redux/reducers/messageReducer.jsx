export const allMessages = (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_MESSAGES":
      return action.payload;
    case "ADD_MESSAGE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const newMessage = (
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    creation_date: null,
    read: false,
    answered: false,
  },
  action
) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.payload;
    default:
      return state;
  }
};
