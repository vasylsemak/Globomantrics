import React from "react";
import { Link } from "react-router-dom";
const logo = require("./globoLogo.png");


const Header = ({ setFirstCountry }) => {
    const handleClick = () => {
        setFirstCountry(" ")
    }

    return (
        <header className="row">
        <div className="col-md-5" onClick={handleClick}>
            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>
        </div>
        <div className="col-md-7 mt-5 subtitle">
            Providing houses all over the world
        </div>
    </header>
    )
};

export default Header;
