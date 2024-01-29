import { Typography } from '@mui/material'
import React from 'react'

const Logo = () => {
	return (
		<Typography
			sx={{
				'&:visited, &:hover, &:active, &': {
					color: 'primary.main',
					fontFamily: "'Raleway', sans-serif",
					fontWeight: '900',
					fontSize: '2.6rem',
					fontStyle: 'italic',
					textAlign: 'center',
					lineHeight: '0.9',
				},
			}}
		>
			NOW
			<br />
			PALLET
		</Typography>
	)
}
export default Logo
