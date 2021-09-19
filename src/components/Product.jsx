import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import React from 'react'
import { useStore } from '../context/storeCtx'
import Flex from './structure/Flex'

export const Product = ({ product }) => {
	const { addToCart } = useStore()

	return (
		<Card>
			<CardContent style={{ padding: '1rem 2rem' }}>
				<CardMedia
					image={product.assets[0]?.url}
					title={product.name}
					style={{ height: '15rem' }}
				/>
				<Flex
					justify="space-between"
					style={{
						width: '100%',
						padding: '1rem 0',
						minHeight: '10rem',
					}}
				>
					<Flex direction="column">
						<Typography variant="h5" gutterBottom>
							{product.name}
						</Typography>
						<div dangerouslySetInnerHTML={{ __html: product.description }} />
					</Flex>
					<Typography variant="h5" gutterBottom>
						{product.price.formatted_with_symbol}
					</Typography>
				</Flex>
				<CardActions style={{ float: 'right', padding: '8px 0 16px' }}>
					<Button
						color="primary"
						variant="outlined"
						onClick={() => addToCart(product.id, 1)}
					>
						Add To Cart
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	)
}
