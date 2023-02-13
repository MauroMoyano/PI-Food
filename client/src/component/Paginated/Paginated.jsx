import CardsConteiner from "../CardsContainer/CardsConteiner";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {currentPageHandler, getHomeCards} from "../../Redux/actions";
const {useSelector} = require("react-redux");

export default function Paginated() {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.currentPage)
    const foods = useSelector(state => state.foods)
    const page = []

    useEffect(() => {
        if (!foods.length) dispatch(getHomeCards())
    }, [currentPage,foods])

    // foods.sort()
    for (let i = 0; i < foods.length; i = i + 9) {
        page.push(foods.slice(i, i + 9 || foods.length))
        // console.log("pageeeeeeeeeeeeeeeeeeeeeee", page)
    }

    console.log(page, "foodsssssssssssssssssssssssssssss en paginado")
    const handlePage = (event)=>{
        dispatch(currentPageHandler(event.target.value))
    }

    const handlePrevClick = () => {

        currentPage > 0 && dispatch(currentPageHandler(currentPage - 1))
    };

    const handleNextClick = () => {

        currentPage < page.length -1 && dispatch(currentPageHandler(currentPage + 1))
    }

    return (
        <div>
            <button onClick={handlePrevClick}> Back </button>
            {
                page.map((p, index)=> <button className="btn" onClick={handlePage} value={index}>{index + 1 }</button>)
            }
            <button onClick={handleNextClick}> Next </button>
            <CardsConteiner foods={page[currentPage]} />
        </div>
    )
}


/*
import React, { useState } from "react";

const Pagination = ({ itemsPerPage, items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(items.length / itemsPerPage);

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    return (
        <div>
            <ul>
                {currentItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button disabled={currentPage === 1} onClick={handlePrevClick}>
                Prev
            </button>
            <button disabled={currentPage === maxPage} onClick={handleNextClick}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
*/
