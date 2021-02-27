import React, { useState } from "react";

import { connect } from "react-redux";
import { deleteLanguage } from "../../../../../redux/actions/languageActions";
import { setProjectLanguages } from "../../../../../redux/actions/joinLanguageProjectActions";

import NewLanguageForm from "./NewLanguageForm";

import {
	AiOutlineEdit as EditIcon,
	AiOutlineDelete as DeleteIcon,
} from "react-icons/ai";

import "../../../../../css/Admin/Project/Forms/Languages/LanguagesForm.css";

const LanguagesForm = ({
	allLanguages,
	projectLanguages,
	setProjectLanguages,
	deleteLanguage,
}) => {
	const iconSize = 20;
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

	const handleLanguageDelete = (event) => {
		event.preventDefault();
		deleteLanguage(+event.currentTarget.id);
	};

	return (
		<section className="language_form">
			<h3 className="form_subtitle">Technologies utilisées :</h3>
			{allLanguages.map((lang) => (
				<label htmlFor="project_language" className="checkbox_label">
					<input
						type="checkbox"
						className="checkbox_input"
						name="project_language"
						id={lang.id}
						value={lang.name}
						checked={projectLanguages.find((e) => e.id === +lang.id)}
						onChange={handleLanguageChange}
					/>
					<img src={lang.logo} className="language_logo" alt={lang.name} />
					<span>{lang.name}</span>
					<div className="language_btn_container">
						<button className="language_btn">
							<EditIcon size={iconSize} color="grey" />
						</button>
						<button
							className="language_btn"
							id={lang.id}
							onClick={handleLanguageDelete}
						>
							<DeleteIcon size={iconSize} color="red" />
						</button>
					</div>
				</label>
			))}
			<NewLanguageForm />
		</section>
	);
};

const mapStateToProps = ({ allLanguages, projectLanguages, newLanguage }) => ({
	allLanguages,
	projectLanguages,
	newLanguage,
});

const mapDispatchToProps = (dispatch) => ({
	setProjectLanguages: setProjectLanguages(dispatch),
	deleteLanguage: deleteLanguage(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesForm);
