import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'

import Flex from '../../components/structure/Flex'
import { Title } from '../../components/typography/Title'

export const Admin = () => {
	return (
		<Flex
			direction="column"
			style={{ width: '100%' }}
			sx={{
				'& > *': { padding: { xs: '0 5%', sm: '0 15%' } },
				py: { xs: '4rem', sm: '8rem' },
			}}
		>
			<Title style={{ textAlign: 'center', width: '100%' }}>Admin</Title>
			<Flex
				justify="center"
				direction={{ xs: 'column', md: 'row' }}
				sx={{ width: '100%' }}
			></Flex>
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
					admin page goes here
				</Typography>
			</Flex>
		</Flex>
	)
}
