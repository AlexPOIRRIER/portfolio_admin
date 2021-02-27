import React from "react";
import { connect } from "react-redux";

import "../../../css/Admin/Message/MessagePreview.css";

const MessagePreview = ({ msg }) => {
  const { name, email, subject, message, answered } = msg;
  return (
    <div className="message_container">
      <div className="message_header">
        <div className="header_info">
          <span className="message_info_title">Nom : </span>
          <span className="message_info_value">{name}</span>
        </div>
        <div className="header_info">
          <span className="message_info_title">Adresse e-mail : </span>
          <span className="message_info_value">{email}</span>
        </div>
      </div>
      <div className="content_container">
        <div className="message_content">
          <span className="message_info_title">Sujet : </span>
          <span className="message_info_value">{subject}</span>
        </div>
        <div className="message_content">
          <span className="message_info_title">Message : </span>
          <span className="message_info_value">{message}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ allMessages }) => ({
  allMessages,
});

export default connect(mapStateToProps, null)(MessagePreview);
