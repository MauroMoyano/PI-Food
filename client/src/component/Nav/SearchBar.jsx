import React from "react";
import {useDispatch} from "react-redux";
import {putFoodByName} from "../../Redux/actions";

export default function SearchBar() {
    const dispatch = useDispatch()
    const [recipeName, setRecipeName] = React.useState("")

    const handleInput = (event)=>{
        setRecipeName(event.target.value)
    }
    const handleClick =  ()=>{
            dispatch(putFoodByName(...recipeName))
        setRecipeName("")
    }
    return (
        <div>
            <input type='search' value={recipeName} onChange={handleInput} />
            <button type='submit' onClick={handleClick}>Search Recipe</button>
        </div>
    );
}