import React from 'react'
import { Layout } from '../components/common/Layout'
import { Intro } from '../components/landing/Intro'
import { Project } from '../components/landing/project'
import { Form } from '../components/landing/form'

export const Page = () => {
  return (
    <Layout>
      <Intro />
      <Project />
      <Form />
    </Layout>
  )
}
