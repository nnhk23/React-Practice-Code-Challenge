import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import SushiWallet from '../components/SushiWallet'

const SushiContainer = ({sushis, amount, showMoreSushis, removeSushi, eatenSushi, moneyUsed, addMoney}) => {
  return (
    <Fragment>
      <div className="belt">
        {sushis.slice(amount, amount+4).map(sushi => 
          <Sushi 
            key={sushi.id}
            sushi={sushi} 
            removeSushi={removeSushi} 
            eaten={eatenSushi.includes(sushi)}
            moneyUsed={moneyUsed}
          />
        )}

        <MoreButton showMoreSushis={showMoreSushis}/>

        <SushiWallet 
          moneyUsed={moneyUsed}
          addMoney={addMoney}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer