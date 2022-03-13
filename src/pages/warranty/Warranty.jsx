import { Title } from '../../components/typography/Title'
import React from 'react'
import Flex from '../../components/structure/Flex'
import { Typography } from '@mui/material'

const Warranty = () => {
	const SectionTitle = ({ children }) => {
		return (
			<Typography
				sx={{
					fontSize: { xs: '1.8rem', md: '2rem' },
					fontWeight: '500',
					mb: '16px',
				}}
			>
				{children}
			</Typography>
		)
	}

	return (
		<Flex
			direction="column"
			align="center"
			style={{ width: '100%' }}
			sx={{ padding: { xs: '0 5% 10rem', sm: '0 15% 10rem' } }}
		>
			<Title style={{ marginTop: '4rem' }}>
				Warranty, Exchange, and Returns
			</Title>
			<Typography>
				<SectionTitle>Warranty</SectionTitle>
				<red>
					All defective parts will need to be inspected by MIC Turbo prior to
					warranty approval.
				</red>
				<br />
				<br />
				All New Turbocharger and parts carry a full one year manufacturer
				warranty against defects.
				<br />
				<br />
				All in house rebuilds and performance upgrades carry 3 months warranty
				against parts defects, and 1 year for new Cartridge ( Core Assembly,
				CHRA ) installations. Warranty starts from the date shown on the
				original invoice. Any warranty claim will require inspection of the
				Turbocharger Product in the original condition it was removed (Any
				cleaning, disassembly, or alteration will void warranty). MIC Turbo will
				replace or repair the defective part upon warranty approval at our
				discretion. Refunds will only be offered if defective part can't be
				repaired or replaced.
				<br />
				<br />
				For any warranty claims, please contact us prior to sending the parts at{' '}
				<blue>305-685-1061</blue> or thought e-mail at{' '}
				<blue>Micturbo@live.com</blue>
				<br />
				<br />
				If a warranty claim results in MIC Turbo providing a Turbocharger
				Product replacement, then the
				<br />
				<br />
				Warranty Period for the Turbocharger Product replacement will be the
				unexpired portion of the original Warranty Period for the Turbocharger
				Product that was replaced.
				<br />
				<br />
				Warranty does not cover miss use, alterations, foreign part damage,
				abuse, negligence, oil starvation or any other installation related
				damages.
				<br />
				<br />
				<b>
					MIC TURBO & INJECTION, INC. shall not be liable to Customer under any
					circumstances for any special, incidental or consequential damages,
					including without limitation, damage to or loss of property other than
					for Turbocharger Products; damages incurred in installation, repair or
					replacement; lost profits, revenue or opportunity; loss of use; losses
					resulting from or related to downtime of Turbocharger Products; the
					cost of replacement transportation, power, or compression; the cost of
					substitute products; or claims of Customer’s customers for such
					damages, howsoever caused, and whether based on warranty, contract,
					and/or tort (including negligence, strict liability or otherwise). The
					total liability of MIC TURBO & INJECTION, INC arising out of the
					performance or nonperformance hereunder or its obligations in
					connection with the design, manufacture, sale, delivery, and/or use of
					MIC TURBO & INJECTION, INC's turbochargers and related parts and/or
					services shall in no circumstance exceed a sum equal to the amount
					actually paid to MIC TURBO & INJECTION, INC for Turbocharger Products
					subject to Customer’s warranty claims.
				</b>
			</Typography>
			<Typography>
				<br />
				<br />
				<SectionTitle>Exchange</SectionTitle>
				We will accept exchanges for up to 15 days from the day of purchase.
				Only for in stock parts, all out of stock parts will be subject to 10%
				processing fee.
				<br />
				<br />
				Please give us a call with any questions regarding exchanges, or to
				request approval.
			</Typography>
			<Typography>
				<br />
				<br />
				<SectionTitle>Returns</SectionTitle>
				MIC Turbo accept returns for 7 days from the day of purchase with a 30%
				restocking and handling fee. This fee will be waived if parts received
				not as described, or errors during shipping.
				<br />
				<br />
				Please contact us with any return questions.
			</Typography>
			<Typography>
				<br />
				<br />
				<SectionTitle>Refunds</SectionTitle>
				All refunds upon aproval will be subject to a 3% Credit Card Processing
				Fee, unless original payment was in the form of cash, money order, or
				company check.
				<br />
				All refunds will be issue in the form of store credit, unless previus
				agreement is made between MIC Turbo and the customer.
				<br />
				Credit Card Refunds will usually take anywhere from 3-10 business days
				to appear on your statement.
				<br />
				Paypal Refunds will usually reflect on your account in a couple of
				minutes.
				<br />
				<br />
				Please contact us with any questions regarding refunds.
			</Typography>
		</Flex>
	)
}

export default Warranty
