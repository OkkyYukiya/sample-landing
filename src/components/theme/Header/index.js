import React from 'react'
import { Wrapper, LogoImg, AuthButton } from './styles'
import logo from '../../../assets/theme/logo.jpeg'
import { DrawerMenu } from './drawer'

export const Header = () => {
  return (
    <Wrapper>
      <DrawerMenu />
      <LogoImg image={logo} />
      <AuthButton name="login" />
    </Wrapper>
  )
}
