import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { setAllLanguages } from "../../../redux/actions/languageActions";
import { setAllMessages } from "../../../redux/actions/messageActions";
import { setAllProjects } from "../../../redux/actions/projectActions";

import {
	AiFillFolder as CloseFolderIcon,
	AiFillFolderOpen as OpenFolderIcon,
} from "react-icons/ai";

import { IoIosGlobe as GlobeIcon } from "react-icons/io";
import { MdDashboard as DashboardIcon } from "react-icons/md";
import { GrMail as MessageIcon } from "react-icons/gr";
import { BsPersonLinesFill as InfoIcon } from "react-icons/bs";

import "../../../css/Admin/Navigation/SideBar.css";

const SideBar = ({ setAllProjects, setAllLanguages, setAllMessages }) => {
	const title = "PORTFOLIO";
	const subtitle = "Admin";
	const icon = {
		size: 40,
		style: {
			margin: ".5rem",
		},
	};

	useEffect(() => {
		setAllProjects();
		setAllLanguages();
		setAllMessages();
		return () => setAllProjects();
	}, [setAllProjects]);

	return (
		<header className="header_container">
			<div className="header_title_container">
				<h1 className="header_title">{title}</h1>
				<h2 className="header_subtitle">{subtitle}</h2>
			</div>
			<nav className="side_bar_container">
				<Link to="/" className="side_bar_btn">
					<GlobeIcon size={icon.size} style={icon.style} />
					Voir le site
				</Link>
				<Link to="/dashboard" className="side_bar_btn">
					<DashboardIcon size={icon.size} style={icon.style} />
					Dashboard
				</Link>
				<Link to="/projects" className="side_bar_btn">
					<OpenFolderIcon size={icon.size} style={icon.style} />
					Projets
				</Link>
				<Link to="/messages" className="side_bar_btn">
					<MessageIcon size={icon.size} style={icon.style} />
					Messages
				</Link>
				<Link to="/contact" className="side_bar_btn">
					<InfoIcon size={icon.size} style={icon.style} />
					Informations
				</Link>
			</nav>
		</header>
	);
};
const mapDispatchToProps = (dispatch) => ({
	setAllProjects: setAllProjects(dispatch),
	setAllLanguages: setAllLanguages(dispatch),
	setAllMessages: setAllMessages(dispatch),
});
export default connect(null, mapDispatchToProps)(SideBar);
