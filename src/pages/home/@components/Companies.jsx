import React from 'react'
import companiesImg from '../../../assets/images/companies.jpg'
import Flex from '../../../components/structure/Flex'

const Companies = () => {
	return (
		<Flex
			sx={{
				display: 'flex',
				width: '100%',
				padding: { xs: '0', sm: '0 15%' },
			}}
		>
			<img
				src={companiesImg}
				alt="List of companies"
				style={{ width: '100%' }}
			/>
		</Flex>
	)
}

export default Companies
