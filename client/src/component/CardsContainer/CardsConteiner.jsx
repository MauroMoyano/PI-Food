import Card from "../Card/Card";
import styled from "styled-components";

const ConDiv = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  padding: 0 20px 4px;
`
const CardsConteiner = ({foods}) => {

    // const foods = useSelector(state => state.foods)
console.log("fods dentro de cards conteiner", foods)
    return (
        <ConDiv>
            {foods?.map((food, index) =>{
                console.log("foooooddddddddddddddddd", food.image)
                return <Card
                    key={index}
                    id={food.id}
                    title={food.title}
                    image={food.image}
                    diet={food.diet}
                    healthScore={food.healthScore}
                />
            })}
        </ConDiv>
    )
}

export default CardsConteiner