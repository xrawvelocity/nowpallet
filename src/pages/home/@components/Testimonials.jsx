import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Fade from 'react-reveal/Fade'

import React from 'react'
import Flex from '../../../components/structure/Flex'
import { Title } from '../../../components/typography/Title'
import { Link } from 'react-router-dom'
import { LinkButton } from '../../../components/buttons/LinkButton'

export const Testimonials = () => {
	const allTestimonials = [
		{
			name: 'Sarah Johnson',
			content:
				"I've been working with NowPallet for a year now, and they've been a game-changer for my retail business. The quality of their products and their commitment to my success is unmatched. Highly recommended!",
			rating: 5,
		},
		{
			name: 'David Anderson',
			content:
				'NowPallet has made bulk ordering a breeze for us. Their diverse product range means we can get everything we need from one place. Their customer-centric approach makes us feel valued as partners, not just clients.',
			rating: 4,
		},
		{
			name: 'Emily Martinez',
			content:
				"As a boutique retailer, finding flexible bulk order options was crucial for us. NowPallet not only provided that but also ensured timely deliveries. They've been an essential part of our growth strategy.",
			rating: 5,
		},
	]

	const TestimonialCard = ({ each }) => {
		return (
			<Paper
				target="_blank"
				elevation={4}
				sx={{
					padding: '2rem',
					width: { xs: '100%', sm: '32%' },
					height: 'auto',
					mb: { xs: '2rem', sm: '0' },
				}}
			>
				<Flex direction="column" align="flex-start" justify="center">
					<Typography sx={{ fontSize: '1.6rem' }}>
						&#8220;{each.content}&#8221;
					</Typography>
					<Flex
						align="center"
						justify="space-between"
						sx={{ width: '100%', marginTop: '2rem' }}
					>
						<Typography sx={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
							{each.name}
						</Typography>
						<Flex>{'⭐'.repeat(each.rating)}</Flex>
					</Flex>
				</Flex>
			</Paper>
		)
	}

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
			<Flex direction="column" align="center" sx={{ m: '3rem 0 9rem' }}>
				<Fade>
					<Title sx={{ m: '0 auto 5rem' }}>What our clients have to say</Title>

					<Flex
						sx={{
							flexDirection: { xs: 'column !important', sm: 'row !important' },
							justifyContent: { sm: 'space-between !important' },
							width: '100%',
						}}
					>
						{allTestimonials.map((each) => {
							return <TestimonialCard each={each} />
						})}
					</Flex>
					<LinkButton
						sx={{
							fontSize: { xs: '1.4rem', s: '1.7rem' },
							alignSelf: { sm: 'start' },
							mt: { xs: '0', sm: '5rem' },
						}}
						to="/membership"
						size="large"
					>
						Become a member
					</LinkButton>
				</Fade>
			</Flex>
		</Flex>
	)
}
