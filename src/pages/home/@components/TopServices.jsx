import { Typography } from '@mui/material'
import React from 'react'
import Fade from 'react-reveal/Fade'

import Flex from '../../../components/structure/Flex'
import { Title } from '../../../components/typography/Title'

import herovector from '../../../assets/images/hero-vector.svg'
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
						<img
							src={herovector}
							alt="all products"
							style={{
								height: '100%',
								width: '100%',
								objectFit: 'cover',
								overflow: 'hidden',
							}}
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
							Pallet Orders for Local Retailers
						</Typography>
						<Typography
							variant="h6"
							sx={{ textAlign: { xs: 'center', sm: 'left' } }}
						>
							NowPallet specializes in providing bulk orders by the pallet to
							local retailers. Whether you operate a small boutique or a large
							retail chain, our flexible pallet options are designed to meet
							your inventory needs.
						</Typography>
						<LinkButton
							component={Link}
							to="/membership"
							variant="contained"
							color="primary"
							sx={{
								fontSize: { xs: '1.5rem', s: '1.7rem' },
								alignSelf: { sm: 'start' },
								mt: '4rem',
							}}
						>
							Become a Member
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
							E-Commerce Solutions
						</Typography>
						<Typography
							variant="h6"
							sx={{ textAlign: { xs: 'center', sm: 'left' } }}
						>
							In the fast-paced world of e-commerce, efficient sourcing is key.
							We collaborate with e-commerce sellers, offering tailored pallet
							solutions to optimize your supply chain and keep your online store
							stocked with in-demand products.
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
							View our Catalog
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
							src={herovector}
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
						flexDirection: {
							xs: 'column-reverse !important',
							sm: 'row !important',
						},
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
						<img
							src={herovector}
							alt="all products"
							style={{
								height: '100%',
								width: '100%',
								objectFit: 'cover',
								overflow: 'hidden',
							}}
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
							Our Distribution Chain
						</Typography>
						<Typography
							variant="h6"
							sx={{ textAlign: { xs: 'center', sm: 'left' } }}
						>
							With a vast distribution chain spanning across Florida, Texas,
							California, and Arizona, ByThePallet ensures efficient and timely
							delivery of your wholesale orders. Our strategic presence in these
							key regions allows us to serve businesses with speed and
							reliability.
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
							About Us
						</LinkButton>
					</Flex>
				</Flex>
			</Fade>
		</Flex>
	)
}
