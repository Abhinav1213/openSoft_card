import React from 'react'
import Card from '../../components/card/Card'
import './home.css'
const home = () => {
  return (
    <div className='card-array'>
      {
        [...Array(14)].map((e, i) => <Card key={i} />)
      }
    </div>
  )
}

export default home
