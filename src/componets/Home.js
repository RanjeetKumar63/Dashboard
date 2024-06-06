import React from "react";
import "./Home.css";
import { IoScan } from "react-icons/io5";
import { GiLongAntennaeBug } from "react-icons/gi";
import { GiInvertedDice4 } from "react-icons/gi";

const Home = () => {
  return (
    <nav className="box">
      <div className="card">
        <p>
          Total Scans
          <a href="Dashboard" className="card-n">
            <IoScan className="icons" />
            <h3>1,234</h3>
          </a>
        </p>
      </div>
      <div className="card">
        <p>
          Threate Detected
          <a href="scan" className="card-n">
            <GiLongAntennaeBug className="iconst" />
            <h3>78</h3>
          </a>
        </p>
      </div>
      <div className="card">
        <p>
          OSINT Analysis
          <a href="osint analysis" className="card-n">
            <GiInvertedDice4 className="iconstt" />
            <h3>40</h3>
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Home;
