import React from "react";
import {useDispatch} from "react-redux";
import {putFoodByName, deleteState} from "../../Redux/actions";
import {Link} from "react-router-dom";

// import {useHistory} from "react-router-dom";

export default function SearchBar() {
    const dispatch = useDispatch()
    // const history = useHistory()
    const [recipeName, setRecipeName] = React.useState("")

    const handleInput = (event) => {
        setRecipeName(event.target.value)
    }
    const handleClick = (event) => {
        event.preventDefault()
        console.log("searchbar  -----------", recipeName)
        dispatch(putFoodByName(recipeName))
        setRecipeName("")
    }
    const reset = () => {
        dispatch(deleteState())
    }
    return (
        <div>
            <input type='search' value={recipeName} onChange={handleInput}/>
            <Link to="/home">
                <button type='submit' onClick={handleClick}>Search Recipe</button>
            </Link>
            <Link to="/home">
                <button onClick={reset}>Delete Search</button>
            </Link>

        </div>
    );
}