import React from 'react'
import Header from '../Header/Header'
import PaginateItems from '../Paginate/PaginateItems'

export default function Home({ films }) {
    return (
        <>
            <Header films={films} />
            <PaginateItems films={films} />
        </>
    )
}
