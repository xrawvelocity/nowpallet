import { Button, Grid } from '@mui/material'
import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'

import CategoryCard from '../../../components/cards/CategoryCard'
import Flex from '../../../components/structure/Flex'
import { Title } from '../../../components/typography/Title'
import { useStore } from '../../../context/storeCtx'

export const TopCategories = () => {
	const { categories } = useStore()

	let productCategories = categories.filter((each) => !each.description)

	return (
		<Flex
			direction="column"
			align="center"
			sx={{ padding: { xs: '0 5% 5rem', sm: '0 15% 5rem' } }}
		>
			<Fade>
				<Title sx={{ m: '6rem auto 5rem' }}>Top Categories</Title>
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
			<Button
				component={Link}
				to="/store"
				variant="outlined"
				color="primary"
				sx={{
					fontSize: { xs: '1.5rem', s: '1.7rem' },
					mb: '4rem',
					color: 'text.main',
				}}
			>
				See all categories
			</Button>
		</Flex>
	)
}
