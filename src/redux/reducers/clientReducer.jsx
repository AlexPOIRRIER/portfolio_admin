const client = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CLIENT':
      return action.payload;
    case 'DELETE_CLIENT':
      return action.payload;
    default:
      return state;
  }
}

export default client;