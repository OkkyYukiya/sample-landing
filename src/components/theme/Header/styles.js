import React from 'react'
import styles from './styles.module.scss'
import MenuIcon from '@material-ui/icons/Menu'
import { Button } from '@material-ui/core'

export const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export const LogoImg = ({ image }) => {
  return <img src={image} alt="lgoo" className={styles.logo} />
}

export const Menu = () => {
  return (
    <div className={styles.menu__box}>
      <MenuIcon style={{ fontSize: 60 }} />
    </div>
  )
}

export const AuthButton = ({ name }) => {
  return <Button className={styles.button}>{name}</Button>
}
