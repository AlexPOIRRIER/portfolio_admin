import React from "react";
import { connect } from "react-redux";

import { setPopUp } from "../../redux/actions/popupActions";

import "../../css/_reusable/ConfirmCancelButtons.css";
import { CancelIcon, ConfirmIcon } from "../../utils/svg";

const ConfirmCancelButtons = ({ popUp, setPopUp }) => {
  const handleConfirm = async (event) => {
    event.preventDefault();
    await popUp.func();
    setPopUp();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setPopUp();
  };
  return (
    <div className="cc_btn_container">
      <button className="cc_btn confirm_btn" onClick={handleConfirm}>
        <ConfirmIcon cssClass="cc_icon" />
        Valider
      </button>
      <button className="cc_btn cancel_btn" onClick={handleCancel}>
        <CancelIcon cssClass="cc_icon" />
        Annuler
      </button>
    </div>
  );
};

const mapStateToProps = ({ popUp, newMessage }) => ({
  popUp,
  newMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setPopUp: setPopUp(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmCancelButtons);
