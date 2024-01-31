import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'

import Flex from '../../components/structure/Flex'
import { Title } from '../../components/typography/Title'

export const Privacy = () => {
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
				Privacy Policy
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
						This <strong>Privacy Policy</strong> explains how NowPallet (
						<em>"we," "us,"</em> or <em>"our"</em>) collects, uses, and
						safeguards your personal information when you use our website.
					</p>
					<br />

					<p>
						<strong>Information We Collect</strong>
					</p>
					<br />
					<ol>
						<li>
							<strong>Contact Information:</strong> This may include your name,
							email address, phone number, and company details when you reach
							out to us or submit a contact form.
						</li>
						<li>
							<strong>Order Information:</strong> When you place an order, we
							collect information necessary for processing and delivering your
							order, including billing and shipping details.
						</li>
						<li>
							<strong>Website Usage Information:</strong> We may collect
							non-personal information such as your IP address, browser type,
							and device information when you visit our website.
						</li>
					</ol>
					<br />
					<p>
						<strong>How We Use Your Information</strong>
					</p>
					<br />
					<ol>
						<li>
							We use the collected information for the following purposes:
							<ol type="a">
								<br />
								<li>
									<strong>Order Processing:</strong> To fulfill your orders and
									provide you with the products and services you've requested.
								</li>
								<li>
									<strong>Customer Support:</strong> To respond to your
									inquiries, provide customer support, and communicate with you
									about your orders.
								</li>
								<li>
									<strong>Marketing and Communication:</strong> With your
									consent, we may send you promotional emails or newsletters.
									You can opt-out of these communications at any time.
								</li>
								<li>
									<strong>Website Improvement:</strong> To analyze website usage
									and improve our services, products, and user experience.
								</li>
							</ol>
						</li>
					</ol>
					<br />
					<p>
						<strong>Information Sharing</strong>
					</p>
					<br />
					<p>
						We do not sell, trade, or otherwise transfer your personal
						information to third parties without your consent, except as
						required by law or in the context of providing our services.
					</p>
					<br />

					<p>
						<strong>Data Security</strong>
					</p>
					<br />
					<p>
						We implement reasonable security measures to protect your personal
						information from unauthorized access, disclosure, alteration, and
						destruction.
					</p>
					<br />

					<p>
						<strong>Your Choices</strong>
					</p>
					<br />
					<p>You have the right to:</p>
					<br />
					<ol>
						<li>
							<strong>Access:</strong> Request access to the personal
							information we hold about you.
						</li>
						<li>
							<strong>Correction:</strong> Update or correct your personal
							information.
						</li>
						<li>
							<strong>Deletion:</strong> Request the deletion of your personal
							information.
						</li>
					</ol>
					<br />
					<p>
						<strong>Changes to this Privacy Policy</strong>
					</p>
					<br />
					<p>
						We may update this Privacy Policy periodically. We will notify you
						of any changes by posting the updated policy on our website.
					</p>
					<br />

					<p>
						<strong>Contact Information</strong>
					</p>
					<br />
					<p>
						If you have any questions or concerns about this Privacy Policy,
						please contact us at <strong>[contact email or address]</strong>.
					</p>
					<br />
				</Typography>
			</Flex>
		</Flex>
	)
}
