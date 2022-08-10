import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStake } from "../../redux/filterReducer";

import "./StakeModal.css";
import union from "../../Assets/Union.svg";
import tick from "../../Assets/tick.svg";
import loaderGif from "../../Assets/loader.gif";
import ReCAPTCHA from "react-google-recaptcha";
import cross from "../../Assets/cross.svg";

function StakeModal({ setCloseModal, name, id, staked }) {
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(false);
  const [complete, setcomplete] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const loadHandler = () => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      setcomplete(true);
      dispatch(updateStake({ name: name, id: id }));
    }, 2000);

    setTimeout(() => {
      setcomplete(false);
      closeModal();
    }, 4000);
  };

  const closeModal = () => {
    setCloseModal(false);
  };

  return (
    <>
      <div className="overlay-modal" onClick={closeModal}></div>
      <div className="modal-rent">
        {loader ? (
          <div className="loader-div">
            <img src={union} alt="" className="union" />
            <h2 className="kanit">Please Wait</h2>
            <img src={loaderGif} alt="" className="loader" />
            <img src={union} alt="" className="union" />
          </div>
        ) : complete ? (
          <div className="complete-div">
            <img src={union} alt="" className="union" />
            <h2 className="kanit">Complete</h2>
            <img src={tick} alt="" className="loader" />
            <img src={union} alt="" className="union" />
          </div>
        ) : (
          <>
            <img onClick={closeModal} src={cross} alt="" className="cross" />
            <div className="modal-row">
              <p className="kanit">Rent</p>
              <h2 className="kanit">{name} #0001</h2>
            </div>
            <img src={union} alt="" className="union" />

            <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />
            <button onClick={() => loadHandler()} className="rent long-rent">
              {staked ? "Unstake" : "Stake"}
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default StakeModal;
