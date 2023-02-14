import React from "react";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import styled from "./Nav.module.css"

export default function Nav(){
    return (
        <div className={styled.navBar}>
            <Link to="/home"> <button>Home</button> </Link>
            <Link to="/form"> <button>Form</button> </Link>
            <Link to="/About"> <button>About</button> </Link>
            <SearchBar />
        </div>
    )
}
