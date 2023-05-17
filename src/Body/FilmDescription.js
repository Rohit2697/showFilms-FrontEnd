import React from 'react'

export default function FilmDescription({ film }) {

    const getGenres = (genresArr) => {
        let genStr = ''

        for (let i = 0; i < genresArr.length; i++) {
            genStr += `${genresArr[i]}.`
        }
        return genStr || "N/A"
    }
    return (



        <div>

            <div>
                <h2>{film.title}</h2>
                <h5>{film.imdbRating || Math.floor(Math.random() * 10)}⭐ </h5>
                <h5 >{getGenres(film.genres || [])}</h5>
                <p >Release Date: {film.releaseDate || new Date().toDateString()}</p>
                <p>it is {film.duration.split('PT')[1] || Math.floor(Math.random() * 200)} film and the storyline is-{film.storyline}</p>
            </div>
        </div>

    )
}
