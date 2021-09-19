import { Button, CircularProgress, Paper, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router'
import Flex from '../../components/structure/Flex'
import { useStore } from '../../context/storeCtx'

export const ProductDetail = () => {
	const { products, addToCart } = useStore()
	const { id } = useParams()

	const product = products.filter((each) => each.id === id)[0]

	console.log(product)

	return (
		<Paper
			style={{
				width: '100%',
				padding: '4rem',
				marginTop: '4rem',
				height: 'auto',
			}}
		>
			{product ? (
				<Flex justify="space-between" style={{ width: '100%', height: '100%' }}>
					<img
						src={product.assets[0]?.url}
						alt="product image"
						style={{ height: '20rem', width: '20rem' }}
					/>
					<Flex
						direction="column"
						align="flex-end"
						justify="space-between"
						style={{ width: '50%', height: '100%' }}
					>
						<Typography
							style={{
								fontSize: '2.2rem',
								textTransform: 'uppercase',
								fontWeight: '400',
							}}
						>
							{product.name}
						</Typography>
						<Typography style={{ fontSize: '1.8rem' }}>
							{product.price.formatted_with_symbol}
						</Typography>
						<Button
							color="primary"
							variant="outlined"
							onClick={() => addToCart(product.id, 1)}
						>
							Add To Cart
						</Button>
					</Flex>
				</Flex>
			) : (
				<Flex justify="center">
					<CircularProgress />
				</Flex>
			)}
		</Paper>
	)
}
