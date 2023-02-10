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
        <div>
            <select onChange={{/*handleOrder*/}}>
                <option value="Ascendente" >Ascendente</option>
                <option value="Descendente" >Descendente</option>
            </select>
            <select onChange={{/*handleFilter*/}}>
                <option value="Gluten Free" >Gluten Free</option>
                <option value="Female" >Female</option>
                <option value="Genderless" >Genderless</option>
                <option value="unknown" >unknown</option>
            </select>
        </div>
        <CardsConteiner />
    </>)
}