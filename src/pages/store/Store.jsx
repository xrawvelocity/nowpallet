import { Breadcrumbs, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import CategoryCard from '../../components/cards/CategoryCard'
import { Product } from './@components/Product'
import Flex from '../../components/structure/Flex'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import categories from '../../assets/data'

export default function Store() {
	const { category } = useParams()
	const products = categories[category]
	console.log(products)

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, [category])

	const showProducts = () => {
		return products.map((each) => {
			return (
				<Grid item xs={12} md={3} align="center">
					<Product product={each} />
				</Grid>
			)
		})
	}

	return (
		<Flex
			direction="column"
			align="center"
			sx={{ '& > *': { padding: { xs: '0 5%', sm: '0 15%' } }, py: '4rem' }}
		>
			<Flex
				justify="space-between"
				align="flex-start"
				style={{ width: '100%' }}
			>
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
					{category && (
						<Typography color="text.main">
							{category.charAt(0).toUpperCase() + category.slice(1)}
						</Typography>
					)}
				</Breadcrumbs>
			</Flex>
			{category ? (
				<Grid container spacing={3} justifyContent="center">
					{showProducts()}
				</Grid>
			) : (
				<Grid
					container
					spacing={3}
					justify="center"
					style={{ marginBottom: '4rem' }}
				>
					{Object.keys(categories).map((each, index) => {
						if (index < 6) {
							return (
								<CategoryCard
									image={categories[each][7].image}
									text={each}
									path={`/catalog/${each}`}
								/>
							)
						} else return
					})}
				</Grid>
			)}
		</Flex>
	)
}
