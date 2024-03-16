import React from 'react'
import './Card.css'


const Card = ({ f }) => {
  const currDate = new Date();

  const onMove = (e) => {
    return e;
  }
  const unHover = () => {
    const particular_card = document.getElementById(`${f}`);
    particular_card.style.setProperty('transform-origin', 'top');
  }
  const onHover = (onMove) => {
    let h = parseFloat(window.innerWidth);
    let val=(onMove.clientX/h)*100
    const particular_card = document.getElementById(`${f}`);
    const that_style = window.getComputedStyle(particular_card);
    let x = (parseFloat(that_style.width )/h)*100 ;
    if (x +1>= val) {
      particular_card.style.setProperty('transform-origin', 'top left');
    }
    else if (100 - val <= x+2) {
      particular_card.style.setProperty('transform-origin', 'top right');
    }
    else {
      particular_card.style.setProperty('transform-origin', 'top');
    }
    console.log(that_style.width,x,h,val);
    
  }
  return (
    <>
      <div className='cards' id={f} onMouseOver={onHover} onMouseOut={unHover} onMouseMove={onMove}>

          <div className="cards__overlay">
                <div className="card__title">Title</div>
                <div className="card__runtime">
                    {currDate.getFullYear()}-{currDate.getMonth()+1}-{currDate.getDate()}
                    <span className="card__rating"><i className="fab fa-imdb" ></i>:9.5<i className="fas fa-star" /></span>
                </div>
                <ul className='card_genre'>
                  <li className="genre">Comedy</li>
                  <li className="genre">Fantasy</li>
                  <li className="genre">Horror</li>
                </ul>
                <div className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nihil aliquam maxime!</div>
            </div>
            <img src="https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg" className='cards_img' alt="" />
          </div>
    </>
  )
}

export default Card
