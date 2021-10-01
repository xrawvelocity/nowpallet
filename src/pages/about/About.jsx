import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import aboutPicture from '../../assets/images/aboutPicture.webp'
import Flex from '../../components/structure/Flex'

export const About = () => {
	return (
		<Flex direction="column" align="center" style={{ width: '100%' }}>
			<Box sx={{ overflow: 'hidden', my: '6rem' }}>
				<img
					src={aboutPicture}
					alt="about"
					style={{ marginBottom: '-150px' }}
				/>
			</Box>
			<Typography variant="h6" sx={{ mb: '6rem' }}>
				Our company has been servicing Turbochargers and Diesel Fuel Injection
				Parts for over 31 years. Established in 1968 with the name L& J Diesel,
				we changed the name to Miami International Components, Inc in 1979 and
				in 2007 to the current name MIC Turbo and Injection. “MIC” stands for
				our previous name Miami International Components. We overhaul most
				turbochargers between $250.00 - $350.00 if your turbo requires only a
				basic rebuild (bearings, seals, balancing, and cleaning). In case your
				turbocharger requires extra parts, we will give you a free quote. If you
				approve the quote, we will promptly repair the turbocharger (1-3 Days in
				most cases). Once the repairs are done we will require payment via any
				major credit card, PayPal, bank transfer, or cash in person. If the
				quote is not approve by you, we will ship your turbo back to you for the
				shipping cost only, or it can pick it up at no charge. We also sell and
				repair diesel fuel pumps, injectors (gas and diesel), supply pumps, and
				many more parts of the diesel fuel system. Please contact us with any
				questions you may have and one of our representatives will gladly assist
				you. Our company stocks a high variety automotive, high performance,
				commercial, and marine turbochargers, diesel fuel pumps, injectors,
				diesel fuel pump parts, injector nozzles, and turbocharger parts.
			</Typography>
		</Flex>
	)
}
