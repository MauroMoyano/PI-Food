import React from "react";
import {Link} from "react-router-dom";

export default function SearchBar() {

    // const [recipe, setRecipe] = React.useState("")
    //
    // const handleInput = (event)=>{
    //     setRecipe(event.target.value)
    // }
    return (
        <div>

            <Link to="/About">
                <button>About</button>
            </Link>

            {/*<input type='search' onChange={handleInput} />*/}
            {/*<button onClick={()=>{}}>Agregar</button>*/}
        </div>
    );
}