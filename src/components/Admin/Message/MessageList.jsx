import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MessagePreview from "./MessagePreview";

import "../../../css/Admin/Message/MessageList.css";

const MessageList = ({ allMessages }) => {
  return (
    <>
      <p>Message</p>
      <div className="message_list_container">
        {allMessages &&
          allMessages.map((message) => (
            <Link to={`message/${message.id}`}>
              <MessagePreview msg={message} />
            </Link>
          ))}
      </div>
    </>
  );
};

const mapStateToProps = ({ allMessages }) => ({
  allMessages,
});

export default connect(mapStateToProps, null)(MessageList);
