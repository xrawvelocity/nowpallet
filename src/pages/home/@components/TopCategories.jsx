import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router'

import backplate from '../../../assets/images/categories/backplate.png'
import cartridge from '../../../assets/images/categories/cartridge.png'
import compressorwheel from '../../../assets/images/categories/compressorwheel.png'
import repairkit from '../../../assets/images/categories/repairkit.png'
import turbinehousing from '../../../assets/images/categories/turbinehousing.png'
import turbo from '../../../assets/images/categories/turbo.png'
import Flex from '../../../components/structure/Flex'
import { useStore } from '../../../context/storeCtx'

export const TopCategories = () => {
	const { categories } = useStore()
	const history = useHistory()

	console.log(categories)

	const CategoryCard = ({ path, image, text, imgStyles }) => {
		return (
			<Grid
				onClick={() => history.push(path)}
				item
				xs={6}
				sm={4}
				md={2}
				sx={{
					mb: '2rem',
					cursor: 'pointer',
				}}
			>
				<Flex
					direction="column"
					align="center"
					style={{ width: '100%' }}
					sx={{ ':hover > div': { boxShadow: 6 } }}
				>
					<Paper
						sx={{
							height: '20rem',
							width: '100%',
							borderRadius: '10px',
							overflow: 'hidden',
							padding: '1rem',
						}}
					>
						<img
							src={image}
							alt={text}
							style={{
								height: '100%',
								width: '100%',
								objectFit: 'contain',
								...imgStyles,
							}}
						/>
					</Paper>

					<Typography
						sx={{
							color: 'text.darkBlack',
							boxShadow: (theme) =>
								`0 4px 2px -2px ${theme.palette.primary.main}`,
							fontSize: '2rem',
							fontWeight: '600',
							textAlign: 'center',
							marginTop: '.5rem',
						}}
					>
						{text}
					</Typography>
				</Flex>
			</Grid>
		)
	}
	return (
		<Flex
			direction="column"
			align="center"
			justify="center"
			sx={{ width: '100%', marginTop: { xs: '0rem', sm: '12rem' } }}
		>
			{/* <Typography
				sx={{
					margin: '5rem 0 3rem',
					fontSize: '3rem',
					fontWeight: 'bold',
					color: 'text.white',
				}}
			>
				Top Categories
			</Typography> */}
			<Grid container spacing={3} style={{ marginBottom: '4rem' }}>
				{categories.map((each) => {
					console.log(each)
					if (!each.description) {
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
