import React from 'react'
import { Box, Paper } from '@material-ui/core'
import { Image, ProjectTextContainer } from './Style'

export const GridItem = ({ image, title, description }) => {
  return (
    <Box p={2}>
      <Paper elevation={3}>
        <Image image={image} title={title} />
        <ProjectTextContainer title={title} description={description} />
      </Paper>
    </Box>
  )
}
