import React from 'react'
import { Grid } from '@material-ui/core'

export const GridContainer = ({ children }) => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {children}
    </Grid>
  )
}
