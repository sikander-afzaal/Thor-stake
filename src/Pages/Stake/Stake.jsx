import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import FilterModal from "../../Components/FilterModal/FilterModal";
import "./Stake.css";
function Stake() {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  return (
    <div className="stakeCont">
      <div className="stake-header">
        <h3 className="stake-links kanit">Rent</h3>
        <h3 className="stake-links kanit active-main">Stake</h3>
        <h3 className="stake-links kanit">Mint</h3>
      </div>
      <div className="row-rent-selection">
        <a href="#" className="kanit active">
          All NFTs
        </a>
        <a href="#" className="kanit">
          Staked NFTs
        </a>
        <a href="#" className="kanit">
          Unstaked NFTs
        </a>
      </div>
      <div className="bottom-stake">
        <div className="drop-menu-filter">
          <p
            className="kanit"
            onClick={() => {
              setOpenFilterModal((prev) => !prev);
            }}
          >
            Filter by <FontAwesomeIcon icon={faChevronDown} />
          </p>
          {openFilterModal && <FilterModal />}
        </div>
      </div>
    </div>
  );
}

export default Stake;
