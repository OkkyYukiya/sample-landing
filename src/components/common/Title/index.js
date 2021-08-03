import React from 'react'
import styles from './styles.module.scss'

export const Title = ({ title }) => {
  return (
    <h1 className={styles.root} variant="h4">
      {title}
    </h1>
  )
}
