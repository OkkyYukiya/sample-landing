import React from 'react'
import styles from './styles.module.scss'

export const Copyright = () => {
  const date = new Date()
  return (
    <span className={styles.root}>
      ©︎{date.getFullYear().toString()} YourProduct from YourCompany
    </span>
  )
}
