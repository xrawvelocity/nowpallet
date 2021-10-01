import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@mui/material'
import { useStore } from '../../../context/storeCtx'
import Flex from '../../../components/structure/Flex'

export const Review = () => {
	const { cart } = useStore()
	return (
		<Flex direction="column" sx={{ maxHeight: '420px', overflowY: 'scroll' }}>
			<Typography variant="h6" gutterBottom>
				Order Summary
			</Typography>
			<List disablePadding>
				{cart.line_items.map((product) => (
					<ListItem style={{ padding: '1rem 0' }} key={product.name}>
						<ListItemText
							primary={product.name}
							secondary={`Quantity: ${product.quantity}`}
							secondaryTypographyProps={{
								sx: { color: 'text.main', mt: '1rem' },
							}}
						/>
						<Typography variant="body2">
							{product.line_total.formatted_with_symbol}
						</Typography>
					</ListItem>
				))}
				<ListItem style={{ padding: '1rem 0' }}>
					<ListItemText primary="Total" />
					<Typography variant="subtitle1" style={{ fontWeight: 700 }}>
						{cart.subtotal.formatted_with_symbol}
					</Typography>
				</ListItem>
			</List>
		</Flex>
	)
}
