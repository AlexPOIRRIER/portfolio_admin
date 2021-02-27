export const allProjects = (state = [], action) => {
	switch (action.type) {
		case "SET_ALL_PROJECTS":
			return action.payload;
		case "DELETE_PROJECT":
			return action.payload;
		default:
			return state;
	}
};

export const currentProject = (state = {}, action) => {
	switch (action.type) {
		case "SET_CURRENT_PROJECT":
			return action.payload;
		case "RESET_CURRENT_PROJECT":
			return action.payload;
		default:
			return state;
	}
};
