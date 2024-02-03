import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useHistory } from 'react-router'
import Flex from '../../../components/structure/Flex'

export const Product = ({ product }) => {
	const history = useHistory()

	return (
		<Paper
			onClick={() => history.push(`/product/${product.sku}`)}
			sx={{
				height: '350px',
				width: 'auto',
				borderRadius: '10px',
				overflow: 'hidden',
				padding: '1rem 3rem',
				cursor: 'pointer',
				color: 'text.main',
				transition: 'all 0.2s ease-in-out',

				'&:hover': {
					transform: 'scale3d(1.05, 1.05, 1)',
				},
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
						{product.title.length > 48
							? `${product.title.slice(0, 48)}...`
							: product.title}
					</Typography>
				</Flex>
			</Flex>
		</Paper>
	)
}
