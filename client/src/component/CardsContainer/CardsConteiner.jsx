import Card from "../Card/Card";
import styled from "styled-components";
import {useSelector} from "react-redux";

const ConDiv = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  flex-wrap: wrap;
  gap: 1em;
`
const CardsConteiner = () => {

    const foods = useSelector(state => state.foods)

    return (
        <ConDiv>
            {foods.map((food, index) =>{
                // console.log("foooooddddddddddddddddd", food.diets)
                return <Card
                    key={index}
                    id={food.id}
                    title={food.title}
                    image={food.image}
                    diet={food.diet}
                />
            })}
        </ConDiv>
    )
}

export default CardsConteiner