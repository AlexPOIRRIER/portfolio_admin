import axios from "axios";

export const setAllMessages = (dispatch) => async () => {
  dispatch({
    type: "GET_ALL_MESSAGES",
  });
  const result = await axios.get(`${process.env.REACT_APP_API}/messages`);
  const { data } = result;
  dispatch({
    type: "SET_ALL_MESSAGES",
    payload: data,
  });
};

export const createMessage = (dispatch) => async (newMessage) => {
  dispatch({
    type: "CREATE_MESSAGE",
  });
  const result = await axios.post(
    `${process.env.REACT_APP_API}/messages`,
    newMessage
  );
  const { data } = result;
  dispatch({
    type: "ADD_MESSAGE",
    payload: data,
  });
};

export const setNewMessage = (dispatch) => async (data) => {
  if (data) {
    dispatch({
      type: "SET_MESSAGE",
      payload: data,
    });
  }
  dispatch({
    type: "RESET_MESSAGE",
  });
};
