import { Collapse, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import React, { useState } from 'react'

import Flex from '../../components/structure/Flex'

export const Question = ({ each }) => {
	const [open, setOpen] = useState(false)
	return (
		<Flex direction="column" align="center" style={{ width: '100%' }}>
			<Box
				onClick={() => setOpen((prev) => !prev)}
				sx={{
					width: { xs: '100%', sm: '50%' },
					margin: '.5rem 0',
					border: '1px solid #11111150',
					borderRadius: '6px',
					cursor: 'pointer',
					transition: 'all .3s ease',
				}}
			>
				<Flex
					justify="space-between"
					align="center"
					sx={{
						width: '100%',
						padding: '1.5rem 2rem',
						borderBottom: open ? '1px solid #11111150' : 'none',
					}}
				>
					<Typography>{each.title}</Typography>
					<ArrowDropDownIcon
						sx={{
							transform: open ? 'rotate(-180deg)' : 'rotate(0deg)',
						}}
					/>
				</Flex>
				<Collapse
					in={open}
					sx={{
						padding: open ? '1.5rem 2rem' : '0',
					}}
				>
					{each.answer}
				</Collapse>
			</Box>
		</Flex>
	)
}
