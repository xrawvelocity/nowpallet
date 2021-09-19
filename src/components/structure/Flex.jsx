import { Box } from '@mui/system'
import React from 'react'

export default function Flex({
	children,
	direction = 'row',
	justify = 'flex-start',
	align = 'flex-start',
	spacing = 0,
	wrap,
	style,
	sx,
	...props
}) {
	return (
		<Box
			style={{
				display: 'flex',
				flexDirection: direction,
				justifyContent: justify,
				alignItems: align,
				flexWrap: wrap,
				...style,
			}}
			sx={sx}
			{...props}
		>
			{children}
		</Box>
	)
}
