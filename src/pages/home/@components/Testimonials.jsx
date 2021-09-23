import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Flex from '../../../components/structure/Flex'
import { Title } from '../../../components/typography/Title'

export const Testimonials = () => {
	return (
		<Flex direction="column" align="center" sx={{ m: '6rem 0 9rem' }}>
			<Title>Customer Testimonials</Title>
			<Flex
				sx={{
					flexDirection: { xs: 'column !important', sm: 'row !important' },
					justifyContent: { sm: 'space-between !important' },
					width: '100%',
				}}
			>
				<Box
					sx={{
						width: { xs: '100%', sm: '32%' },
						height: { xs: '188px', sm: '168px' },
						mb: { xs: '2rem', sm: '0' },
					}}
				>
					<iframe
						src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frichard.mattheisen%2Fposts%2F10224980866130749&show_text=true"
						width="100%"
						height="100%"
						style={{ border: 'none', overflow: 'hidden' }}
						scrolling="no"
						frameBorder="0"
						allowFullscreen="true"
						allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					></iframe>
				</Box>
				<Box
					sx={{
						width: { xs: '100%', sm: '32%' },
						height: { xs: '251px', sm: '231px' },
						mb: { xs: '2rem', sm: '0' },
					}}
				>
					<iframe
						src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbolingchris%2Fposts%2F10208478404874718&show_text=true"
						width="100%"
						height="100%"
						style={{ border: 'none', overflow: 'hidden' }}
						scrolling="no"
						frameBorder="0"
						allowFullscreen="true"
						allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					></iframe>
				</Box>
				<Box
					sx={{
						width: { xs: '100%', sm: '32%' },
						height: { xs: '188px', sm: '168px' },
						mb: { xs: '2rem', sm: '0' },
					}}
				>
					<iframe
						src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmartin.j.padilla.56%2Fposts%2F10157635268107363&show_text=true"
						width="100%"
						height="100%"
						style={{ border: 'none', overflow: 'hidden' }}
						scrolling="no"
						frameBorder="0"
						allowFullscreen="true"
						allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					></iframe>
				</Box>
			</Flex>
		</Flex>
	)
}
