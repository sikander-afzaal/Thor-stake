import React, { useEffect, useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useSelector } from "react-redux/es/hooks/useSelector";

import FilterModal from "../../Components/FilterModal/FilterModal";
import "./Stake.css";
import heimdallImg from "../../Assets/nft/heimdall.png";
import freyaImg from "../../Assets/nft/freya.png";
import odinImg from "../../Assets/nft/odin.png";
import thorImg from "../../Assets/nft/thor.png";
import NftBox from "../../Components/NftBox/NftBox";
import StakeModal from "../../Components/StakeModal/StakeModal";
function Stake() {
  const { odin, thor, freya, heim, nft } = useSelector((state) => state.filter);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [stakedNft, setStakedNft] = useState("All");
  const [filteredArray, setFilteredArray] = useState(nft);
  const [modal, setModal] = useState(false); //state to update modal visibility
  const [values, setValues] = useState({ name: "", staked: "", id: "" }); //setting values of the box that is being stakeds
  useEffect(() => {
    const copy = { ...nft };
    for (let [key, value] of Object.entries(nft)) {
      //looping through the array of nfts to check and filter out the desired NFTS
      copy[key] = value.filter((elem) => {
        if (stakedNft === "All") {
          return elem;
        } else if (stakedNft === "Staked") {
          return elem.staked === true;
        } else if (stakedNft === "Unstaked") {
          return elem.staked === false;
        }
        return elem;
      });
    }
    setFilteredArray(copy);
  }, [stakedNft, nft]);

  return (
    <div className="stakeCont">
      {modal && <StakeModal setCloseModal={setModal} {...values} />}
      <div className="stake-header">
        <h3 className="stake-links kanit">Rent</h3>
        <h3 className="stake-links kanit active-main">Stake</h3>
        <h3 className="stake-links kanit">Mint</h3>
      </div>
      <div className="row-rent-selection">
        <p
          onClick={() => setStakedNft("All")}
          className={`kanit ${stakedNft === "All" && "active"}`}
        >
          All NFTs
        </p>
        <p
          onClick={() => setStakedNft("Staked")}
          className={`kanit ${stakedNft === "Staked" && "active"}`}
        >
          Staked NFTs
        </p>
        <p
          onClick={() => setStakedNft("Unstaked")}
          className={`kanit ${stakedNft === "Unstaked" && "active"}`}
        >
          Unstaked NFTs
        </p>
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
        {heim && (
          <div className="slider-row heimdall-row">
            <div className="wrapper-h1">
              <h1 className="trajan">HEIMDALL</h1>
            </div>
            <Splide
              options={{
                rewind: true,
                gap: "1rem",
                type: "loop",
                perMove: 1,
                width: "85%",
                perPage: 3,
                drag: true,
                pagination: false,
                breakpoints: {
                  974: {
                    perPage: 2,
                    width: "80%",
                  },
                  700: {
                    perPage: 1,
                  },
                  580: {
                    width: "100%",
                  },
                },
              }}
            >
              {filteredArray.heimNft.map((elem, idx) => {
                return (
                  <SplideSlide key={"heim" + idx}>
                    <NftBox
                      setValues={setValues}
                      setModal={setModal}
                      img={heimdallImg}
                      {...elem}
                    />
                  </SplideSlide>
                );
              })}
            </Splide>
            <div className="wrapper-h1">
              <h1 className="trajan">100$ASG/DAY</h1>
            </div>
          </div>
        )}
        {freya && (
          <div className="slider-row freya-row">
            <div className="wrapper-h1">
              <h1 className="trajan">Freya</h1>
            </div>
            <Splide
              options={{
                rewind: true,
                gap: "1rem",
                type: "loop",
                perMove: 1,
                width: "85%",
                drag: true,
                perPage: 3,
                pagination: false,
                breakpoints: {
                  974: {
                    perPage: 2,
                    width: "80%",
                  },
                  700: {
                    perPage: 1,
                  },
                  580: {
                    width: "100%",
                  },
                },
              }}
            >
              {filteredArray.freyaNft.map((elem, idx) => {
                return (
                  <SplideSlide key={"freya" + idx}>
                    <NftBox
                      setValues={setValues}
                      setModal={setModal}
                      img={freyaImg}
                      {...elem}
                    />
                  </SplideSlide>
                );
              })}
            </Splide>
            <div className="wrapper-h1">
              <h1 className="trajan">200$ASG/DAY</h1>
            </div>
          </div>
        )}
        {thor && (
          <div className="slider-row thor-row">
            <div className="wrapper-h1">
              <h1 className="trajan">Thor</h1>
            </div>
            <Splide
              options={{
                rewind: true,
                gap: "1rem",
                drag: true,
                type: "loop",
                perMove: 1,
                width: "85%",
                perPage: 3,
                pagination: false,
                breakpoints: {
                  974: {
                    perPage: 2,
                    width: "80%",
                  },
                  700: {
                    perPage: 1,
                  },
                  580: {
                    width: "100%",
                  },
                },
              }}
            >
              {filteredArray.thorNft.map((elem, idx) => {
                return (
                  <SplideSlide key={"thor" + idx}>
                    <NftBox
                      setValues={setValues}
                      setModal={setModal}
                      img={thorImg}
                      {...elem}
                    />
                  </SplideSlide>
                );
              })}
            </Splide>
            <div className="wrapper-h1">
              <h1 className="trajan">300$ASG/DAY</h1>
            </div>
          </div>
        )}
        {odin && (
          <div className="slider-row odin-row">
            <div className="wrapper-h1">
              <h1 className="trajan">Odin</h1>
            </div>
            <Splide
              options={{
                rewind: true,
                gap: "1rem",
                type: "loop",
                perMove: 1,
                drag: true,
                width: "85%",
                perPage: 3,
                pagination: false,
                breakpoints: {
                  974: {
                    perPage: 2,
                    width: "80%",
                  },
                  700: {
                    perPage: 1,
                  },
                  580: {
                    width: "100%",
                  },
                },
              }}
            >
              {filteredArray.odinNft.map((elem, idx) => {
                return (
                  <SplideSlide key={"odin" + idx}>
                    <NftBox
                      setValues={setValues}
                      setModal={setModal}
                      img={odinImg}
                      {...elem}
                    />
                  </SplideSlide>
                );
              })}
            </Splide>
            <div className="wrapper-h1">
              <h1 className="trajan">500$ASG/DAY</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Stake;
