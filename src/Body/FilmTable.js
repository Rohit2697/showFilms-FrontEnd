import React from 'react'
import FilmCard from './FilmCard'

export default function FilmTable({ films }) {
    return (

        <div className="container">
            <div className="row">
                {films.length ? films.map((film) => {

                    return (<div className="col-auto my-3" key={film.id}>
                        <FilmCard film={film} />
                    </div>)
                }) : ''}
            </div>
        </div>
        // <FilmCard/>
    )
}
