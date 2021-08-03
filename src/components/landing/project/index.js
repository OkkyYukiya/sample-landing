import React from 'react'
import { GridContainer } from './GridContainer'
import { GridItem } from './GridItem'
import { projectData } from './data'
import { Box } from '@material-ui/core'
import { ProjectTitle } from './Style'

export const Project = () => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <ProjectTitle />
      </Box>
      <GridContainer>
        {projectData.map((data) => (
          <GridItem
            key={data.id}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </GridContainer>
    </>
  )
}
