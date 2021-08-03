import React from 'react'
import styles from './styles.module.scss'
import { Link } from '../../common/Link'
import { Box } from '@material-ui/core'
import { socialData } from './social'
import { Copyright } from '../../common/Copyright'

export const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Box p={1} className={styles.links}>
          {socialData.map((social) => (
            <Link
              key={social.id}
              name={social.name}
              href={social.link}
              icon={social.icon}
            />
          ))}
        </Box>
        <Copyright />
      </div>
    </div>
  )
}
