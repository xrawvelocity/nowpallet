import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router'
import { useStore } from '../context/storeCtx'
import Flex from './structure/Flex'

export const Product = ({ product }) => {
	const { addToCart } = useStore()
	const history = useHistory()

	return (
		<Card onClick={() => history.push(`/product/${product.id}`)}>
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
						<Typography
							style={{
								overflow: 'hidden',
								maxHeight: '10rem',
							}}
							dangerouslySetInnerHTML={{
								__html: product.description,
							}}
						></Typography>
					</Flex>
					<Typography variant="h5" gutterBottom style={{ marginLeft: '4rem' }}>
						{product.price.formatted_with_symbol}
					</Typography>
				</Flex>
				<CardActions style={{ float: 'right', padding: '8px 0 16px' }}>
					<Button
						color="primary"
						variant="outlined"
						onClick={() => history.push(`/product/${product.id}`)}
					>
						View More Info
					</Button>
					<Button
						color="primary"
						variant="contained"
            sx={{color: 'text.white'}}
						onClick={() => addToCart(product.id, 1)}
					>
						Add To Cart
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	)
}
