import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

import background from '../../../assets/images/turbowallpaper.png'
import Flex from '../../../components/structure/Flex'

export const Hero = () => {
	return (
		<Box
			sx={{
				bgcolor: 'background.darkGray',
				height: 'auto',
				maxHeight: 'calc(100vh - 110px)',
				width: '100%',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: {
						xs: 'column-reverse',
						sm: 'column-reverse',
						md: 'row',
					},
					alignItems: { xs: 'center', sm: 'center', md: 'center' },
					justifyContent: {
						xs: 'flex-end',
						sm: 'flex-end',
						md: 'space-between',
					},
					height: '100%',
					width: '100%',
					padding: { xs: '6rem 0', sm: '6rem 0' },
				}}
			>
				<Flex
					direction="column"
					sx={{
						width: { xs: '100%', sm: '100%', md: '45%' },
						alignItems: { xs: 'center', sm: 'flex-start' },
					}}
				>
					<Typography
						sx={{
							color: 'text.white',
							fontSize: { xs: '3rem', sm: '3.5rem', md: '4rem' },
							fontWeight: '700',
							textAlign: { xs: 'center', sm: 'start' },
							width: { xs: '100%' },
							marginTop: { xs: '5rem' },
							lineHeight: { xs: '1.2' },
						}}
					>
						Do you need to rebuild, overhaul, or upgrade a turbocharger?
					</Typography>
					<Typography
						sx={{
							color: 'text.white',
							fontSize: '2rem',
							fontWeight: '500',
							margin: '2rem 0 4rem',
							textAlign: { xs: 'center', sm: 'start' },
							lineHeight: { sm: '1.7' },
						}}
					>
						We've got you covered; whether its for marine, automotive,
						industrial, trucking, construction, high performance, or
						agriculture.
					</Typography>
					<Box
						sx={{
							display: 'flex',
							alignItems: { xs: 'center' },
							justifyContent: { xs: 'center', sm: 'flex-start' },
							width: { xs: '100%' },
							marginBottom: { xs: '10rem' },
						}}
					>
						<Button
							component={Link}
							to="/store"
							variant="contained"
							color="primary"
							sx={{
								color: 'text.darkblack',
								fontSize: { xs: '1.4rem', s: '1.7rem' },
								alignSelf: { sm: 'start' },
								mr: { xs: '1.5rem' },
							}}
						>
							View All Products
						</Button>
						<Button
							component={Link}
							to="/contact"
							variant="outlined"
							color="primary"
							sx={{
								color: 'text.white',
								fontSize: { xs: '1.5rem', s: '1.7rem' },
								alignSelf: { sm: 'start' },
								ml: { xs: '1.5rem' },
							}}
						>
							Contact Us
						</Button>
					</Box>
				</Flex>
				<Box
					sx={{
						height: { xs: '25rem', sm: '40rem', md: '55rem' },
						width: { xs: '100%', sm: '100%', md: '50%' },
						marginLeft: { md: '10rem' },
						boxShadow: 15,
						borderRadius: '20px',
						objectPosition: { xs: 'bottom', sm: 'left', md: '-50px' },
					}}
				>
					<img
						src={background}
						alt="turbo"
						style={{
							height: '100%',
							width: '100%',
							objectFit: 'cover',
							overflow: 'hidden',
							borderRadius: '20px',
							filter: 'grayscale(1)',
						}}
					/>
				</Box>
			</Box>
		</Box>
	)
}
