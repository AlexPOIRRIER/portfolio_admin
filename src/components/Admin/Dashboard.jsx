import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setAllLanguages } from "../../redux/actions/languageActions";
import { setAllMessages } from "../../redux/actions/messageActions";
import { setAllProjects } from "../../redux/actions/projectActions";

const Dashboard = ({ setAllProjects, setAllLanguages, setAllMessages }) => {
	useEffect(() => {
		setAllProjects();
		setAllLanguages();
		setAllMessages();
		return () => setAllProjects();
	}, [setAllProjects]);
	return (
		<div className="dashboard_container">
			<div>Dernier project publié :</div>
			<div>Nouveaux messages :</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setAllProjects: setAllProjects(dispatch),
	setAllLanguages: setAllLanguages(dispatch),
	setAllMessages: setAllMessages(dispatch),
});
export default connect(null, mapDispatchToProps)(Dashboard);
