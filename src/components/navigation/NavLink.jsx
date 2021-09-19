import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavLink = ({ to, text, sx, ...props }) => {
  return (
    <Link to={to}>
      <Typography
        sx={{
          color: 'text.white',
          ':hover': {
            boxShadow: (theme) =>
              `0 4px 2px -2px ${theme.palette.primary.main}`,
          },
          ...sx,
        }}
        variant="h6"
        {...props}
      >
        {' '}
        {text}
      </Typography>
    </Link>
  )
}
