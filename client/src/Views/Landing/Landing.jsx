import {Link} from "react-router-dom";
import landing from "../../assets/landing.jpg"
import styled from "./Landing.module.css"

export default function Landing() {
    // const navigate = useNavigate()


    return (<>
        <Link to="/home">
            <div>
                <img src={landing} />
            </div>
            <button className={styled.land}>Home</button>
        </Link>
    </>)
}