import axios from "axios";

export const setAllProjects = (dispatch) => async () => {
	dispatch({
		type: "GET_ALL_PROJECTS",
	});
	let arrId = [];
	const result = await axios.get(`${process.env.REACT_APP_API}/projects`);
	const { data } = result;
	if (data) {
		data.map(
			(data) =>
				(arrId = axios.get(`${process.env.REACT_APP_API}/jpl/${data.id}`))
		);
	}
	dispatch({
		type: "SET_ALL_PROJECTS",
		payload: data,
	});
};

export const setCurrentProject = (dispatch) => async (currentProject) => {
	if (currentProject) {
		dispatch({
			type: "SET_CURRENT_PROJECT",
			payload: currentProject,
		});
	} else {
		dispatch({
			type: "RESET_CURRENT_PROJECT",
			payload: {},
		});
	}
};
export const postCurrentProject = (dispatch) => async (
	currentProject,
	projectLanguages
) => {
	dispatch({
		type: "POST_CURRENT_PROJECT",
	});
	const projectResult = await axios.post(
		`${process.env.REACT_APP_API}/projects`,
		{
			name: currentProject.name,
			link: currentProject.link,
			duration: currentProject.duration,
			description: currentProject.description,
			background: currentProject.background,
		}
	);
	const projectId = projectResult.data.id;
	projectLanguages.map((lang) =>
		axios.post(`${process.env.REACT_APP_API}/jpl`, {
			language_id: lang.id,
			project_id: projectId,
		})
	);
	const clientResult = await axios.post(
		`${process.env.REACT_APP_API}/clients`,
		{ name: currentProject.client_name }
	);
	const clientId = clientResult.data.id;

	if (projectId !== null && clientId !== null) {
		axios.post(`${process.env.REACT_APP_API}/jpc`, {
			project_id: projectId,
			client_id: clientId,
		});
	}
};

export const putCurrentProject = (dispatch) => async (
	projectId,
	currentProject,
	projectLanguages
) => {
	dispatch({
		type: "PUT_CURRENT_PROJECT",
	});
	await axios.put(
		`${process.env.REACT_APP_API}/projects/${projectId}`,
		{
			name: currentProject.name,
			link: currentProject.link,
			duration: currentProject.duration,
			description: currentProject.description,
			background: currentProject.background,
		}
	);
	const reset = await axios.delete(
		`${process.env.REACT_APP_API}/jpl/project/${projectId}`
	);
	if (reset.status === 200) {
		projectLanguages.map((lang) =>
			axios.post(`${process.env.REACT_APP_API}/jpc`, {
				language_id: lang.id,
				project_id: projectId,
			})
		);
	}
	await axios.put(
		`${process.env.REACT_APP_API}/clients/${currentProject.client_id}`,
		{ name: currentProject.client_name }
	);
};


export const deleteProject = (dispatch) => async (projects, projectId) => {
	dispatch({
		type: "DELETE_PROJECT",
		payload: projects.filter((e) => e.project_id !== projectId),
	});
};
