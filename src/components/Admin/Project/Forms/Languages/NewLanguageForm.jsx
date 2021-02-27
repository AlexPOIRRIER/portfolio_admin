import React, { useState } from "react";

import { connect } from "react-redux";
import {
	setNewLanguage,
	postNewLanguage,
} from "../../../../../redux/actions/languageActions";

const NewLanguageForm = ({ newLanguage, setNewLanguage, postNewLanguage }) => {
	const [toggle, setToggle] = useState(false);

	const handleNewLanguage = (event) => {
		setNewLanguage({ ...newLanguage, [event.target.id]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		postNewLanguage(newLanguage);
		// setToggle(false);
	};
	console.log(newLanguage);
	return (
		<>
			{!toggle && (
				<button
					type="button"
					className="form_btn"
					onClick={() => setToggle(!toggle)}
				>
					+
				</button>
			)}
			{toggle && (
				<form className="new_languages_form" action="/" method="post" encType="multipart/form-data">
					<label htmlFor="new_language" className="form_label">
						Nom :
						<input
							type="text"
							name="new_language"
							id="name"
							className="form_input"
							value={newLanguage.name}
							onChange={handleNewLanguage}
						/>
					</label>
					<label htmlFor="logo" className="form_label">
						Logo :
						<input
							type="file"
							accept="image/*"
							id="logo"
							name="logo"
							className="form_input"
							onChange={handleNewLanguage}
						/>
					</label>
					<button type="submit" className="form_btn" onClick={handleSubmit}>
						Ajouter
					</button>
					<button
						type="button"
						className="form_btn"
						onClick={() => setToggle(!toggle)}
					>
						Annuler
					</button>
				</form>
			)}
		</>
	);
};

const mapStateToProps = ({ newLanguage }) => ({
	newLanguage,
});

const mapDispatchToProps = (dispatch) => ({
	setNewLanguage: setNewLanguage(dispatch),
	postNewLanguage: postNewLanguage(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewLanguageForm);
