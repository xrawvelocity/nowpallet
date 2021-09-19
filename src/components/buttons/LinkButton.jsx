import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const LinkButton = ({ to, children, ...props }) => {
  return (
    <Button
      sx={{
        color: 'background.default',
        ':hover': { color: 'text.darkWhite' },
      }}
      component={Link}
      to={to}
      variant="contained"
      {...props}
    >
      {children}
    </Button>
  )
}
