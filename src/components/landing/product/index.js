import React from 'react'
import { ProductImg, ProductMessage, Wrapper } from './styles'
import mainImg from '../../../assets/contents/main.webp'

export const Product = () => {
  return (
    <Wrapper>
      <ProductImg image={mainImg} />
      <ProductMessage />
    </Wrapper>
  )
}
