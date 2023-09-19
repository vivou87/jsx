import React from 'react'
import { product } from "../product";

function Image() {
  return (
    <div><img src={product.url} alt="" width="250px" /></div>
  )
}

export default Image