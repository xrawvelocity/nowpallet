import { Box } from '@mui/system'
import React, { useEffect } from 'react'

import { Hero } from './@components/Hero'
import { TopCategories } from './@components/TopCategories'
import { TopServices } from './@components/TopServices'
import { Testimonials } from './@components/Testimonials'
import { Contact } from './@components/Contact'

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
			<TopServices />
			<TopCategories />
			<Testimonials />
			<Contact />
		</Box>
	)
}
