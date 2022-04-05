import "./house.css";
import { useState } from "react";
import Inquiry from "./inquiry";
import PropTypes from "prop-types";
const emailIcon = require("./Email.png");

const House = ({ house }) => {
  const[inquiry, setInquiry] = useState(false);

  const toggleInquiry = () => {
    setInquiry(!inquiry)
  }

  return (
    <>
      <div className="row mt-2">
        <h5 className="col-md-12">{house.country}</h5>
      </div>
      <div className="row">
        <h3 className="col-md-12">{house.address}</h3>
      </div>
      <div className="row">
        <div className="col-md-7">
          <img src={require("/public/images/" + house.photo + ".jpeg")} alt="House" />
        </div>
        <div className="col-md-5">
          <p className="price">${house.price}</p>
          <p>{house.description}</p>
          <img 
            src={emailIcon}
            id="pointer-img"
            alt="email-icon"
            onClick={toggleInquiry}
          />
          {inquiry && <Inquiry />}
        </div>
      </div>
    </>
  )
};

House.propTypes = {
  house: PropTypes.object.isRequired,
};


export default House;