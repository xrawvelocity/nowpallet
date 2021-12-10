import { Button, Typography } from '@mui/material'
import React from 'react'
import Fade from 'react-reveal/Fade'

import background from '../../../assets/images/turbowallpaper.png'
import Flex from '../../../components/structure/Flex'
import { Title } from '../../../components/typography/Title'
import { Testimonials } from './Testimonials'
import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from 'react-compare-slider'

import badturbo from '../../../assets/images/badturbo.jpg'
import goodturbo from '../../../assets/images/goodturbo.jpg'
import allproducts from '../../../assets/images/allproducts.jpg'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { LinkButton } from '../../../components/buttons/LinkButton'

export const TopServices = () => {
	return (
		<Flex
			direction="column"
			style={{
				width: '100%',
				alignItems: 'center',
			}}
			sx={{
				padding: { xs: '0 5%', sm: '0 15%' },
				bgcolor: 'permanent.black2',
				color: 'permanent.white1',
			}}
		>
			<Fade>
				<Title sx={{ m: '6rem auto 5rem' }}>Our Services</Title>
			</Fade>
			<Fade left>
				<Flex
					align="center"
					sx={{
						mb: '10rem',
						width: '100%',
						justifyContent: {
							xs: 'center !important',
							sm: 'space-between !important',
						},
						flexDirection: { xs: 'column !important', sm: 'row !important' },
					}}
				>
					<Box
						sx={{
							width: { xs: '100%', sm: '45%' },
							height: '320px',
							borderRadius: '20px',
							overflow: 'hidden',
						}}
					>
						<ReactCompareSlider
							style={{ height: '100%' }}
							itemOne={
								<img
									src={badturbo}
									alt="turbo"
									style={{
										height: '100%',
										width: '100%',
										objectFit: 'cover',
										overflow: 'hidden',
									}}
								/>
							}
							itemTwo={
								<img
									src={goodturbo}
									alt="turbo"
									style={{
										height: '100%',
										width: '100%',
										objectFit: 'cover',
										overflow: 'hidden',
									}}
								/>
							}
						/>
					</Box>
					<Flex
						direction="column"
						sx={{
							ml: { sm: '8rem' },
							width: { xs: '100%', sm: '45%' },
							alignItems: {
								xs: 'center !important',
								sm: 'flex-start !important',
							},
						}}
					>
						<Typography
							variant="h5"
							sx={{ mt: { xs: '2rem' }, mb: '2rem', fontWeight: '700' }}
						>
							Turbocharger Repairs
						</Typography>
						<Typography
							variant="h6"
							sx={{ textAlign: { xs: 'center', sm: 'left' } }}
						>
							No matter how rusty or damaged your turbo is, we will leave it as
							new as the first day it was installed in a car. Send us a message
							with your information for a free estimate.
						</Typography>
						<LinkButton
							component={Link}
							to="/contact"
							variant="contained"
							color="primary"
							sx={{
								fontSize: { xs: '1.5rem', s: '1.7rem' },
								alignSelf: { sm: 'start' },
								mt: '4rem',
							}}
						>
							Contact Us
						</LinkButton>
					</Flex>
				</Flex>
			</Fade>
			<Fade right>
				<Flex
					align="center"
					sx={{
						mb: '10rem',
						width: '100%',
						justifyContent: {
							xs: 'center !important',
							sm: 'space-between !important',
						},
						flexDirection: {
							xs: 'column-reverse !important',
							sm: 'row !important',
						},
					}}
				>
					<Flex
						direction="column"
						sx={{
							mr: { sm: '8rem' },
							width: { xs: '100%', sm: '45%' },
							alignItems: {
								xs: 'center !important',
								sm: 'flex-start !important',
							},
						}}
					>
						<Typography
							variant="h5"
							sx={{ mt: { xs: '2rem' }, mb: '2rem', fontWeight: '700' }}
						>
							Turbocharger & Component Sales
						</Typography>
						<Typography
							variant="h6"
							sx={{ textAlign: { xs: 'center', sm: 'left' } }}
						>
							If what you need is a brand new turbo instead of repairing your
							old one you can check out our expansive collection.
						</Typography>
						<LinkButton
							component={Link}
							to="/store/turbochargers"
							variant="contained"
							color="primary"
							sx={{
								fontSize: { xs: '1.5rem', s: '1.7rem' },
								alignSelf: { sm: 'start' },
								mt: '4rem',
							}}
						>
							Shop Products
						</LinkButton>
					</Flex>
					<Box
						sx={{
							width: { xs: '100%', sm: '45%' },
							height: '320px',
							borderRadius: '20px',
							overflow: 'hidden',
						}}
					>
						<img
							src={allproducts}
							alt="all products"
							style={{
								height: '100%',
								width: '100%',
								objectFit: 'cover',
								overflow: 'hidden',
							}}
						/>
					</Box>
				</Flex>
			</Fade>
			<Testimonials />
		</Flex>
	)
}
