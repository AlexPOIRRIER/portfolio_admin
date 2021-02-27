import axios from "axios";

export const setAllLanguages = (dispatch) => async () => {
	dispatch({
		type: "GET_ALL_LANGUAGES",
	});
	const result = await axios.get(`${process.env.REACT_APP_API}/languages`);
	const { data } = result;
	dispatch({
		type: "SET_ALL_LANGUAGES",
		payload: data,
	});
};

export const setNewLanguage = (dispatch) => async (languageData) => {
	dispatch({
		type: "SET_NEW_LANGUAGE",
		payload: languageData,
	});
};

export const postNewLanguage = (dispatch) => async (newLanguage) => {
	dispatch({
		type: "POST_NEW_LANGUAGE",
	});
	const result = await axios.post(
		`${process.env.REACT_APP_API}/languages`,
		newLanguage
	);
	const { data } = result;
	dispatch({
		type: "ADD_NEW_LANGUAGE",
		payload: data,
	});
};

export const deleteLanguage = (dispatch) => async (languageId) => {
	dispatch({
		type: "DELETE_LANGUAGE"
	})
	const jplResult = await axios.delete(`${process.env.REACT_APP_API}/jpl/language/${languageId}`);
	const jplStatus = jplResult.status;
	if (jplStatus === 200) {
		const result = await axios.delete(`${process.env.REACT_APP_API}/languages/${languageId}`);
		const { status } = result;

		if (status === 200) {
			dispatch({
				type: "LANGUAGE_DELETED",
				payload: languageId
			})
		}
	}
}