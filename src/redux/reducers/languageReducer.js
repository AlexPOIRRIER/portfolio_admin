export const allLanguages = (state = [], action) => {
	switch (action.type) {
		case "SET_ALL_LANGUAGES":
			return action.payload;
		case "ADD_NEW_LANGUAGE":
			return [...state, action.payload];
		case "LANGUAGE_DELETED":
			return state.filter(e => e.id !== action.payload)
		default:
			return state;
	}
};

export const newLanguage = (state = { name: "", logo: null }, action) => {
	switch (action.type) {
		case "SET_NEW_LANGUAGE":
			return action.payload;
		default:
			return state;
	}
};
