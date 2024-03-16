import React from 'react'
import './MovieList.css'
import Card from '../card/Card'

const MovieList = () => {
  return (
      <div className='card-array'>
        {
        [...Array(14)].map((e, i) =>{
            return <Card f={i} />
        })
      }
    </div>
  )
}

export default MovieList
