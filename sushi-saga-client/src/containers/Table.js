import React, { Fragment } from 'react'

const Table = ({eatenSushi, moneyUsed, moneyInWallet}) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      {console.log('from table money in wallet', moneyInWallet)}
      <h1 className="remaining">
        You have: ${moneyInWallet - moneyUsed} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(eatenSushi)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table