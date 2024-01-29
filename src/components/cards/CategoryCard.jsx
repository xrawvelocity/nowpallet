import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router'
import Flex from '../structure/Flex'

const CategoryCard = ({ path, image, text, imgStyles }) => {
	const history = useHistory()
	return (
		<Grid
			onClick={() => history.push(path)}
			item
			xs={6}
			sm={4}
			sx={{
				mb: '2rem',
				cursor: 'pointer',
			}}
		>
			<Flex
				direction="column"
				align="center"
				sx={{
					width: '100%',
					':hover': {
						'& > p': {
							boxShadow: `0 4px 2px -2px #fb4c04`,
						},
					},
				}}
			>
				<Paper
					sx={{
						height: '20rem',
						width: '100%',
						borderRadius: '10px',
						overflow: 'hidden',
						padding: '1rem',
						bgcolor: 'background.paper',
					}}
					elevation={4}
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
						color: 'text.main',
						fontSize: '2rem',
						fontWeight: '600',
						textAlign: 'center',
						marginTop: '.5rem',
					}}
				>
					{text.charAt(0).toUpperCase() + text.slice(1)}
				</Typography>
			</Flex>
		</Grid>
	)
}

export default CategoryCard
