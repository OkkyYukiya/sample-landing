import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { Title } from '../../common/Title'

export const Image = ({ image, title }) => {
  return (
    <img
      src={image}
      alt={title}
      style={{ width: 220, height: 220, padding: 8, borderRadius: 8 }}
    />
  )
}

export const ProjectTitle = () => (
  <Box>
    <Title title="Project List" />
  </Box>
)

export const ProjectName = ({ projectName }) => (
  <Typography variant="h6">{projectName}</Typography>
)

export const ProjectTextContainer = ({ title, description }) => (
  <Box py={1} mb={1} style={{ width: 220, margin: '0 auto' }}>
    <Typography
      style={{ borderBottom: '3px solid grey', width: 135 }}
      variant="h6"
      color="textSecondary"
    >
      {title}
    </Typography>
    <Typography variant="body2">{description}</Typography>
  </Box>
)
