import React from 'react'
import styles from './styles.module.scss'
import { useStyles } from '../../../hooks/MaterialDesign'
import { Title } from '../../common/Title'
import { Button } from '@material-ui/core'

export const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export const ProductImg = ({ image }) => (
  <img className={styles.image} src={image} alt="main" />
)

export const IButton = () => {
  const classes = useStyles()
  return <Button className={classes.root}>View Product</Button>
}

export const ProductMessage = () => {
  return (
    <div>
      <Title title="The #1 software development tool used by agile teams" />
      <IButton />
    </div>
  )
}
