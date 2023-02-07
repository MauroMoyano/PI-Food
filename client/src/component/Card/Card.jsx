import styled from "styled-components";

const CardDiv = styled.div`
border: 1px solid black;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
`

const Card= (props)=>{
    console.log("titlwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",props.title)
    return(
        <CardDiv>
            <img src={props.image} alt="Image no encontrada" />
            <p>Name: {props.title}</p>
            <p>Diets: {props.diets}</p>
        </CardDiv>
    )
}

export default Card;