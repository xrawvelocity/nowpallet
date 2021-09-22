import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const LinkButton = ({ to, sx, children, ...props }) => {
	return (
		<Button
			sx={{
				color: 'permanent.black3',
				':hover': { bgcolor: 'permanent.orange2' },
				...sx,
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
