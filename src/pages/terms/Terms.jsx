import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'

import Flex from '../../components/structure/Flex'
import { Title } from '../../components/typography/Title'

export const Terms = () => {
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, [])

	return (
		<Flex
			direction="column"
			style={{ width: '100%' }}
			sx={{
				'& > *': { padding: { xs: '0 5%', sm: '0 15%' } },
				py: { xs: '4rem', sm: '8rem' },
			}}
		>
			<Title style={{ textAlign: 'center', width: '100%' }}>
				Terms and Conditions
			</Title>

			<Flex
				sx={{
					width: '100%',
					height: 'auto',
					flexDirection: { xs: 'column !important', sm: 'row !important' },
					alignItems: { xs: 'center !important', sm: 'flex-start !important' },
				}}
			>
				<Typography
					variant="h6"
					sx={{
						width: { xs: '100%', sm: '100%' },
						ml: { xs: '0', sm: '8rem' },
					}}
				>
					<p>
						<strong>1. Acceptance of Terms</strong>
					</p>
					<br />
					<p>
						By accessing and using the NowPallet website, you agree to comply
						with and be bound by these Terms and Conditions. If you do not agree
						to these terms, please do not use our website.
					</p>
					<br />

					<p>
						<strong>2. Use of Website</strong>
					</p>
					<br />
					<ol>
						<li>You must be at least 18 years old to use this website.</li>
						<li>You agree to use the website for lawful purposes only.</li>
						<li>
							You will not engage in any activity that may disrupt or interfere
							with the proper functioning of the website.
						</li>
						<li>
							We reserve the right to suspend or terminate your access to the
							website at our discretion, without notice, for any reason,
							including if we believe you have violated these Terms and
							Conditions.
						</li>
					</ol>
					<br />

					<p>
						<strong>3. Privacy Policy</strong>
					</p>
					<br />
					<p>
						Your use of the website is also governed by our Privacy Policy,
						which can be found{' '}
						<strong>
							<a style={{ color: 'blue' }} href="/privacy-policy">
								here
							</a>
						</strong>
						. Please review this policy to understand how we collect, use, and
						protect your personal information.
					</p>
					<br />

					<p>
						<strong>4. Intellectual Property</strong>
					</p>
					<br />
					<p>
						All content on this website, including but not limited to text,
						graphics, logos, images, and software, is the property of NowPallet
						and is protected by copyright and other intellectual property laws.
						You may not use, reproduce, or distribute any content from this
						website without our express written consent.
					</p>
					<br />

					<p>
						<strong>5. Disclaimer</strong>
					</p>
					<br />
					<ol>
						<li>
							We make every effort to provide accurate and up-to-date
							information on our website, but we do not guarantee the accuracy,
							completeness, or reliability of any content.
						</li>
						<li>
							Your use of the website is at your own risk. We are not
							responsible for any damages or losses resulting from your use of
							the website.
						</li>
					</ol>
					<br />

					<p>
						<strong>6. Limitation of Liability</strong>
					</p>
					<br />
					<p>
						In no event shall NowPallet be liable for any indirect, incidental,
						special, or consequential damages arising out of or in connection
						with your use of the website.
					</p>
					<br />

					<p>
						<strong>7. Links to Third-Party Websites</strong>
					</p>
					<br />
					<p>
						Our website may contain links to third-party websites. These links
						are provided for your convenience, but we do not endorse or
						guarantee the content on these websites. Your use of third-party
						websites is at your own risk.
					</p>
					<br />

					<p>
						<strong>8. Changes to Terms and Conditions</strong>
					</p>
					<br />
					<p>
						We reserve the right to modify these Terms and Conditions at any
						time. Any changes will be effective immediately upon posting on the
						website. It is your responsibility to review these terms regularly.
					</p>
					<br />

					<p>
						<strong>9. Contact Information</strong>
					</p>
					<br />
					<p>
						If you have any questions or concerns regarding these Terms and
						Conditions, please contact us at{' '}
						<strong>
							<a href="mailto:sales@nowpallet.com">sales@nowpallet.com</a>
						</strong>
						.
					</p>
					<br />
				</Typography>
			</Flex>
		</Flex>
	)
}
