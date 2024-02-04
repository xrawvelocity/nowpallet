import React from 'react'
import logo from '../../assets/images/np-logo-dark.png'
import text from '../../assets/images/np-text-dark.png'
import Flex from '../structure/Flex'

const Logo = () => {
	return (
		<Flex sx={{ height: { xs: '60px', md: '100px' } }} align="center">
			<img
				style={{ height: '100%', width: '100%', marginRight: '10px' }}
				src={logo}
				alt="logo"
			/>
			<img style={{ height: '100%', width: 'auto' }} src={text} alt="text" />
		</Flex>
	)
}
export default Logo
