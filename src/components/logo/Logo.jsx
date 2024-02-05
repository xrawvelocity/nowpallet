import React from 'react'
import logo from '../../assets/images/np-logo-dark.png'
import text from '../../assets/images/np-text-dark.png'
import logoVert from '../../assets/images/np-logo-vert-dark.png'
import Flex from '../structure/Flex'

const Logo = () => {
	return (
		<>
			<Flex
				sx={{ height: '80px', display: { xs: 'none', md: 'flex' } }}
				align="center"
			>
				<img
					style={{ height: '100%', width: '100%', marginRight: '10px' }}
					src={logo}
					alt="logo"
				/>
				<img style={{ height: '120%', width: 'auto' }} src={text} alt="text" />
			</Flex>
			<Flex sx={{ height: '80px', display: { xs: 'flex', md: 'none' } }}>
				<img
					style={{ height: '100%', width: '100%', marginLeft: '20px' }}
					src={logoVert}
					alt="logo"
				/>
			</Flex>
		</>
	)
}
export default Logo
