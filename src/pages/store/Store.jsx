import { Breadcrumbs, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import CategoryCard from '../../components/cards/CategoryCard'
import { Product } from '../../components/Product'
import Flex from '../../components/structure/Flex'
import { useStore } from '../../context/storeCtx'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export default function Store() {
	const { products, categories } = useStore()
	const { category } = useParams()

	console.log(products)

	let productCategories = categories.filter((each) => !each.description)

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, [category])

	const showProducts = () => {
		return products
			.filter((each) =>
				each.categories.map((cat) => cat.slug).includes(category)
			)
			.map((each) => {
				return (
					<Grid item xs={6} md={3} align="center">
						<Product product={each} />
					</Grid>
				)
			})
	}

	return (
		<Flex direction="column" align="center" sx={{ py: '4rem' }}>
			<Breadcrumbs
				sx={{ alignSelf: 'flex-start', mb: '4rem' }}
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
				<Link to="/store">
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
						Store
					</Typography>
				</Link>
				{category && (
					<Typography color="text.main">
						{categories.filter((each) => each.slug.includes(category))[0]?.name}
					</Typography>
				)}
			</Breadcrumbs>
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
					{productCategories.map((each, index) => {
						return (
							<CategoryCard
								image={each.assets[0]?.url}
								text={each.name}
								path={`/store/${each.slug}`}
							/>
						)
					})}
				</Grid>
			)}
		</Flex>
	)
}
