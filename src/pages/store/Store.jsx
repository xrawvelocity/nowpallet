import {
	Breadcrumbs,
	CircularProgress,
	Grid,
	MenuItem,
	Select,
	Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import CategoryCard from '../../components/cards/CategoryCard'
import { Product } from './@components/Product'
import Flex from '../../components/structure/Flex'
import { useStore } from '../../context/storeCtx'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export default function Store() {
	const { products, categories, productsLoading, categoriesLoading } =
		useStore()
	const { category } = useParams()
	const [selectedCompany, setSelectedCompany] = useState('all')

	console.log(products)

	let productCategories = categories.filter((each) => !each.description)
	let companyCategories = categories.filter(
		(each) => each.description === 'company'
	)

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
							{
								categories.filter((each) => each.slug.includes(category))[0]
									?.name
							}
						</Typography>
					)}
				</Breadcrumbs>
				{/* <Flex direction="column">
					<Typography gutterBottom>Company</Typography>
					<Select
						size="small"
						variant="outlined"
						value={selectedCompany}
						onChange={(e) => setSelectedCompany(e.target.value)}
						sx={{ width: '20rem' }}
					>
						<MenuItem value="all">All</MenuItem>
						{companyCategories.map((each) => {
							return <MenuItem value={each.slug}>{each.name}</MenuItem>
						})}
					</Select>
				</Flex> */}
			</Flex>
			{category ? (
				<Grid container spacing={3} justifyContent="center">
					{products.filter((each) =>
						each.categories.map((cat) => cat.slug).includes(category)
					).length ? (
						showProducts()
					) : productsLoading ? (
						<Flex
							style={{ width: '100%', height: '10rem', marginTop: '3rem' }}
							align="center"
							justify="center"
						>
							<CircularProgress size={40} />
						</Flex>
					) : (
						<Grid item xs={12}>
							<Typography sx={{ fontSize: '2rem' }}>
								Sorry. There are no products available in this category at the
								moment.
							</Typography>
						</Grid>
					)}
				</Grid>
			) : categoriesLoading ? (
				<Flex
					style={{ width: '100%', height: '10rem', marginTop: '3rem' }}
					align="center"
					justify="center"
				>
					<CircularProgress size={40} />
				</Flex>
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
