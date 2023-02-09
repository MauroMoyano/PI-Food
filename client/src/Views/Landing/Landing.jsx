import {Link} from "react-router-dom";


export default function Landing() {
    // const navigate = useNavigate()


    return (<>
        <h1>landing</h1>
        <Link to="/home">
            <button>Home</button>
        </Link>
    </>)
}