import { Title } from '../../components/typography/Title'
import React from 'react'
import Flex from '../../components/structure/Flex'
import { Typography } from '@mui/material'

const Sponsorship = () => {
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
				MIC Turbo Product Sponsorship Program
			</Title>
			<Typography sx={{ alignSelf: 'flex-start' }}>
				<SectionTitle>Requirements / Requisits </SectionTitle>
				<ul>
					<li>
						Be able to promote MIC Turbo and its products in a knowledgeable and
						positive manner.
					</li>
					<li>Be actively involved in the car show/racing scene.</li>
					<li>Communicate any media exposure with MIC Turbo.</li>
				</ul>
			</Typography>
			<Typography>
				<br />
				<br />
				<SectionTitle>Program Details</SectionTitle>
				MIC Turbo will provide any product in our current line to the
				sponsorship recipient at discounted prices (prices may vary depending on
				specific product and are subject to change without prior notification).
				All sponsorship recipients must:
				<br />
				<br />
				<ul>
					<li>
						Submit a digital photo of the purchased product after installation
						in your vehicle.
					</li>
					<li>
						Affix an MIC Turbo and Injection logo prominently on your vehicle.
					</li>
					<li>
						Provide notice to MIC Turbo prior to participation in any nationally
						advertised car show or racing event.
					</li>
				</ul>
				<br />
				<br />
				As a special incentive, MIC will refund the cost of the product should
				you win 1st or 2nd place in any nationally advertised racing or car show
				event within one year of your sponsorship grant date. To receive this
				refund, submit your original purchase receipt along with written
				documentation from the event promoter. A designated MIC Turbo
				representative will review all documents for validity prior to
				authorizing the refund.
				<br />
				<br />
				All sponsorship awards will last for one year only. MIC reserves the
				right to terminate the program at any time without prior notification.
			</Typography>
			<Typography>
				<br />
				<br />
				<SectionTitle>Summiting your Request</SectionTitle>
				Requests for sponsorships are accepted via e-mail ONLY to
				micturbo@live.com (Please do not call, since our reprecentatives will
				not be able to assist you regarding your request). You MUST include the
				following information in your e-mail. If ANY of the following
				information is missing, your request will be automatically declined.
				<br />
				<br />
				<ul>
					<li>Your Name and mailing address</li>
					<li>Day time phone number</li>
					<li>Make, model and year of vehicle</li>
					<li>A digital photo of the vehicle (interior and exterior)</li>
					<li>Features currently on the vehicle</li>
					<li>Past show/racing titles (if applicable)</li>
					<li>Events you are scheduled to attend during the next year</li>
					<li>Why you would like for MIC Turbo to sponsor the vehicle</li>
				</ul>
				<br />
				<br />
				Please note:
				<br />
				Sponsorship recipients will agree to indemnify and hold harmless MIC
				Turbo and Injection, its subsidiaries, officers, employees, agents and
				appointees, from and against any losses, costs, damages, and expenses,
				including attorney's fees, arising out of, or resulting from, claims or
				suits for personal injuries with any racing or driving activities of the
				sponsorship recipient.
			</Typography>
		</Flex>
	)
}

export default Sponsorship
