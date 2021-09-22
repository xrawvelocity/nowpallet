import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import CategoryCard from '../../components/cards/CategoryCard'
import { Product } from '../../components/Product'
import Flex from '../../components/structure/Flex'
import { useStore } from '../../context/storeCtx'

export default function Store() {
	const { products, categories } = useStore()
	const { category } = useParams()

	console.log(category)

	let productCategories = categories.filter((each) => !each.description)

	const showProducts = () => {
		return products.map((each) => {
			return (
				<Grid item xs={6} md={3} align="center">
					<Product product={each} />
				</Grid>
			)
		})
	}

	return (
		<Flex direction="column" align="center" style={{ paddingTop: '4rem' }}>
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
