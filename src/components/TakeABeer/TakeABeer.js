import React, { useCallback, useState } from 'react'
import Button from '../Button'

const TakeABeer = () => {
  const [took, takeTheBeer] = useState(false)

  const showBeer = useCallback(() => {
    takeTheBeer(true)
  }, [takeTheBeer])

  return took ? <p style={{ fontSize: '7rem' }}>🍻</p> : (
    <Button onClick={showBeer}>Thank you, grab a beer</Button>
  )
}

export default TakeABeer
