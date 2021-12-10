import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import Companies from './@components/Companies'

import { Hero } from './@components/Hero'
import { TopCategories } from './@components/TopCategories'
import { TopServices } from './@components/TopServices'

export default function Home() {
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, [])
	return (
		<Box>
			<Hero />
			<Companies />
			<TopServices />
			<TopCategories />
		</Box>
	)
}
