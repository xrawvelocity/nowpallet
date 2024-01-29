import { Button, Grid } from '@mui/material'
import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'

import CategoryCard from '../../../components/cards/CategoryCard'
import Flex from '../../../components/structure/Flex'
import { Title } from '../../../components/typography/Title'
import categories from '../../../assets/data'

export const TopCategories = () => {
	console.log('categories', categories)

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
						{Object.keys(categories).map((each, index) => {
							if (index < 6) {
								return (
									<CategoryCard
										image={categories[each][3].image}
										text={each}
										path={`/catalog/${each}`}
									/>
								)
							} else return
						})}
					</Grid>
				</Fade>
			</Flex>
			<Button
				component={Link}
				to="/catalog"
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
