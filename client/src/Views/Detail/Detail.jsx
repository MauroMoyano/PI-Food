import {useDispatch, useSelector} from "react-redux";
import {getFoodId} from "../../Redux/actions";
import {useEffect} from "react";




export default function Detail(props) {
    const dispatch = useDispatch()
    const id = props.match.params.id
    console.log("iddddddddddddddddddddddddd",id)

    useEffect(()=> dispatch(getFoodId(id)),[])




    // const {image, title, diets, dishTypes, summary, steps, healthScore} = dispatch(getFoodId(id))
    // console.log("detailllllllllllllllllllll", title)*/
    // const {foodDetail} = useSelector(state => state)
    const {image, title, diets, dishTypes, summary, steps, healthScore} = useSelector(state=>state.foodDetail)
    return (<div>
        <img src={image} alt="Image no encontrada" />
        <p>Name: {title}</p>
        <p>Diets: {diets}</p>
        <p>Dish Types: {dishTypes}</p>
        <p>Summary: {summary}</p>
        <p>Steps: {steps}</p>
        <p>healthScore: {healthScore}</p>
    </div>)
}