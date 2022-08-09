import React from "react";

import "./FilterModal.css";
import heimdallImg from "../../Assets/filter/heimdall.png";
import thorImg from "../../Assets/filter/thor.png";
import freyaImg from "../../Assets/filter/freya.png";
import odinImg from "../../Assets/filter/odin.png";

function FilterModal() {
  return (
    <div className="filter-modal">
      <h2 className="kanit">Filter By</h2>
      <div className="filter-row-modal">
        <h3 className="kanit">Character</h3>
        <div className="character-row">
          <div className={`${true ? "heimdall-modal" : ""}`}>
            <img src={heimdallImg} alt="" className="char" />
          </div>
          <div className={`${true ? "freya-modal" : ""}`}>
            <img src={freyaImg} alt="" className="char" />
          </div>
          <div className={`${true ? "thor-modal" : ""}`}>
            <img src={thorImg} alt="" className="char" />
          </div>
          <div className={`${true ? "odin-modal" : ""}`}>
            <img src={odinImg} alt="" className="char" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
