import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {dishTypes, orderRecipes, OrderTitle} from "../../Redux/actions";
import Paginated from "../../component/Paginated/Paginated"
import styled from "./Home.module.css"

export default function Home() {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diet)



    const handleOrder = (event) => {
        dispatch(orderRecipes(event.target.value))
    }

    const handleOrderTitle = (event) => {
        dispatch(OrderTitle(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(dishTypes(event.target.value))
    }

    return (<>

        <div className={styled.div}>
            <select onChange={handleOrderTitle}>
                <option disabled selected>Title</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handleOrder}>
                <option disabled selected>Health Score</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option disabled selected>Title</option>
                {
                    diets.map((d, index) => {
                        return <option value={d} key={index}>{d}</option>
                    })
                }
            </select>
        </div>
        <Paginated />
    </>)

}