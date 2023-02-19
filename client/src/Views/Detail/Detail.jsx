import {useDispatch, useSelector} from "react-redux";
import {getFoodId, Loading} from "../../Redux/actions";
import {useEffect} from "react";
import styles from "./Deatail.module.css"
import Loader from "../Loader/Loader";


export default function Detail(props) {
    const dispatch = useDispatch()
    const id = props.match.params.id

    const {image, title, diet, dishTypes, summary, steps, healthScore} = useSelector(state => state.foodDetail)

    let loader = useSelector(state => state.loader)
    dispatch(Loading())

    useEffect(async () => {
        await dispatch(getFoodId(id))
    }, [])

    if (loader) {
        return (<Loader/>
        )
    } else {
        return (
            <div className={styles.DivCont}>
                <img src={image} alt="Image no encontrada"/>
                <p>Name: {title}</p>
                <p>Diets: {diet}</p>
                <p>Dish Types: {dishTypes}</p>
                <p>Summary: {summary}</p>
                <p>Steps: {steps}</p>
                <p>healthScore: {healthScore}</p>
            </div>)
    }
}