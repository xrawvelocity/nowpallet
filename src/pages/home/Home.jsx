import { Box } from '@mui/system'
import React from 'react'

import { Hero } from './@components/Hero'
import { Testimonials } from './@components/Testimonials'
import { TopCategories } from './@components/TopCategories'

export default function Home() {
	return (
		<Box>
			<Hero />
			<Testimonials />
			<TopCategories />
		</Box>
	)
}
