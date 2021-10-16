import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

import Flex from '../../../components/structure/Flex'
import { useStore } from '../../../context/storeCtx'

export const Review = () => {
	const { cart } = useStore()
	return (
		<Flex direction="column">
			<Typography variant="h6" gutterBottom>
				Order Summary
			</Typography>
			<List
				disablePadding
				sx={{
					maxHeight: '350px',
					overflowY: 'scroll',
					width: '100%',
					padding: '1rem 2rem',
				}}
			>
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
			</List>
			<Flex
				sx={{
					padding: '1.5rem 0',
					width: '100%',
					justifyContent: 'space-between !important',
					borderBottom: '1px solid',
					borderColor: 'permanent.white4',
				}}
			>
				<Typography sx={{ fontSize: '1.4rem', fontWeight: 600 }}>
					Total
				</Typography>
				<Typography
					variant="subtitle1"
					style={{ fontSize: '1.6rem', fontWeight: 700 }}
				>
					{cart.subtotal.formatted_with_symbol}
				</Typography>
			</Flex>
		</Flex>
	)
}
