import React from 'react'

export default function Pagination({ totalFilms, filmPerPage, paginate }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalFilms / filmPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav aria-label="Page navigation example" className='fixed-bottom'>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(pageNo => {
                    return (<li key={pageNo} className="bg-light page-item">
                        <button onClick={(e) =>{
                              e.preventDefault()  
                            paginate(pageNo, e)}} className="page-link text-success" >{pageNo}</button>
                    </li>)
                })}
            </ul>
        </nav>
    )
}
