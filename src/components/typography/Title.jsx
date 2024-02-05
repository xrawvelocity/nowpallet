import { Typography } from '@mui/material'
import React from 'react'

export const Title = ({ children, sx, ...props }) => {
	return (
		<Typography
			sx={{
				textTransform: 'uppercase',
				mb: '3rem',
				fontSize: { xs: '3rem', md: '3.2rem' },
				textAlign: 'center',
				fontWeight: '600',
				...sx,
			}}
			{...props}
		>
			{children}
		</Typography>
	)
}
