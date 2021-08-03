import React from 'react'
import { Wrapper } from './styles'
import { Section2Img } from './styles'
import mainImg from '../../../assets/contents/second_img.webp'
import { Box } from '@material-ui/core'
import { Section2Message } from './styles'

export const Section2 = () => {
  return (
    <Wrapper>
      <Box>
        <Section2Message
          title="Plan"
          description="Create user stories and issues, plan sprints, and distribute tasks across your software team."
        />
        <Box my={2} />
        <Section2Message
          title="Track"
          description="Prioritize and discuss your team’s work in full context with complete visibility."
        />
      </Box>
      <Section2Img image={mainImg} />
    </Wrapper>
  )
}
