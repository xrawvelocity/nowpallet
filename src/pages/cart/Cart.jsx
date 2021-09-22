import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../context/storeCtx'
import { Container, Grid, Typography, Button, Box, Paper } from '@mui/material'
import { CartItem } from './CartItem'
import Flex from '../../components/structure/Flex'
import { LinkButton } from '../../components/buttons/LinkButton'

export const Cart = () => {
	const { cart, emptyCart } = useStore()

	const EmptyCart = () => {
		return (
			<Paper style={{ padding: '6rem 0' }} align="center">
				<Typography
					variant="h6"
					style={{ marginBottom: '3rem' }}
					sx={{ color: 'text.main' }}
				>
					Your cart is empty, please add a product.
				</Typography>
				<LinkButton to="/store">Go To Store</LinkButton>
			</Paper>
		)
	}

	const FilledCart = () => {
		return (
			<Flex direction="column" align="center" style={{ width: '100%' }}>
				<Typography
					variant="h4"
					align="center"
					style={{ marginBottom: '2rem' }}
				>
					Your Shopping Cart
				</Typography>
				<LinkButton to="/checkout" style={{ margin: '2rem 0' }}>
					Checkout Securely
				</LinkButton>
				<Grid container spacing={3}>
					{cart.line_items.map((each) => {
						return (
							<Grid item xs={3}>
								<CartItem product={each} />
							</Grid>
						)
					})}
				</Grid>
				<Flex
					justify="space-between"
					align="center"
					style={{ width: '100%', marginTop: '4rem' }}
					sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
				>
					<Typography variant="h5">
						Subtotal: {cart.subtotal.formatted_with_symbol}
					</Typography>
					<Flex>
						<Button
							variant="outlined"
							color="secondary"
							onClick={() => emptyCart()}
						>
							Empty Cart
						</Button>
						<LinkButton
							to="/checkout"
							sx={{
								marginLeft: '2rem',
							}}
						>
							Checkout Securely
						</LinkButton>
					</Flex>
				</Flex>
			</Flex>
		)
	}

	return (
		<Box style={{ paddingTop: '4rem' }}>
			{cart.total_items ? <FilledCart /> : <EmptyCart />}
		</Box>
	)
}
