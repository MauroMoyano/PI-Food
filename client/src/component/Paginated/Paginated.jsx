import CardsConteiner from "../CardsContainer/CardsConteiner";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {currentPageHandler, getHomeCards, Loading} from "../../Redux/actions";
import Loader from "../../Views/Loader/Loader";
const {useSelector} = require("react-redux");


export default function Paginated() {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.currentPage)
    const loader = useSelector(state => state.loader)
    const foods = useSelector(state => state.foods)
    const page = []

    useEffect(async () => {

        if (!foods.length) {
            await dispatch(getHomeCards())
            setTimeout(()=>{dispatch(Loading())}, 0 )

        }

    }, [currentPage, foods, loader])

    for (let i = 0; i < foods.length; i = i + 9) {
        page.push(foods.slice(i, i + 9 || foods.length))
    }

    const handlePage = (event) => {
        dispatch(currentPageHandler(parseInt(event.target.value)))
    }

    const handlePrevClick = () => {

        currentPage > 0 && dispatch(currentPageHandler(currentPage - 1))
    };

    const handleNextClick = () => {

        currentPage < page.length - 1 && dispatch(currentPageHandler(currentPage + 1))
    }

    if (loader) {
        return (<Loader/>
        )
    } else {
        return (
            <div>
                <button onClick={handlePrevClick}> Back</button>
                {
                    page.map((p, index) => <button className="btn"
                                                   onClick={handlePage}
                                                   value={index}
                                                   key={index} >{index + 1}</button>)
                }
                <button onClick={handleNextClick}> Next</button>
                <CardsConteiner foods={page[currentPage]}/>
            </div>
        )
    }

}