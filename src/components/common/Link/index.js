import React from 'react'
import styles from './styles.module.scss'

export const Link = ({ href, icon, name }) => {
  return (
    <a className={styles.link} href={href} target="_blank" rel="noreferrer">
      <img className={styles.icon} src={icon} alt={name} />
    </a>
  )
}
