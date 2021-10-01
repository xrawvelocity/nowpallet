import { Collapse, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Flex from '../../components/structure/Flex'

export const Question = ({ each }) => {
	const [open, setOpen] = useState(false)
	return (
		<Flex direction="column" style={{ width: '100%' }}>
			<Paper
				onClick={() => setOpen((prev) => !prev)}
				style={{ width: '100%', padding: '1.5rem 3rem', margin: '1rem 0' }}
			>
				<Typography>{each.title}</Typography>
			</Paper>
			<Collapse in={open}>{each.answer}</Collapse>
		</Flex>
	)
}
