import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useHistory } from 'react-router'
import { useStore } from '../context/storeCtx'
import Flex from './structure/Flex'

export const Product = ({ product }) => {
	const { addToCart } = useStore()
	const history = useHistory()

	console.log(product)

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				bgcolor: 'background.black',
				padding: '4rem',
				color: 'text.white',
			}}
		>
			<Box sx={{ height: '20rem', width: '20rem' }}>
				<img
					src={product.assets[0]?.url}
					alt={product.name}
					style={{ height: '100%', width: '100%' }}
				/>
			</Box>
		</Box>
	)
}
