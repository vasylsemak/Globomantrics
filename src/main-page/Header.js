import React from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const logo = require("./globoLogo.png");


const Header = ({ setFirstCountry }) => {
    // const history = useHistory();
    const handleClick = () => {
        setFirstCountry(" ");
        // history.push("/");
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
