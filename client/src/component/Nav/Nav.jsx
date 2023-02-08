import React from "react";
import SearchBar from "./SearchBar";
import styled from 'styled-components'
import {Link} from "react-router-dom";

const NavBar = styled.div`
  display: flex;
  justify-content: end;
  border: solid rgba(172, 190, 224, 0.47);
  background: rgba(231, 241, 239, 0.3);
  width: 90%;
  height: 40px;`

export default function Nav(){
    return (
        <NavBar>
            <Link to="/home"> <button>Home</button> </Link>
            <Link to="/form"> <button>Form</button> </Link>
            <Link to="/About"> <button>About</button> </Link>
            <SearchBar />
        </NavBar>
    )
}
