import styled from "styled-components";
import {Link} from "react-router-dom";
import styles from "./Card.module.css"


const CardDiv = styled.div`

  width: 30%;
  //height: fit-content;
  //border: solid black 3px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(114, 117, 122, 0.71);

  img {
    border-radius: 30px;
    margin: 15px;
    display: flex;
    width: 300px;
    height: 240px;
  }

  :hover {
    transition: 1s;
    background: rgba(255, 255, 255, 0.16);

    img {
      transition: 1s;
      width: 390px;
      height: 312px;
      border-radius: 250px;
      filter: drop-shadow(0 0 50px #7f9440);
    }
  }
`
const NameP = styled.p`
  color: rgb(0, 0, 0);
  font-style: italic;
  width: 350px;
  font-size: 1.5em;
  text-shadow: 6px 4px 5px rgba(0, 0, 0, 0.43);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const DietP = styled.p`
  color: rgb(0, 0, 0);
  font-style: italic;
  width: 350px;
  font-size: 1.2em;
  text-shadow: 6px 4px 5px rgba(0, 0, 0, 0.43);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Card = (props) => {

    return (
        <CardDiv>
            <img src={props.image} alt="Image no encontrada"/>
            <div className={styles.hscore}>
                <NameP>{props.healthScore}</NameP>
            </div>
                <Link to={`/detail/${props.id}`}>
                    <NameP>Name: {props.title}</NameP>
                </Link>
            <DietP>Diets: {props.diet} </DietP>

        </CardDiv>
    )
}

export default Card;