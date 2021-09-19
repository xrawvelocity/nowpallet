import { Select, Typography, Grid } from '@mui/material'
import React from 'react'
import Flex from '../structure/Flex'

export const SelectField = ({
  label,
  value,
  onChange,
  children,
  parentProps,
  ...props
}) => {
  return (
    <Grid item xs={12} sm={6}>
      <Flex direction="column" style={{ width: '100%' }} {...parentProps}>
        {label && (
          <Typography variant="body1" gutterBottom>
            {label}
          </Typography>
        )}
        <Select
          {...props}
          variant="outlined"
          value={value}
          size="small"
          fullWidth
          onChange={onChange}
        >
          {children}
        </Select>
      </Flex>
    </Grid>
  )
}
