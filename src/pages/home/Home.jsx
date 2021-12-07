import { Box } from '@mui/system'
import React from 'react'
import Companies from './@components/Companies'

import { Hero } from './@components/Hero'
import { TopCategories } from './@components/TopCategories'
import { TopServices } from './@components/TopServices'

export default function Home() {
	return (
		<Box>
			<Hero />
			<Companies />
			<TopServices />
			<TopCategories />
		</Box>
	)
}
