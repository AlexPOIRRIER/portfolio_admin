import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setPopUp } from "../../../redux/actions/popupActions";
import { deleteProject } from "../../../redux/actions/projectActions";
import { DeleteIcon } from "../../../utils/svg";
import PopUp from "../../_reusable/PopUp";

import "../../../css/Admin/Project/ProjectList.css";

const ProjectCard = ({
  id,
  name,
  link,
  duration,
  client,
  background,
  allProjects,
  deleteProject,
  popUp,
  setPopUp,
}) => {
  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API}/projects/${id}`);
    deleteProject(allProjects, id);
  };
  const handlePopUp = () => {
    setPopUp(true, handleDelete);
  };

  return (
    <div className="test">
      <Link
        to={`/editProject/${id}`}
        className="list_container"
        style={
          background
            ? { background: `url(${background})`, backgroundSize: "cover" }
            : { backgroundColor: "rgb(0,0,0,0.5)" }
        }
      >
        {name && <h3 className="project_title">{name}</h3>}
        {link && (
          <div className="list_item">
            <span className="list_name">Lien</span>
            <span className="list_value">{link}</span>
          </div>
        )}
        {duration && (
          <div className="list_item">
            <span className="list_name">Durée</span>
            <span className="list_value">{duration}</span>
          </div>
        )}
        {client && (
          <div className="list_item">
            <span className="list_name">Client</span>
            <span className="list_value">{client}</span>
          </div>
        )}
      </Link>
      <button
        type="button"
        onClick={handlePopUp}
        className="delete_project_btn"
      >
        <DeleteIcon cssClass="delete_project_icon" />
      </button>
      {popUp.toggle && <PopUp text="Supprimer le projet ?" />}
    </div>
  );
};

const mapStateToProps = ({ allProjects, popUp }) => ({
  allProjects,
  popUp,
});

const mapDispatchToProps = (dispatch) => ({
  deleteProject: deleteProject(dispatch),
  setPopUp: setPopUp(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);
