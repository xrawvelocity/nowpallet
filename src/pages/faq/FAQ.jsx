import React, { useState } from 'react'
import Faq from 'react-faq-component'

import Flex from '../../components/structure/Flex'
import { Title } from '../../components/typography/Title'

export const FAQ = () => {
	const questions = {
		rows: [
			{
				title: 'Do you guarantee on-time delivery?',
				content:
					'Yes, we take pride in our strategically located distribution network, ensuring timely deliveries to keep your business moving forward.',
			},
			{
				title: 'What types of businesses do you cater to?',
				content:
					'We cater to a wide range of businesses, including local retailers, boutiques, retail chains, and e-commerce sellers. Our services are tailored to meet the specific needs of each type of business.',
			},
			{
				title: 'How can I place an order?',
				content:
					'You can place an order by contacting our sales team through our website or by reaching out directly. We will guide you through the process and provide all the necessary information.',
			},
			{
				title: 'How can I partner with NowPallet?',
				content:
					"To partner with us, simply reach out to discuss your wholesale needs, request a quote, or learn more about how we can contribute to your business's growth. Contact us through our website or by using the provided contact information.",
			},
			{
				title: 'Do you offer discounts for bulk orders?',
				content:
					'Yes, we offer competitive pricing and discounts for bulk orders. The specific discounts may vary depending on the products and quantities you order. Contact our sales team for customized pricing.',
			},
			{
				title: 'What measures do you take to ensure product quality?',
				content:
					'We have rigorous quality assurance processes in place to ensure that every product meets our high standards. We work closely with our suppliers and conduct regular quality checks to maintain product excellence.',
			},
			{
				title: 'Where are your distribution centers located?',
				content:
					'We have a vast distribution network across Florida, Texas, California, Washington, and New Jersey. These strategic locations allow us to provide optimal delivery services to our customers.',
			},
		],
	}

	return (
		<Flex
			direction="column"
			align="center"
			style={{ width: '100%' }}
			sx={{ padding: { xs: '0 5% 10rem', sm: '0 15% 10rem' } }}
		>
			<Title style={{ marginTop: '4rem' }}>Frequently Asked Questions</Title>
			<Flex sx={{ width: { xs: '100%', sm: '75%' } }}>
				<Faq data={questions} style={{ width: '100%' }} />
			</Flex>
		</Flex>
	)
}
