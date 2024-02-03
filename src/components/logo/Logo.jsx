import React from 'react'
import logo from '../../assets/images/np-logo-dark.png'
import text from '../../assets/images/np-text-dark.png'
import Flex from '../structure/Flex'

const Logo = () => {
	return (
		<Flex align="center">
			<img
				style={{ height: '100px', width: '100px', marginRight: '10px' }}
				src={logo}
				alt="logo"
			/>
			<img style={{ height: '100px', width: 'auto' }} src={text} alt="text" />
		</Flex>
	)
}
export default Logo
