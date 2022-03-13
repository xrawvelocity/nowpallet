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
import { Box } from '@mui/system'

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
				borderColor: theme.palette.background.border,
			},
		},
		popper: {
			width,
			borderRadius: '0.4rem',
			...popperStyle,
		},
		paper: {},
		menuList: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'start',
			backgroundColor: theme.palette.permanent.white1,
			padding: '0',
			color: theme.palette.permanent.black3,

			'& > * > * > *': {
				fontSize: '1.5rem !important',
			},
			'& :hover': {
				backgroundColor: theme.palette.permanent.white3,
			},
			'& > *': {
				border: `1px solid ${theme.palette.permanent.white1}`,
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
				size="small"
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
				sx={{ bgcolor: 'permanent.white1', width: '100%', borderRadius: '4px' }}
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
								width: { xs: 'calc(90% - 28px)', md: '400px' },
								margin: { xs: '0 52px 0 0', md: '0 14% 0 0' },
								display: 'flex',
								justifyContent: { xs: 'center', md: 'flex-end' },
								float: { xs: 'right' },
							}}
							elevation={4}
						>
							<ClickAwayListener onClickAway={handleClose}>
								<div
									style={{
										maxHeight: '20rem',
										overflowY: 'overlay',
										overflowX: 'hidden',
										width: '100%',
									}}
								>
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
