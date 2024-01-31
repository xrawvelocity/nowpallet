import { Typography, Link } from '@mui/material'
import React from 'react'
import Flex from '../../components/structure/Flex'
import { Box } from '@mui/system'
import Logo from '../../components/logo/Logo'
import { Link as RouterLink } from 'react-router-dom'

export const Footer = () => {
	return (
		<Flex
			component="footer"
			justify="space-between"
			align="center"
			sx={{
				bgcolor: 'permanent.black2',
				padding: { xs: '20px 5%', sm: '20px 15%' },
				borderTop: '2px solid #000',
				width: '100%',
				zIndex: '100',
				height: '200px',
				color: 'permanent.white1',
			}}
		>
			<Flex sx={{ width: { xs: '45%', md: '30%' } }} direction="column">
				<Typography>(786) 751-7751</Typography>
				<Typography
					sx={{
						display: 'inline',
						my: '.5rem',
						'& > a, & > a:hover, & > a:visited': { color: 'permanent.blue' },
					}}
				>
					<a href="mailto:sales@nowpallet.com">sales@nowpallet.com</a>
				</Typography>
			</Flex>
			<Box
				sx={{
					height: { xs: '4rem', md: '8rem' },
					width: '30%',
					display: { xs: 'none', md: 'flex' },
					justifyContent: 'center',
					marginLeft: { xs: '-3rem', md: '0' },
					marginTop: { xs: '-3rem', md: '3rem' },
				}}
			>
				<Logo />
			</Box>

			<Flex
				direction="column"
				align="flex-end"
				sx={{ width: { xs: '45%', md: '30%' } }}
			>
				<Link
					component={RouterLink}
					to="/privacy-policy"
					sx={{ color: 'permanent.blue' }}
				>
					Privacy Policy
				</Link>
				<Link
					component={RouterLink}
					to="/terms-and-conditions"
					sx={{ color: 'permanent.blue' }}
				>
					Terms and Conditions
				</Link>
				{/* Add more links as needed */}
				<Typography sx={{ color: 'permanent.gray1' }}>
					© {new Date().getFullYear()} Now Pallet
				</Typography>
				<Typography sx={{ color: 'permanent.gray1', whiteSpace: 'nowrap' }}>
					Software by{' '}
					<Typography
						sx={{
							display: 'inline',
							'& > a, & > a:hover, & > a:visited': {
								color: 'permanent.blue',
							},
						}}
					>
						<a
							href="https://www.vic-dev.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vic Dev
						</a>
					</Typography>
				</Typography>
			</Flex>
		</Flex>
	)
}
