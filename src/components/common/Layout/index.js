import React from 'react'
import { Footer } from '../../theme/Footer'
import { Box } from '@material-ui/core'
import styles from './style.module.scss'

export const Layout = ({ children }) => {
  return (
    <Box className={styles.root}>
      {children}
      <Footer />
    </Box>
  )
}
