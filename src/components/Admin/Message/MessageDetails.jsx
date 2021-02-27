import React from "react";
import { connect } from "react-redux";
import MessagePreview from "./MessagePreview";

const MessageDetails = ({ match, allMessages }) => {
  const { id } = match.params;
  return (
    <>
      <p>Message</p>
      <MessagePreview msg={allMessages.find((msg) => msg.id === +id)} />
    </>
  );
};

const mapStateToProps = ({ allMessages }) => ({
  allMessages,
});

export default connect(mapStateToProps, null)(MessageDetails);
