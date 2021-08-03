import React, { useState } from 'react'
import { useStyles } from '../../../hooks/MaterialDesign'
import styles from './Styles.module.scss'
import { TextField, Box, Button, Typography } from '@material-ui/core'
import { Title } from '../../common/Title'

export const EmailTextBox = () => {
  return (
    <div>
      <TextField variant="outlined" />
    </div>
  )
}

export const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export const SubmitButton = ({ text }) => {
  const classes = useStyles()
  return (
    <Button fullWidth type="submit" className={classes.root}>
      {text}
    </Button>
  )
}

export const FormBox = () => {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [detail, setDetail] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(email + detail)
  }
  return (
    <Box
      p={4}
      style={{
        width: 500,
        boxShadow: '0px 10px 10px 0px rgba(0,0,0,0.5)',
        borderRadius: 8,
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          value={name}
          label="Full Name"
          variant="outlined"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Box my={2} />
        <TextField
          fullWidth
          value={email}
          label="Email"
          variant="outlined"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Box my={2} />
        <TextField
          label="Multiline"
          fullWidth
          multiline
          rows={12}
          type="text"
          variant="outlined"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <Box my={1} />
        <SubmitButton text="submit" />
      </form>
    </Box>
  )
}

export const ContactTitle = () => {
  return (
    <Box>
      <Title title="Contact" />
    </Box>
  )
}

export const ContactMessage = () => {
  return (
    <Box style={{ height: '100%', width: '90%' }}>
      <ContactTitle />
      <Box>
        <Typography variant="h5">Have a question for us?</Typography>
        <Box my={1} />
        <Typography variant="h6" color="textSecondary">
          Your session will be monitored for training purposes to ensure we are
          providing the most useful and helpful answers. Please do not include
          personal information in the body of your question.
        </Typography>
        <Box my={3} />
        <Typography variant="h5">
          How do I report a technical problem on This App?
        </Typography>
        <Box my={1} />
        <Typography variant="h6" color="textSecondary">
          If you notice something on Instagram isn't working correctly, like a
          broken feature or a technical problem, try updating the app. If it’s
          still not working after updating, you can report it to us.
        </Typography>
      </Box>
    </Box>
  )
}
