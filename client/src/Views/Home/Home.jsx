import CardsConteiner from "../../component/CardsContainer/CardsConteiner";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getHomeCards} from "../../Redux/actions";

export default function Home() {
    // const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getHomeCards())
    },[dispatch])


    return (<>
        <CardsConteiner />
    </>)
}