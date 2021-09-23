import { Typography } from '@mui/material'
import React from 'react'

export const Title = ({ children, sx, ...props }) => {
	return (
		<Typography
			sx={{
				textTransform: 'uppercase',
				mb: '3rem',
				fontSize: '2.4rem',
				fontWeight: '600',
				...sx,
			}}
			{...props}
		>
			{children}
		</Typography>
	)
}
