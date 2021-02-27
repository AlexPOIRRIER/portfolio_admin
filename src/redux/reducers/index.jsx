import { combineReducers } from "redux";
import { allProjects, currentProject } from "./projectReducer";
import { allLanguages, newLanguage } from "./languageReducer";
import projectLanguages from "./joinLanguageProjectReducer";
import { allMessages, newMessage } from "./messageReducer";
import popUp from "./popupReducer";

const rootReducer = combineReducers({
	allProjects,
	currentProject,
	allLanguages,
	newLanguage,
	projectLanguages,
	popUp,
	allMessages,
	newMessage,
});

export default rootReducer;
