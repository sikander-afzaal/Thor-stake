import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.svg";
function Header() {
  const [connect, setConnect] = useState(false);
  return (
    <div className="header">
      <img src={logo} className="logo" alt="" />
      <div className="header-right">
        <div className="price-thor">
          <p className="kanit">
            34.712 <span className="trajan">ASG</span>
          </p>
          <div className="rule"></div>
          <p className="kanit">
            34.712 <span className="trajan">THOR</span>
          </p>
        </div>
        {connect ? (
          <p className="address segoe">0x1051…AgD2</p>
        ) : (
          <p
            style={{ cursor: "pointer", fontWeight: "600" }}
            onClick={() => setConnect(true)}
            className="address segoe"
          >
            Connect
          </p>
        )}
      </div>
    </div>
  );
}

export default Header;
