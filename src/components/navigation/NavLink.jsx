import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

export const NavLink = ({ to, text, sx, ...props }) => {
	const location = useLocation()
	let isSelected = location.pathname.includes(to)
	return (
		<Link to={to}>
			<Typography
				sx={{
					color: 'permanent.white1',
					boxShadow: (theme) =>
						isSelected
							? `0 4px 2px -2px ${theme.palette.primary.main}`
							: 'none',
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
