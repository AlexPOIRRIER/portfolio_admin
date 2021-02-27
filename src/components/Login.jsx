import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import "../css/LogIn.css";

const Login = () => {
	const [redirect, setRedirect] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = async () => {
		const result = await axios.post(
			`${process.env.REACT_APP_API}/admins/login`,
			formData
		);
		const { status } = result;

		if (status === 200) {
			setRedirect(true);
		}
	};

	return (
		<>
			<form className="login_container">
				<label htmlFor="email">
					E-mail :
					<input
						type="email"
						name="email"
						className="form_input"
						value={formData.email}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="password">
					Password :
					<input
						type="password"
						name="password"
						className="form_input"
						value={formData.password}
						onChange={handleChange}
					/>
				</label>
				<button type="button" onClick={handleSubmit}>
					Submit
				</button>
			</form>
			{redirect && <Redirect to="/dashboard" />}
		</>
	);
};

export default Login;
