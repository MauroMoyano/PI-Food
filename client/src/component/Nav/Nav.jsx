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
            <Link to="/home"><button>Home</button></Link>
            <Link to="/home"><button>Form</button></Link>
            <h1>Mauro h1 nav</h1>
            <SearchBar />
        </NavBar>
    )
}
