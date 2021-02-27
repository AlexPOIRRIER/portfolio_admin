import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import ProjectCard from "./ProjectCard";

import { AddIcon } from "../../../utils/svg";

import "../../../css/Admin/ProjectList.css";

const ProjectList = ({ allProjects }) => {
	return (
		<section className="project_page_container">
			<h2 className="list_title">Ajouter un nouveau projet</h2>
			<Link to="/createProject" className="list_container add_list">
				<AddIcon cssClass="add_icon" />
			</Link>
			<h2 className="list_title">Mes projets</h2>
			<span>(Cliquez sur un projet pour l'éditer)</span>
			{allProjects.map((project) => (
				<ProjectCard
					key={project.id}
					id={project.id}
					name={project.name}
					link={project.link}
					duration={project.duration}
					client={project.client_name}
					background={project.background}
				/>
			))}
		</section>
	);
};
const mapStateToProps = ({ allProjects }) => ({
	allProjects,
});

export default connect(mapStateToProps, null)(ProjectList);
