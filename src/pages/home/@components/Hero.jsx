import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

import background from '../../../assets/images/turbowallpaper.png'
import { LinkButton } from '../../../components/buttons/LinkButton'
import Flex from '../../../components/structure/Flex'

export const Hero = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: {
					xs: 'column-reverse',
					sm: 'column-reverse',
					md: 'row',
				},
				alignItems: { xs: 'center', sm: 'center', md: 'center' },
				justifyContent: {
					xs: 'center',
					sm: 'center',
					md: 'space-between',
				},
				height: { xs: 'calc(95vh - 110px)', sm: 'calc(100vh - 110px)' },
				width: '100%',
				padding: { xs: '3rem 0 3rem', sm: '3rem 0 9rem' },
				position: 'relative',
			}}
		>
			<Flex
				direction="column"
				sx={{
					width: { xs: '100%', sm: '100%', md: '45%' },
					alignItems: { xs: 'center', sm: 'flex-start' },
				}}
			>
				<Typography
					sx={{
						fontSize: { xs: '3rem', sm: '3.5rem', md: '4rem' },
						fontWeight: '700',
						textAlign: { xs: 'center', sm: 'start' },
						width: { xs: '100%' },
						marginTop: { xs: '5rem' },
						lineHeight: { xs: '1.2' },
					}}
				>
					Do you need to rebuild, overhaul, or upgrade a turbocharger?
				</Typography>
				<Typography
					sx={{
						fontSize: '2rem',
						fontWeight: '500',
						margin: '2rem 0 4rem',
						textAlign: { xs: 'center', sm: 'start' },
						lineHeight: { sm: '1.7' },
					}}
				>
					We've provided great service to our customers since 1968; whether its
					for marine, automotive, industrial, trucking, construction, high
					performance, or agriculture.
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						alignItems: { xs: 'center' },
						justifyContent: { xs: 'center', sm: 'flex-start' },
						width: { xs: '100%' },
						marginBottom: { xs: '5rem' },
					}}
				>
					<LinkButton
						sx={{
							fontSize: { xs: '1.4rem', s: '1.7rem' },
							alignSelf: { sm: 'start' },
							mr: { xs: '0', sm: '1.5rem' },
						}}
						to="/store"
						size="large"
					>
						Shop Now
					</LinkButton>
					<Button
						component={Link}
						to="/contact"
						variant="text"
						color="primary"
						sx={{
							fontSize: { xs: '1.5rem', s: '1.7rem' },
							alignSelf: { sm: 'start' },
							mt: { xs: '3rem', sm: '0' },
							ml: { xs: '0', sm: '1.5rem' },
							color: 'text.main',
						}}
						size="large"
					>
						Contact Us <ChevronRightIcon />
					</Button>
				</Box>
			</Flex>
			<Box
				sx={{
					height: { xs: '25rem', sm: '40rem', md: '55rem' },
					width: { xs: '100%', sm: '100%', md: '50%' },
					marginLeft: { md: '10rem' },
					boxShadow: 15,
					borderRadius: '20px',
					objectPosition: { xs: 'bottom', sm: 'left', md: '-50px' },
				}}
			>
				<img
					src={background}
					alt="turbo"
					style={{
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						overflow: 'hidden',
						borderRadius: '20px',
						filter: 'grayscale(1)',
					}}
				/>
			</Box>
			<KeyboardArrowDownIcon
				sx={{
					position: 'absolute',
					bottom: '5%',
					width: '100%',
					height: '4rem',
					margin: '0 auto',
				}}
				size="large"
			/>
		</Box>
	)
}
