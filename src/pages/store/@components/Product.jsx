import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useHistory } from 'react-router'
import Flex from '../../../components/structure/Flex'

export const Product = ({ product }) => {
	const history = useHistory()

	console.log(product)

	return (
		<Paper
			onClick={() => history.push(`/product/${product.sku}`)}
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
						src={product.image}
						alt={product.title}
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
						{product.title}
					</Typography>
					<Typography variant="h6" sx={{ py: '2rem' }}>
						${product.ourPrice.toFixed(2)}
					</Typography>
				</Flex>
			</Flex>
		</Paper>
	)
}
