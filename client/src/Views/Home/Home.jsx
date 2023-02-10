import CardsConteiner from "../../component/CardsContainer/CardsConteiner";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {getHomeCards} from "../../Redux/actions";

export default function Home() {
    // const foods = useSelector(state => state.foods)
    const dispatch = useDispatch()
    const foods = useSelector(state=>state.foods)
    useEffect(()=>{
        if(!foods.length) dispatch(getHomeCards())
    },[foods])


    return (<>
        <CardsConteiner />
    </>)
}