import { InputAdornment, TextField } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import React from 'react'

export const Search = ({
  closeIcon = false,
  onClose,
  InputProps,
  ...props
}) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      size="small"
      InputProps={{
        ...InputProps,
        startAdornment: (
          <InputAdornment style={{ marginRight: '1rem' }}>
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: closeIcon && (
          <CloseIcon
            style={{ marginLeft: '2rem' }}
            onClick={onClose}
            sx={{
              color: 'background.black',
              ':hover': { cursor: 'pointer', color: 'primary.main' },
            }}
          />
        ),
      }}
    />
  )
}
