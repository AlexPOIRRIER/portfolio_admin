export const setPopUp = (dispatch) => async (bool, func) => {
  if (bool && func) {
    dispatch({
      type: "SET_POPUP",
      payload: { toggle: bool, func: func },
    });
  } else {
    dispatch({
      type: "RESET_POPUP",
      payload: { toggle: false, func: null },
    });
  }
};