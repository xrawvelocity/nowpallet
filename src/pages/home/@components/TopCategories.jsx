import { Grid } from '@mui/material'
import React from 'react'

import CategoryCard from '../../../components/cards/CategoryCard'
import Flex from '../../../components/structure/Flex'
import { useStore } from '../../../context/storeCtx'

export const TopCategories = () => {
	const { categories } = useStore()

	let productCategories = categories.filter((each) => !each.description)

	return (
		<Flex
			direction="column"
			align="center"
			justify="center"
			sx={{ width: '100%', marginTop: { xs: '0rem', sm: '12rem' } }}
		>
			<Grid
				container
				spacing={3}
				justify="center"
				style={{ marginBottom: '4rem' }}
			>
				{productCategories.map((each, index) => {
					if (index < 6) {
						return (
							<CategoryCard
								image={each.assets[0]?.url}
								text={each.name}
								path={`/store/${each.slug}`}
							/>
						)
					} else return
				})}
			</Grid>
		</Flex>
	)
}
