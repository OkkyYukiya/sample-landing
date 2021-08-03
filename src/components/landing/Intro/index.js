import React from 'react'
import { Wrapper } from './styles'
import { Header } from '../../theme/Header'
import { Product } from '../product'
import { Section2 } from '../Section2'

export const Intro = () => {
  return (
    <Wrapper>
      <Header />
      <Product />
      <Section2 />
    </Wrapper>
  )
}
