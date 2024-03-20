import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'

import Flex from '../../components/structure/Flex'
import { Title } from '../../components/typography/Title'

import about1 from '../../assets/images/about1.png'
import about2 from '../../assets/images/about2.png'

export const About = () => {
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, [])

	return (
		<Flex
			direction="column"
			style={{ width: '100%' }}
			sx={{
				'& > *': { padding: { xs: '0 5%', sm: '0 15%' } },
				py: { xs: '4rem', sm: '8rem' },
			}}
		>
			<Title style={{ textAlign: 'center', width: '100%' }}>About Us</Title>
			<Flex
				justify="center"
				direction={{ xs: 'column', md: 'row' }}
				sx={{ width: '100%' }}
			>
				<Box
					sx={{
						width: { xs: '100%', md: '40%' },
						height: { xs: '200px', md: '320px' },
						overflow: 'hidden',
						mb: '4rem',
					}}
				>
					<img
						src={about1}
						alt="About Us"
						style={{
							height: '100%',
							width: '100%',
							objectFit: 'contain',
							overflow: 'hidden',
						}}
					/>
				</Box>
				<Box
					sx={{
						width: { xs: '100%', md: '40%' },
						height: { xs: '200px', md: '320px' },
						overflow: 'hidden',
						mb: '4rem',
					}}
				>
					<img
						src={about2}
						alt="About Us"
						style={{
							height: '100%',
							width: '100%',
							objectFit: 'contain',
							overflow: 'hidden',
						}}
					/>
				</Box>
			</Flex>
			<Flex
				sx={{
					width: '100%',
					height: 'auto',
					flexDirection: { xs: 'column !important', sm: 'row !important' },
					alignItems: { xs: 'center !important', sm: 'flex-start !important' },
				}}
			>
				<Typography
					variant="h6"
					sx={{
						width: { xs: '100%', sm: '100%' },
						pb: '3rem',
					}}
				>
					Welcome to NowPallet, your trusted partner in the world of wholesale
					distribution. Established in 2020, we embarked on a journey with a
					singular vision: to redefine the wholesale purchasing experience.
					Today, we stand proudly as a beacon of excellence in bulk orders,
					dedicated to supporting local retailers on their path to growth and
					success.
					<br />
					<br />
					Our mission is simple but profound: We aim to be the first choice for
					businesses seeking quality and value in wholesale. We understand the
					unique challenges that businesses face when sourcing products in bulk,
					and we are committed to streamlining procurement with a vast range of
					products, all tailored to your business needs.
					<br />
					<br />
					What sets NowPallet apart? It's our unwavering commitment to quality
					assurance, ensuring that every product you receive meets rigorous
					standards. From Health & Beauty to Grocery items, our extensive
					catalog caters to all your needs. But beyond the products, it's our
					customer-centric approach that truly distinguishes us. We prioritize
					your success, offering personalized solutions to foster lasting
					partnerships.
					<br />
					<br />
					With a vast distribution network spanning across Florida and Texas, we
					strategically position ourselves for optimal delivery. Timeliness is
					essential in the fast-paced world of business, and we ensure your
					orders arrive when and where you need them.
					<br />
					<br />
					We invite you to join our wholesale network and experience the
					NowPallet difference. Reach out to discuss solutions, request a quote,
					or simply learn how we can contribute to your business's growth.
					Partner with us, and let's build a successful future together.
					<br />
					<br />
					Thank you for considering NowPallet as your wholesale partner. We look
					forward to serving you with excellence in every order.
				</Typography>
			</Flex>
		</Flex>
	)
}
