import CardsConteiner from "../../component/CardsContainer/CardsConteiner";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getHomeCards} from "../../Redux/actions";

export default function Home() {
    const foods = useSelector(state => state.foods)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getHomeCards())
    },[dispatch])


    return (<>
        <CardsConteiner />
    </>)
}