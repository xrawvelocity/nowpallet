import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Fade from 'react-reveal/Fade'
import herobg from '../../../assets/images/herobg.jpg'
import { LinkButton } from '../../../components/buttons/LinkButton'
import Flex from '../../../components/structure/Flex'

export const Hero = () => {
	return (
		<Fade delay={500}>
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
					height: 'calc(100vh - 110px)',
					width: '100%',
					position: 'relative',
					backgroundImage: `url(${herobg})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundColor: 'rgba(0,0,0,0.6)',
						padding: { xs: '3rem 5% 12rem', sm: '3rem 15%' },
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Flex
						direction="column"
						justify="center"
						align="center"
						sx={{
							width: { xs: '100%', sm: '45%' },
							height: '100%',
							color: 'text.secondary',
							textAlign: 'center',
						}}
					>
						<Typography
							sx={{
								fontSize: { xs: '3rem', sm: '3.5rem', md: '4rem' },
								fontWeight: '700',
								width: { xs: '100%' },
								marginTop: { xs: '5rem' },
								lineHeight: { xs: '1.2' },
							}}
						>
							Welcome to NowPallet
						</Typography>
						<Typography
							sx={{
								fontSize: '2rem',
								fontWeight: '500',
								margin: '2rem 0 4rem',
								lineHeight: { sm: '1.7' },
							}}
						>
							Your trusted partner in wholesale distribution since 2020. We take
							pride in offering high-quality products and excellent service to
							local retailers.
						</Typography>
						<Box
							sx={{
								display: 'flex',
								flexDirection: { xs: 'column', sm: 'row' },
								alignItems: { xs: 'center' },
								justifyContent: { xs: 'center', sm: 'center' },
								width: { xs: '100%' },
								marginBottom: { xs: '5rem' },
							}}
						>
							<LinkButton
								sx={{
									fontSize: { xs: '1.4rem', s: '1.7rem' },
									alignSelf: { sm: 'start' },
									mr: { xs: '0', sm: '1.5rem' },
									mb: { xs: '2.5rem', sm: '0' },
								}}
								to="/membership"
								size="large"
							>
								Become a member
							</LinkButton>
							<LinkButton
								sx={{
									fontSize: { xs: '1.4rem', s: '1.7rem' },
									alignSelf: { sm: 'start' },
									mr: { xs: '0', sm: '1.5rem' },
									backgroundColor: '#FFFFFF',
									color: '#000000;',

									'&:hover': {
										backgroundColor: '#ddd',
									},
								}}
								to="/catalog"
								size="large"
							>
								View our Catalog
							</LinkButton>
						</Box>
					</Flex>
				</Box>
			</Box>
		</Fade>
	)
}
