import {
	Button,
	CircularProgress,
	IconButton,
	Paper,
	Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import Flex from '../../components/structure/Flex'
import { useStore } from '../../context/storeCtx'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import FavoriteIcon from '@mui/icons-material/Favorite'
import {
	FacebookIcon,
	FacebookShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from 'react-share'

export const ProductDetail = () => {
	const { products, addToCart } = useStore()
	const { id } = useParams()

	const product = products.filter((each) => each.id === id)[0]

	const [qty, setQty] = useState(1)
	console.log(product)

	return (
		<Box sx={{ py: '4rem' }}>
			<Box
				style={{
					width: '100%',
					padding: ' 2rem 0',
					height: 'auto',
				}}
			>
				{product ? (
					<Box
						style={{
							display: 'flex',
							width: '100%',
							height: '100%',
						}}
						sx={{
							flexDirection: { xs: 'column', m: 'row' },
							justifyContent: { xs: 'flex-start', m: 'space-between' },
							alignItems: 'flex-start',
							color: 'text.main',
						}}
					>
						<Box
							sx={{
								height: { xs: 'auto', m: 'auto' },
								width: { xs: '100%', m: '50%' },
								mt: '1rem',
								mb: { xs: '4rem', m: '0' },
								mr: { m: '4rem' },
							}}
						>
							<img
								src={product.assets[0]?.url}
								alt="product image"
								style={{ height: '100%', width: '100%', objectFit: 'contain' }}
							/>
						</Box>
						<Flex
							direction="column"
							sx={{
								width: { xs: '100%', m: '50%' },
								height: '100%',
								ml: { xs: '0', sm: '5rem' },
							}}
						>
							<Typography
								sx={{
									fontSize: '2.2rem',
									fontWeight: '600',
									mb: '2rem',
								}}
							>
								{product.name}
							</Typography>
							<Flex align="center" sx={{ mb: '2rem' }}>
								<Typography
									sx={{
										fontSize: '2.2rem',
										fontWeight: '600',
									}}
								>
									{product.price.formatted_with_symbol}
								</Typography>
								<Flex align="center" style={{ marginLeft: '4rem' }}>
									<Typography>Share product to:</Typography>
									<Flex style={{ margin: '.5rem 0 0 1rem' }}>
										<FacebookShareButton
											url={'micturbo.netlify.app'}
											quote="Check this out"
											style={{ marginRight: '1rem' }}
										>
											<FacebookIcon size={28} round />
										</FacebookShareButton>
										<WhatsappShareButton url={'micturbo.netlify.app'}>
											<WhatsappIcon size={28} round />
										</WhatsappShareButton>
									</Flex>
								</Flex>
							</Flex>

							<Typography
								style={{
									fontSize: '1.6rem',
									textTransform: 'uppercase',
									fontWeight: '400',
									maxHeight: '300px',
									overflowY: 'scroll',
									padding: '1rem 3rem',
								}}
								dangerouslySetInnerHTML={{
									__html: product.description,
								}}
							></Typography>
							<Flex
								width="100%"
								align="flex-start"
								sx={{
									mt: '4rem',
									justifyContent: 'flex-start !important',
								}}
							>
								<Flex align="center" sx={{ mr: '4rem' }}>
									<IconButton
										sx={{ color: 'text.main' }}
										size="small"
										style={{ width: '3rem', height: '3rem' }}
										disabled={qty < 2}
										onClick={() => setQty((prev) => prev - 1)}
									>
										<RemoveIcon />
									</IconButton>
									<Typography style={{ margin: '0 1rem', fontSize: '2rem' }}>
										{qty}
									</Typography>
									<IconButton
										sx={{ color: 'text.main' }}
										size="small"
										style={{ width: '3rem', height: '3rem' }}
										onClick={() => setQty((prev) => prev + 1)}
									>
										<AddIcon />
									</IconButton>
								</Flex>
								<Button
									color="primary"
									variant="outlined"
									sx={{ fontSize: '1.6rem' }}
									onClick={() => addToCart(product.id, qty)}
								>
									Add To Cart
								</Button>
							</Flex>
						</Flex>
					</Box>
				) : (
					<Flex justify="center">
						<CircularProgress />
					</Flex>
				)}
			</Box>
		</Box>
	)
}
