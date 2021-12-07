import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Fade from 'react-reveal/Fade'

import React from 'react'
import Flex from '../../../components/structure/Flex'
import { Title } from '../../../components/typography/Title'
import { Link } from 'react-router-dom'

export const Testimonials = () => {
	const allTestimonials = [
		{
			source: 'Facebook',
			name: 'Martin J. Padilla',
			link: 'https://www.facebook.com/bolingchris/posts/10208478404874718',
			content:
				'They are awesome! they helped me out to find what I need and got me back and up thank you so much!! A+++',
		},
		{
			source: 'Facebook',
			name: 'Chris Boling',
			link: 'https://www.facebook.com/bolingchris/posts/10208478404874718',
			content:
				'Manuel assisted me in getting a replacement turbo actuator for my 2019 Ram 2500. I received the new part very quickly and was able to get my truck working as it should. Manuel was very informative and helpful and I would recommend their service very highly.',
		},
		{
			source: 'Ebay',
			name: 'cn-batteries',
			link: 'https://www.ebay.com/fdbk/feedback_profile/mic_turbo?filter=feedback_page:RECEIVED_AS_SELLER&_trksid=p2047675.l2560',
			content: 'Great communication. A pleasure to do business with.',
		},
	]

	const TestimonialCard = ({ each }) => {
		return (
			<Paper
				component="a"
				href={each.link}
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
					<Flex
						align="center"
						justify="space-between"
						sx={{ width: '100%', marginBottom: '2rem' }}
					>
						<Typography sx={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
							{each.name}
						</Typography>
						{each.source === 'Facebook' && (
							<img
								src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
								alt="Facebook logo"
								style={{ width: 'auto', height: '3rem' }}
							/>
						)}
						{each.source === 'Ebay' && (
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png"
								alt="Ebay logo"
								style={{ width: 'auto', height: '2rem' }}
							/>
						)}
					</Flex>
					<Typography sx={{ fontSize: '1.6rem' }}>{each.content}</Typography>
				</Flex>
			</Paper>
		)
	}

	return (
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
				<Button
					component="a"
					href="https://www.ebay.com/fdbk/feedback_profile/mic_turbo?filter=feedback_page:RECEIVED_AS_SELLER&_trksid=p2047675.l2560"
					target="_blank"
					variant="outlined"
					color="primary"
					sx={{
						fontSize: { xs: '1.5rem', s: '1.7rem' },
						mt: '6rem',
						color: 'text.secondary',
					}}
				>
					See our ebay reviews
				</Button>
			</Fade>
		</Flex>
	)
}
