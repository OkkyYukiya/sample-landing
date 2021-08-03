import React from 'react'
import styles from './styles.module.scss'
import { Box, Typography } from '@material-ui/core'

export const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export const Section2Img = ({ image }) => (
  <img className={styles.image} src={image} alt="main" />
)

export const Title = ({ title }) => (
  <Typography
    style={{ borderBottom: '7px solid rgb(97, 192, 152)', width: 80 }}
    color="textPrimary"
    variant="h4"
  >
    {title}
  </Typography>
)

export const Desctiption = ({ description }) => (
  <Typography color="textSecondary" variant="h6">
    {description}
  </Typography>
)

export const Section2Message = ({ title, description }) => {
  return (
    <Box ml={4} display="flex" flexDirection="column">
      <Title title={title} />
      <Desctiption description={description} />
    </Box>
  )
}
