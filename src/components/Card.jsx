import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
const Card = ({item}) => {
  let items = item.props
  return (
    <div className="card">
          <img src={items.img} className="cardImage" alt="Shoes" />
          <div className="cardDetails">
            <h3 className="cardTitle">{items.title}</h3>  
            <section className="cardReviews">
              <AiFillStar className="ratingStar" />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="totalReviews">4</span>
            </section>
            <section className="cardPrice">
              <div className="price">
                <del>{items.prevPrice}</del> ${items.newPrice}
              </div>
              <div className="bag">
                <BsFillBagHeartFill className="bagIcon"/>
              </div>
            </section>
          </div>
        </div>
  )
}

export default Card