import React, { useState } from "react";
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
function Stake() {
  const { odin, thor, freya, heim } = useSelector((state) => state.filter);
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
              <SplideSlide>
                <NftBox name={"Heimdall"} img={heimdallImg} staked />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Heimdall"} img={heimdallImg} staked />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Heimdall"} img={heimdallImg} />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Heimdall"} img={heimdallImg} staked />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Heimdall"} img={heimdallImg} />
              </SplideSlide>
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
              <SplideSlide>
                <NftBox name={"Freya"} img={freyaImg} staked />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Freya"} img={freyaImg} staked />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Freya"} img={freyaImg} />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Freya"} img={freyaImg} staked />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Freya"} img={freyaImg} />
              </SplideSlide>
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
              <SplideSlide>
                <NftBox name={"Thor"} img={thorImg} staked />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Thor"} img={thorImg} staked />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Thor"} img={thorImg} />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Thor"} img={thorImg} staked />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Thor"} img={thorImg} />
              </SplideSlide>
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
              <SplideSlide>
                <NftBox name={"Odin"} img={odinImg} staked />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Odin"} img={odinImg} staked />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Odin"} img={odinImg} />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Odin"} img={odinImg} staked />
              </SplideSlide>
              <SplideSlide>
                <NftBox name={"Odin"} img={odinImg} />
              </SplideSlide>
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
