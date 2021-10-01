import { Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

import logo from '../../assets/images/micturbologo.png'
import creditCards from '../../assets/images/creditCards.png'
import Flex from '../../components/structure/Flex'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

export const Footer = () => {
	return (
		<Flex
			component="footer"
			justify="space-between"
			align="center"
			sx={{
				padding: { xs: '20px 5%', sm: '20px 15%' },
				width: '100%',
				height: '200px',
				zIndex: '100',
				borderTop: '2px solid #000',
				bgcolor: 'permanent.black2',
				color: 'permanent.white1',
			}}
		>
			<Flex style={{ width: '30%' }} direction="column">
				<Link to={'/store'}>
					<Typography
						sx={{
							color: 'permanent.white1',
							':hover': { color: 'primary.main' },
						}}
						variant="h6"
					>
						Store
					</Typography>
				</Link>
				<Link to={'/about'}>
					<Typography
						sx={{
							color: 'permanent.white1',
							':hover': { color: 'primary.main' },
						}}
						variant="h6"
					>
						About
					</Typography>
				</Link>
				<Link to={'/contact'}>
					<Typography
						sx={{
							color: 'permanent.white1',
							':hover': { color: 'primary.main' },
						}}
						variant="h6"
					>
						Contact
					</Typography>
				</Link>
				<Link to={'/faq'}>
					<Typography
						sx={{
							color: 'permanent.white1',
							':hover': { color: 'primary.main' },
						}}
						variant="h6"
					>
						FAQ
					</Typography>
				</Link>
			</Flex>
			<Box
				sx={{
					height: { xs: '4rem', sm: '4rem' },
					width: '30%',
					display: { xs: 'none', sm: 'flex' },
					justifyContent: 'center',
					marginLeft: { xs: '-3rem', sm: '0' },
					marginTop: '.5rem',
				}}
			>
				<img src={logo} alt="logo" style={{ height: '100%', width: 'auto' }} />
			</Box>

			<Flex direction="column" align="flex-end" style={{ width: '30%' }}>
				<Box sx={{ height: '35px', width: 'auto' }}>
					<img
						src={creditCards}
						alt="cards"
						style={{ height: '100%', width: 'auto', objectFit: 'cover' }}
					/>
				</Box>
				<Flex
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
					}}
					sx={{ mt: '2rem' }}
				>
					<a
						href="https://www.facebook.com/micturbo"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							marginRight: '2rem',
						}}
					>
						<FacebookIcon
							style={{
								height: '3rem',
								width: '3rem',
								color: '#4267B2',
								cursor: 'pointer',
							}}
						/>
					</a>
					<a
						href="https://www.instagram.com/mic_turbo"
						target="_blank"
						rel="noopener noreferrer"
					>
						<InstagramIcon
							style={{
								height: '3rem',
								width: '3rem',
								color: '#E1306C',
								cursor: 'pointer',
							}}
						/>
					</a>
				</Flex>
			</Flex>
		</Flex>
	)
}
