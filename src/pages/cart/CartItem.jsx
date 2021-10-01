import React from 'react'
import {
	Typography,
	Button,
	IconButton,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import Flex from '../../components/structure/Flex'
import { useStore } from '../../context/storeCtx'

export const CartItem = ({ product }) => {
	const { updateQty, removeFromCart } = useStore()

	console.log(product)

	return (
		<Card sx={{ color: 'text.main' }} elevation={4}>
			<CardMedia
				image={product.media.source}
				alt={product.name}
				style={{ height: '20rem' }}
			/>
			<CardContent>
				<Typography variant="h5" sx={{ mb: '2rem' }}>
					{product.name}
				</Typography>
				<Typography variant="h6">
					{product.line_total.formatted_with_symbol}
				</Typography>
			</CardContent>
			<CardActions style={{ justifyContent: 'space-between', width: '100%' }}>
				<Flex align="center">
					<IconButton
						size="small"
						style={{ width: '3rem', height: '3rem' }}
						sx={{ color: 'text.main' }}
						disabled={product.quantity < 2}
						onClick={() => updateQty(product.id, product.quantity - 1)}
					>
						<RemoveIcon />
					</IconButton>
					<Typography style={{ margin: '0 1rem', fontSize: '2rem' }}>
						{product.quantity}
					</Typography>
					<IconButton
						size="small"
						style={{ width: '3rem', height: '3rem' }}
						sx={{ color: 'text.main' }}
						onClick={() => updateQty(product.id, product.quantity + 1)}
					>
						<AddIcon />
					</IconButton>
				</Flex>
				<Button
					variant="outlined"
					color="secondary"
					sx={{ color: 'text.main' }}
					onClick={() => removeFromCart(product.id)}
				>
					Remove
				</Button>
			</CardActions>
		</Card>
	)
}
