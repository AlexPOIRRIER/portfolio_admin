export const setClient = (dispatch) => async (client) => {
  dispatch({
    type: "ADD_CLIENT",
    payload: client,
  });
};
