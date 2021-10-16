import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Paper,
	Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useHistory } from 'react-router'
import { useStore } from '../../../context/storeCtx'
import Flex from '../../../components/structure/Flex'

export const Product = ({ product }) => {
	const { addToCart } = useStore()
	const history = useHistory()

	console.log(product)

	return (
		<Paper
			onClick={() => history.push(`/product/${product.id}`)}
			sx={{
				height: 'auto',
				width: 'auto',
				borderRadius: '10px',
				overflow: 'hidden',
				padding: '1rem 3rem',
				cursor: 'pointer',
				color: 'text.main',
			}}
			elevation={4}
		>
			<Flex
				direction="column"
				align="center"
				sx={{
					flexDirection: { xs: 'row !important', sm: 'column !important' },
					justifyContent: {
						xs: 'space-between !important',
						sm: 'flex-start !important',
					},
				}}
			>
				<Box
					sx={{
						height: { xs: '110px', sm: '150px', md: '200px' },
						width: { xs: '30%', sm: '100%' },
						mb: { sm: '2rem' },
					}}
				>
					<img
						src={product.assets[0]?.url}
						alt={product.name}
						style={{ height: '100%', width: '100%', objectFit: 'contain' }}
					/>
				</Box>
				<Flex
					direction="column"
					sx={{
						width: { xs: '60%', sm: '100%' },
						alignItems: {
							xs: 'flex-start !important',
							sm: 'center !important',
						},
					}}
				>
					<Typography variant="h6" sx={{ textAlign: 'left' }}>
						{product.name}
					</Typography>
					<Typography variant="h6" sx={{ py: '2rem' }}>
						{product.price.formatted_with_symbol}
					</Typography>
				</Flex>
			</Flex>
		</Paper>
	)
}
