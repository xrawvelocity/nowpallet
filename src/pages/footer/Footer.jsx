import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Typography, Link, Box } from '@mui/material'
import Flex from '../../components/structure/Flex'
import Logo from '../../components/logo/Logo'

const Footer = () => {
	return (
		<Flex
			component="footer"
			direction={{ xs: 'column', md: 'row' }}
			justify="space-between"
			align="center"
			sx={{
				bgcolor: 'permanent.black2',
				padding: { xs: '20px 5%', sm: '60px 15%' },
				borderTop: '2px solid #000',
				width: '100%',
				zIndex: '100',
				height: 'auto',
				color: 'permanent.white1',
			}}
		>
			{/* Logo */}
			<Flex
				direction="column"
				align="flex-start"
				sx={{ width: { xs: '100%', md: '20%' } }}
			>
				<Flex direction="column" align="center">
					<Box
						sx={{
							height: { xs: '4rem', md: '6rem' },
							width: { xs: '100%', md: '20%' },
							display: 'flex',
							justifyContent: 'center',
							mb: { xs: '2rem', md: '0' },
						}}
					>
						<Logo />
					</Box>
					<Typography sx={{ color: 'permanent.gray1' }}>
						© {new Date().getFullYear()} Now Pallet
					</Typography>
					<Typography
						sx={{
							color: 'permanent.gray1',
							whiteSpace: 'nowrap',
							'& > a, & > a:hover, & > a:visited': { color: 'permanent.blue' },
						}}
					>
						Software by{' '}
						<Link
							href="https://www.vic-dev.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vic Dev
						</Link>
					</Typography>
				</Flex>
			</Flex>

			{/* Navigation Links */}
			<Flex
				direction={{ xs: 'column', md: 'row' }}
				align="center"
				justify="space-around"
				sx={{ width: { xs: '100%', md: '80%' }, mb: { xs: '2rem', md: '0' } }}
			>
				<Flex
					direction={{ xs: 'column', md: 'row' }}
					align="center"
					sx={{ width: { xs: '100%', md: '40%' }, mb: { xs: '2rem', md: '0' } }}
				>
					<Flex direction="column" sx={{ width: { xs: '100%', md: '50%' } }}>
						<Typography
							component={RouterLink}
							to="/catalog"
							variant="body1"
							sx={{ color: 'permanent.white1', mb: '0.5rem' }}
						>
							Catalog
						</Typography>
						<Typography
							component={RouterLink}
							to="/about"
							variant="body1"
							sx={{ color: 'permanent.white1', mb: '0.5rem' }}
						>
							About Us
						</Typography>
						<Typography
							component={RouterLink}
							to="/contact"
							variant="body1"
							sx={{ color: 'permanent.white1', mb: '0.5rem' }}
						>
							Contact
						</Typography>
						<Typography
							component={RouterLink}
							to="/membership"
							variant="body1"
							sx={{ color: 'permanent.white1', mb: '0.5rem' }}
						>
							Membership
						</Typography>
					</Flex>

					<Flex direction="column" sx={{ width: { xs: '100%', md: '50%' } }}>
						<Typography
							component={RouterLink}
							to="/faq"
							variant="body1"
							sx={{ color: 'permanent.white1', mb: '0.5rem' }}
						>
							FAQ
						</Typography>
						<Typography
							component={RouterLink}
							to="/privacy-policy"
							variant="body1"
							sx={{ color: 'permanent.white1', mb: '0.5rem' }}
						>
							Privacy Policy
						</Typography>
						<Typography
							component={RouterLink}
							to="/terms-and-conditions"
							variant="body1"
							sx={{ color: 'permanent.white1', mb: '0.5rem' }}
						>
							Terms and Conditions
						</Typography>
						<Typography
							component={RouterLink}
							to="/my-account"
							variant="body1"
							sx={{ color: 'permanent.white1', mb: '0.5rem' }}
						>
							My Account
						</Typography>
					</Flex>
				</Flex>
				<Flex
					direction="column"
					align="flex-end"
					sx={{ width: { xs: '100%', md: '60%' } }}
				>
					<Typography sx={{ color: 'permanent.gray1', lineHeight: '28px' }}>
						4140 E Marginal Way S, Seattle, WA 98134
						<br />
						7361 Ethel Ave, North Hollywood, CA 91605
						<br />
						200 Syracuse Ct Lakewood, NJ 08701
						<br />
						1919 golden heights rd ste 221 Fort Worth, TX 6177
						<br />
						13230 SW 132nd Ave Miami, FL 33186
					</Typography>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default Footer
