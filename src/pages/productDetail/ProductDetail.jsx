import { Breadcrumbs, CircularProgress, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import Flex from '../../components/structure/Flex'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Link } from 'react-router-dom'
import { products } from '../../assets/data'
import { Product } from '../store/@components/Product'

export const ProductDetail = () => {
	const { id } = useParams()

	const product = products.filter((each) => each.sku === id)[0]

	function getRandomElements(array, numberOfElements) {
		// Shuffle the array (Fisher-Yates algorithm)
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}

		// Return the first numberOfElements elements
		return array.slice(0, numberOfElements)
	}

	const relatedProducts = products.filter(
		(each) => each.category === product.category && each.sku !== product.sku
	)

	const randomElements = getRandomElements(relatedProducts, 5)

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, [id])

	return (
		<Box sx={{ '& > *': { padding: { xs: '0 5%', sm: '0 15%' } }, py: '4rem' }}>
			<Flex direction="column">
				<Breadcrumbs
					sx={{ alignSelf: 'flex-start', my: '4rem' }}
					aria-label="breadcrumb"
					separator={
						<NavigateNextIcon sx={{ color: 'text.main' }} fontSize="small" />
					}
				>
					<Link to="/">
						<Typography
							sx={{
								color: 'text.main',
								cursor: 'pointer',
								':hover': {
									boxShadow: (theme) =>
										`0 4px 2px -2px ${theme.palette.primary.main}`,
								},
							}}
							variant="body1"
						>
							Home
						</Typography>
					</Link>
					<Link to="/catalog">
						<Typography
							sx={{
								color: 'text.main',
								cursor: 'pointer',
								':hover': {
									boxShadow: (theme) =>
										`0 4px 2px -2px ${theme.palette.primary.main}`,
								},
							}}
							variant="body1"
						>
							Catalog
						</Typography>
					</Link>
					<Link to={`/catalog/${product.category}`}>
						<Typography
							sx={{
								color: 'text.main',
								cursor: 'pointer',
								':hover': {
									boxShadow: (theme) =>
										`0 4px 2px -2px ${theme.palette.primary.main}`,
								},
							}}
							variant="body1"
						>
							{product.category.charAt(0).toUpperCase() +
								product.category.slice(1)}
						</Typography>
					</Link>
					<Typography color="text.main">
						{product.title.length > 24
							? `${product.title.slice(0, 24)}...`
							: product.title}
					</Typography>
				</Breadcrumbs>
				<Box
					style={{
						width: '100%',
						padding: ' 2rem 0',
						height: 'auto',
					}}
				>
					{product ? (
						<Flex direction="column">
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
										src={product.image}
										alt={product.title + ' image'}
										style={{
											height: '300px',
											width: '100%',
											objectFit: 'contain',
										}}
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
										{product.title}
									</Typography>
									<Flex align="center" sx={{ mb: '2rem' }}>
										<Typography
											sx={{
												fontSize: '2.2rem',
												fontWeight: '400',
											}}
										>
											MOQ: {product.moq}
										</Typography>
										<Typography
											sx={{
												fontSize: '2.2rem',
												fontWeight: '400',
												ml: '4rem',
											}}
										>
											SKU: {product.sku}
										</Typography>
									</Flex>
									<Flex align="center" sx={{ mb: '2rem' }}>
										<Typography
											sx={{
												fontSize: '2.2rem',
												fontWeight: '400',
											}}
										>
											Become a member to see our price!
										</Typography>
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
								</Flex>
							</Box>
							<Typography sx={{ mt: '8rem', mb: '4rem' }} variant="h5">
								Related Products
							</Typography>
							<Grid container spacing={3}>
								{randomElements.map((product) => {
									return (
										<Grid item xs={12} md={2.3} align="center">
											<Product product={product} />
										</Grid>
									)
								})}
							</Grid>
						</Flex>
					) : (
						<Flex justify="center">
							<CircularProgress />
						</Flex>
					)}
				</Box>
			</Flex>
		</Box>
	)
}
