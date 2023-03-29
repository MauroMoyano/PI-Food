import React from "react";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import styled from "./Nav.module.css"
import {useDispatch} from "react-redux";
import {CleanDetail} from "../../Redux/actions";

export default function Nav(){

    const dispatch = useDispatch()

    const handleState = ()=>{
        dispatch(CleanDetail())
    }

    return (
        <div className={styled.navBar}>
            <Link to="/home"> <button onClick={handleState}>Home</button> </Link>
            <Link to="/form"> <button>Create Recipe</button> </Link>
            <Link to="/About"> <button>About</button> </Link>
            <SearchBar />
        </div>
    )
}
