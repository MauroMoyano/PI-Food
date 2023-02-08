import { useSelector } from "react-redux";




export default function Detail() {

    const {foodDetail} = useSelector(state => state)
    const {image, title, diets, dishtypes, summary, steps, healthScore, id} = foodDetail

    return (<div>
        <img src={image} alt="Image no encontrada" />
        <p>Name: {title}</p>
        <p>Diets: {diets}</p>
        <p>Dish Types: {dishtypes}</p>
        <p>Summary: {summary}</p>
        <p>Steps: {steps}</p>
        <p>healthScore: {healthScore}</p>
    </div>)
}