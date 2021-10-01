import { Grid } from '@mui/material'
import React from 'react'
import Fade from 'react-reveal/Fade'

import CategoryCard from '../../../components/cards/CategoryCard'
import Flex from '../../../components/structure/Flex'
import { Title } from '../../../components/typography/Title'
import { useStore } from '../../../context/storeCtx'

export const TopCategories = () => {
	const { categories } = useStore()

	let productCategories = categories.filter((each) => !each.description)

	return (
		<Flex direction="column" align="center">
			<Fade>
				<Title>Top Categories</Title>
			</Fade>
			<Flex
				direction="column"
				align="center"
				justify="center"
				sx={{ width: '100%' }}
			>
				<Fade>
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
				</Fade>
			</Flex>
		</Flex>
	)
}
