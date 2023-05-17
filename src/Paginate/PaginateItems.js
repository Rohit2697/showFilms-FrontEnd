import React, { useState } from 'react'

import Pagination from './Pagination';
import FilmTable from '../Body/FilmTable';

export default function PaginateItems({ films }) {
    // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const [currentPage, setCurrentPage] = useState(1)
    const [filmPerPage] = useState(8)
    const indexOfLastFilm = currentPage * filmPerPage
    const indexOfFirstFilm = indexOfLastFilm - filmPerPage
    const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm)
    const paginate = (pageNo, e) => {
        e.preventDefault()
        setCurrentPage(pageNo)
    }
    return (
        <>
            <FilmTable films={currentFilms} />
            <Pagination totalFilms={films.length} filmPerPage={filmPerPage} paginate={paginate} />
        </>
    )
}
