import React, { Fragment } from 'react'

const Sushi = ({sushi, removeSushi, eaten, moneyUsed}) => {
  return (
    <div className="sushi">
      <div 
        id={sushi.id}
        className="plate" 
        onClick={() => { 100 - moneyUsed > sushi.price ?
          removeSushi(sushi) : alert('TOO BROKE FOR OUR SUSHI')
        }}>
        { 
          eaten ?
            null
          :
            <img alt='sushiparty' src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi