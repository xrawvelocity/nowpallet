import {
  ClickAwayListener,
  Fade,
  InputAdornment,
  InputLabel,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  TextField,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Search as SearchIcon } from '@mui/icons-material'
import React, { useRef, useState } from 'react'

import { InputField } from './InputField'
import Flex from '../structure/Flex'

export const DropDown = ({
  onChange = () => {},
  label,
  name,
  children,
  width = '100%',
  popperStyle,
  searchIcon = true,
  arrowIcon = true,
  placeholder,
  options = [],
  value,
  filterBy,
  renderOption,
  onSelect,
  style,
  closeOnClick = false,
}) => {
  const useStyles = makeStyles((theme) => ({
    sizing: {
      width: width,
      '& > * > *': {
        borderColor: theme.palette.text.border,
      },
    },
    popper: {
      width,
      borderRadius: '0.4rem',
      ...popperStyle,
    },
    paper: {
      border: `2px solid ${theme.palette.background.default}`,
      boxShadow: `0 .2rem .4rem ${theme.palette.background.default}`,
    },
    menuList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      backgroundColor: theme.palette.background.paper,
      padding: '0',

      '& > * > * > *': {
        fontSize: '1.5rem !important',
      },
      '& :hover': {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      },
      '& > *': {
        border: `1px solid ${theme.palette.background.default}`,
      },
    },
  }))
  const classes = useStyles()
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const onInputChange = (evt) => {
    const {
      target: { value },
    } = evt

    setSearchInput(value)
    onChange(value)
  }
  const handleClose = (event) => {
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    // 	return
    // }

    setOpen(false)
  }

  const showOptions = () => {
    return options
      .filter((each) => {
        let name = filterBy(each)
        return name.toLowerCase().includes(searchInput.toLowerCase())
      })
      .map((each) => {
        return (
          <MenuItem
            style={{ width: '100%', padding: '1rem 1.6rem' }}
            onClick={(e) => {
              onSelect(each)
              if (closeOnClick) {
                handleClose(e)
              }
            }}
          >
            {renderOption(each)}
          </MenuItem>
        )
      })
  }

  return (
    <Flex
      className={classes.sizing}
      style={{ flexDirection: 'column', ...style }}
    >
      {label && <InputLabel htmlFor="state">{label}</InputLabel>}
      <TextField
        ref={anchorRef}
        onClick={() => setOpen((prev) => !prev)}
        onChange={onInputChange}
        value={value}
        placeholder={placeholder}
        InputProps={{
          startAdornment: searchIcon && (
            <InputAdornment style={{ marginRight: '1rem' }}>
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: arrowIcon && (
            <InputAdornment position="end">
              <ArrowDropDownIcon
                style={{
                  transform: `${open ? 'rotate(-180deg)' : ''}`,
                  transition: 'all .2s ease-in-out',
                }}
              />
            </InputAdornment>
          ),
        }}
        sx={{ bgcolor: 'background.paper', width: '100%' }}
      />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom"
        role={undefined}
        transition
        disablePortal
        className={classes.popper}
        style={{
          zIndex: '100',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper
              className={classes.paper}
              sx={{
                width: { xs: '100%', sm: '400px' },
                margin: { xs: '5px 52px 0 16px', sm: '10px 5% 0 0' },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <div style={{ maxHeight: '20rem', overflowY: 'overlay' }}>
                  <MenuList className={classes.menuList}>
                    {showOptions()}
                  </MenuList>
                </div>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Flex>
  )
}
