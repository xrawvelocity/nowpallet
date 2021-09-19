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
				bgcolor: 'background.black',
				height: 'calc(100vh - 110px)',
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
					alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
					justifyContent: { xs: 'flex-end', sm: 'flex-end', md: 'center' },
					height: '100%',
					width: '100%',
					padding: { xs: '5rem 0 0', sm: '10rem 0 0' },
				}}
			>
				<Flex
					direction="column"
					sx={{ width: { sm: '40%', md: '35%' }, paddingTop: { sm: '5rem' } }}
				>
					<Typography
						sx={{
							color: 'text.white',
							fontSize: { xs: '3.2rem', sm: '3.8rem', md: '4.2rem' },
							fontWeight: '700',
							textAlign: { xs: 'center', sm: 'start' },
							marginTop: { xs: '5rem' },
							lineHeight: { sm: '1.3' },
						}}
					>
						Need to rebuild, overhaul, or upgrade a turbocharger?
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
						We have you covered; whether its for marine, automotive, industrial,
						trucking, construction, high performance, or agriculture.
					</Typography>
					<Box
						sx={{
							display: 'flex',
							alignItems: { xs: 'center' },
							justifyContent: { xs: 'space-evenly', sm: 'flex-start' },
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
								fontSize: { xs: '1.5rem', sm: '1.8rem' },
								alignSelf: { sm: 'start' },
								marginRight: { sm: '3rem' },
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
								fontSize: { xs: '1.5rem', sm: '1.8rem' },
								alignSelf: { sm: 'start' },
							}}
						>
							Contact Us
						</Button>
					</Box>
				</Flex>
				<Box
					sx={{
						height: { xs: '25rem', sm: '50rem' },
						width: { xs: '100%', sm: '40%' },
						marginLeft: { sm: '10rem' },
						boxShadow: 15,
						borderRadius: '20px',
						objectPosition: { xs: 'bottom', sm: 'left' },
					}}
				>
					<img
						src={background}
						alt="turbo"
						style={{
							height: '100%',
							width: '100%',
							objectFit: 'cover',
							objectPosition: 'inherit',
							overflow: 'hidden',
							borderRadius: '20px',
						}}
					/>
				</Box>
			</Box>
		</Box>
	)
}
