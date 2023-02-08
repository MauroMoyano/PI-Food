import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getFoodId} from "../../Redux/actions";
import {Link} from "react-router-dom";


const CardDiv = styled.div`
  border: 1px solid black;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  background: #233428;
`

const Card = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFoodId(props.id))
    }, [])

    return (
        <CardDiv>
            <img src={props.image} alt="Image no encontrada"/>
            <Link to={`/detail/${props.id}`}>
                <p>Name: {props.title}</p>
            </Link>
            <p>Diets: {props.diets}</p>
        </CardDiv>
    )
}

export default Card;