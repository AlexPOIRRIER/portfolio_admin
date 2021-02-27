import React, { useEffect, useState } from "react";
import { Link, Redirect, useRouteMatch } from "react-router-dom";

import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { connect } from "react-redux";

import {
	getProjectLanguages,
	setProjectLanguages,
} from "../../../../redux/actions/joinLanguageProjectActions";

import {
	setCurrentProject,
	postCurrentProject,
	putCurrentProject,
	setAllProjects,
} from "../../../../redux/actions/projectActions";
import LanguagesForm from "./Languages/LanguagesForm";

import "../../../../css/Admin/Project/Forms/ProjectForm.css";
import RichTextInput from "../../../_reusable/RichTextInput";
import TextEditor from "../../../_reusable/TextEditor";

const ProjectForm = ({
	allProjects,
	allLanguages,
	projectLanguages,
	getProjectLanguages,
	setProjectLanguages,
	currentProject,
	setCurrentProject,
	postCurrentProject,
	putCurrentProject,
}) => {
	const projectId = +useRouteMatch().params.id;
	const [redirect, setRedirect] = useState(false);

	const handleChange = (event) => {
		if (currentProject) {
			setCurrentProject({
				...currentProject,
				[event.target.id]: event.target.value,
			});
		}
	};

	const handleLanguageChange = (event) => {
		if (event.target.checked) {
			setProjectLanguages([
				...projectLanguages,
				{ id: +event.target.id, name: event.target.value },
			]);
		} else {
			setProjectLanguages(
				projectLanguages.filter((lang) => lang.id !== +event.target.id)
			);
		}
	};

	const handleSubmit = async () => {
		if (projectId) {
			await putCurrentProject(projectId, currentProject, projectLanguages);
		} else {
			await postCurrentProject(currentProject, projectLanguages);
		}
		setAllProjects();
	};

	useEffect(() => {
		if (projectId) {
			setCurrentProject(
				allProjects.find((project) => project.id === projectId)
			);
		} else {
			setCurrentProject({
				...currentProject,
				name: "",
				link: "",
				duration: "",
				description: "",
				background: "",
				client_name: "",
			});
		}
		return () => setCurrentProject();
	}, [projectId]);
	// console.log(currentProject);
	return (
		<>
			<div className="admin_page_container">
				<h2>{projectId ? "Modifier un projet" : "Créer un projet"}</h2>
				<form className="form_container">
					<div
						className="project_form"
						style={{ display: "flex", flexDirection: "column" }}
					>
						<h3 className="form_subtitle">Projet :</h3>
						<label htmlFor="project_name" className="form_label">
							Nom du projet :
							<input
								type="text"
								id="name"
								name="project_name"
								className="form_input"
								value={currentProject.name}
								onChange={handleChange}
							/>
						</label>
						<label htmlFor="project_link" className="form_label">
							Lien vers le projet :
							<input
								type="text"
								id="link"
								name="project_link"
								className="form_input"
								value={currentProject.link}
								onChange={handleChange}
							/>
						</label>
						<label htmlFor="project_duration" className="form_label">
							Durée du développement :
							<input
								type="text"
								id="duration"
								name="project_duration"
								className="form_input"
								value={currentProject.duration}
								onChange={handleChange}
							/>
						</label>
						<label htmlFor="project_description" className="form_label">
							Description du projet :
							<TextEditor />
							{/* <RichTextInput /> */}
							{/* <input
								type="text"
								id="description"
								name="project_descrition"
								className="form_input"
								value={currentProject.description}
								onChange={handleChange}
							/> */}
						</label>
						<label htmlFor="background" className="form_label">
							Image de couverture :
							<input
								type="text"
								id="background"
								name="background"
								className="form_input"
								value={currentProject.background}
								onChange={handleChange}
							/>
						</label>
					</div>
					{/* <div className="language_form">
						<h3 className="form_subtitle">Technologies utilisées :</h3>
						{allLanguages.map((lang) => (
							<label htmlFor="project_language" className="checkbox_label">
								<input
									type="checkbox"
									name="project_language"
									id={lang.id}
									value={lang.name}
									checked={projectLanguages.find((e) => e.id === +lang.id)}
									onChange={handleLanguageChange}
								/>
								<button>x</button>
								<span>{lang.name}</span>
							</label>
						))} */}
					<LanguagesForm />
					{/* </div> */}
					<div className="client_form">
						<h3 className="form_subtitle">Client :</h3>
						<label htmlFor="project_client" className="form_label">
							Client :
							<input
								type="text"
								name="project_client"
								id="client_name"
								className="form_input"
								value={currentProject.client_name}
								onChange={handleChange}
							/>
						</label>
					</div>
				</form>
				<div className="form_btn_container">
					<button type="button" className="form_btn" onClick={handleSubmit}>
						Confirmer
					</button>
					<Link to="/dashboard">
						<button className="form_btn">Annuler</button>
					</Link>
					{redirect && <Redirect to="/dashboard" />}
				</div>
			</div>
		</>
	);
};

const mapStateToProps = ({
	allLanguages,
	allProjects,
	projectLanguages,
	currentProject,
}) => ({
	allLanguages,
	allProjects,
	projectLanguages,
	currentProject,
});

const mapDispatchToProps = (dispatch) => ({
	getProjectLanguages: getProjectLanguages(dispatch),
	setProjectLanguages: setProjectLanguages(dispatch),
	setCurrentProject: setCurrentProject(dispatch),
	postCurrentProject: postCurrentProject(dispatch),
	putCurrentProject: putCurrentProject(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
