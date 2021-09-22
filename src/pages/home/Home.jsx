import { Box } from '@mui/system'
import React from 'react'

import { Hero } from './@components/Hero'
import { TopCategories } from './@components/TopCategories'

export default function Home() {
	return (
		<Box>
			<Hero />
			<TopCategories />
		</Box>
	)
}
