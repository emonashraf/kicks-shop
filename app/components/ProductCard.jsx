import React from 'react'

export default function ProductCard() {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        {/* badge */}
        <span>New</span>
        {/* Product Image */}
      </div>

      <h6>ADIDAS 4DFWD X PARLEY RUNNING SHOES</h6>
      <button type="button">View Product - $125</button>
    </div>
  )
}
