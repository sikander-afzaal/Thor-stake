import React, { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import FilterModal from "../../Components/FilterModal/FilterModal";
import "./Stake.css";
import heimdall from "../../Assets/nft/heimdall.png";
import freya from "../../Assets/nft/freya.png";
import odin from "../../Assets/nft/odin.png";
import thor from "../../Assets/nft/thor.png";
import NftBox from "../../Components/NftBox/NftBox";
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
              <NftBox name={"Heimdall"} img={heimdall} staked />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Heimdall"} img={heimdall} staked />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Heimdall"} img={heimdall} />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Heimdall"} img={heimdall} staked />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Heimdall"} img={heimdall} />
            </SplideSlide>
          </Splide>
          <div className="wrapper-h1">
            <h1 className="trajan">100$ASG/DAY</h1>
          </div>
        </div>
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
              <NftBox name={"Freya"} img={freya} staked />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Freya"} img={freya} staked />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Freya"} img={freya} />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Freya"} img={freya} staked />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Freya"} img={freya} />
            </SplideSlide>
          </Splide>
          <div className="wrapper-h1">
            <h1 className="trajan">200$ASG/DAY</h1>
          </div>
        </div>
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
              <NftBox name={"Thor"} img={thor} staked />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Thor"} img={thor} staked />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Thor"} img={thor} />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Thor"} img={thor} staked />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Thor"} img={thor} />
            </SplideSlide>
          </Splide>
          <div className="wrapper-h1">
            <h1 className="trajan">300$ASG/DAY</h1>
          </div>
        </div>
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
              <NftBox name={"Odin"} img={odin} staked />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Odin"} img={odin} staked />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Odin"} img={odin} />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Odin"} img={odin} staked />
            </SplideSlide>
            <SplideSlide>
              <NftBox name={"Odin"} img={odin} />
            </SplideSlide>
          </Splide>
          <div className="wrapper-h1">
            <h1 className="trajan">500$ASG/DAY</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stake;
