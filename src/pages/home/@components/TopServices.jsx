import { Button, Typography } from '@mui/material'
import React from 'react'
import Fade from 'react-reveal/Fade'

import background from '../../../assets/images/turbowallpaper.png'
import Flex from '../../../components/structure/Flex'
import { Title } from '../../../components/typography/Title'
import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from 'react-compare-slider'

import badturbo from '../../../assets/images/badturbo.jpg'
import goodturbo from '../../../assets/images/goodturbo.jpg'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

export const TopServices = () => {
	return (
		<Flex direction="column" style={{ width: '100%', alignItems: 'center' }}>
			<Fade>
				<Title sx={{ mb: '6rem' }}>Our Services</Title>
			</Fade>
			<Fade left>
				<Flex
					align="center"
					sx={{
						mb: '16rem',
						width: '100%',
						justifyContent: {
							xs: 'center !important',
							sm: 'space-between !important',
						},
						flexDirection: { xs: 'column !important' },
					}}
				>
					<Box
						sx={{
							width: { xs: '100%', sm: '50%' },
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
							width: { xs: '100%', sm: '40%' },
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
							Repairing Turbos
						</Typography>
						<Typography
							variant="h6"
							sx={{ textAlign: { xs: 'center', sm: 'left' } }}
						>
							No matter how rusty or damaged your turbo is, we will leave it as
							new as the first day it was installed in a car. Send us a message
							with your information for a free estimate.
						</Typography>
						<Button
							component={Link}
							to="/contact"
							variant="outlined"
							color="primary"
							sx={{
								fontSize: { xs: '1.5rem', s: '1.7rem' },
								alignSelf: { sm: 'start' },
								mt: '2rem',
								color: 'text.main',
							}}
						>
							Contact Us
						</Button>
					</Flex>
				</Flex>
			</Fade>
			<Fade right>
				<Flex
					align="center"
					sx={{
						mb: '16rem',
						width: '100%',
						justifyContent: {
							xs: 'center !important',
							sm: 'space-between !important',
						},
						flexDirection: { xs: 'column !important' },
					}}
				>
					<Box
						sx={{
							width: { xs: '100%', sm: '50%' },
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
							width: { xs: '100%', sm: '40%' },
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
							Repairing Turbos
						</Typography>
						<Typography
							variant="h6"
							sx={{ textAlign: { xs: 'center', sm: 'left' } }}
						>
							No matter how rusty or damaged your turbo is, we will leave it as
							new as the first day it was installed in a car. Send us a message
							with your information for a free estimate.
						</Typography>
						<Button
							component={Link}
							to="/contact"
							variant="outlined"
							color="primary"
							sx={{
								fontSize: { xs: '1.5rem', s: '1.7rem' },
								alignSelf: { sm: 'start' },
								mt: '2rem',
								color: 'text.main',
							}}
						>
							Contact Us
						</Button>
					</Flex>
				</Flex>
			</Fade>
			<Fade left>
				<Flex
					align="center"
					sx={{
						mb: '16rem',
						width: '100%',
						justifyContent: {
							xs: 'center !important',
							sm: 'space-between !important',
						},
						flexDirection: { xs: 'column !important' },
					}}
				>
					<Box
						sx={{
							width: { xs: '100%', sm: '50%' },
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
							width: { xs: '100%', sm: '40%' },
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
							Repairing Turbos
						</Typography>
						<Typography
							variant="h6"
							sx={{ textAlign: { xs: 'center', sm: 'left' } }}
						>
							No matter how rusty or damaged your turbo is, we will leave it as
							new as the first day it was installed in a car. Send us a message
							with your information for a free estimate.
						</Typography>
						<Button
							component={Link}
							to="/contact"
							variant="outlined"
							color="primary"
							sx={{
								fontSize: { xs: '1.5rem', s: '1.7rem' },
								alignSelf: { sm: 'start' },
								mt: '2rem',
								color: 'text.main',
							}}
						>
							Contact Us
						</Button>
					</Flex>
				</Flex>
			</Fade>
		</Flex>
	)
}
