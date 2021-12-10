import React, { useState } from 'react'
import Faq from 'react-faq-component'

import Flex from '../../components/structure/Flex'
import { Title } from '../../components/typography/Title'

export const FAQ = () => {
	const questions = {
		rows: [
			{
				title: 'Do you guarantee your work?',
				content:
					'Yes, we give a 6 month warranty on workmanship unless stated otherwise on all our rebuilds. This is for OEM applications only. There is no warranty express or implied on aftermarket or high performance upgrades.',
			},
			{
				title:
					'If I send in my turbocharger, how fast does it take to rebuild?',
				content:
					'Turn around time is usually 1-2 business days depending on condition and parts availability. Although we keep most parts in stock, there are occations we need to order something specific and that may increasy turn around time. However, we will always offer specific complition time with the estimate.',
			},
			{
				title: 'Do you charge for an estimate?',
				content: 'No, most estimates are free of charge.',
			},
			{
				title: 'Do I have to change both of the oil lines on my turbo?',
				content:
					'Yes, the warranty will be voided if you do not replace or clean your oil lines. All turbos need oil and if the oil feed line is clogged, it will fail, and FAST! Oil is used to lubricate the bearings as well as cooling the turbo. If the oil return line has any build up or restrictions in it, oil will back up in to the bearing housing. This will cause the oil to push through the seals into the exhaust or intake making the engine smoke.',
			},
			{
				title:
					'Is there a break in procedure after installing a new/rebuild turbocharger?',
				content:
					'Turbochargers usually do not need a breakin procedure, other than following the istallation instructions closely.',
			},
			{
				title: 'I still have some questions, how can I contact you guys?',
				content:
					'For further information or if you have any aditional questions, you can get in touch with our friendly team of experts today at 305-685-1061. We are here to help.',
			},
		],
	}

	const facts = {
		rows: [
			{
				title: 'How does a turbocharger work?',
				content:
					'A turbocharger takes, otherwise, unused exhaust gas from an internal combustion engine and uses it to drive a turbine that spins an air compressor, which pushes extra air into the engine cylinders, allowing them to burn more fuel per stroke.',
			},
			{
				title: 'What does a turbocharger actually do? ',
				content:
					'A turbocharger takes wasted energy and transforms it into performance and efficiency gains, allowing a smaller sized engine to perform like a, comparable, larger engine. Turbochargers can help downsized engines improve fuel economy as much as 20 to 40 percent in gas and diesel engines, respectively, when compared with larger naturally aspirated engines and still provide the same or better engine performance. In addition to improving fuel efficiency, downsized turbocharged engines can also reduce harmful exhaust emissions. ',
			},
			{
				title: 'Are turbos a performance part?',
				content:
					'Yes, but it is much more than just a performance upgrade. By replacing a larger engine with a smaller one, auto manufacturers are using turbochargers to increase engine fuel-efficiency and decrease carbon dioxide (CO2) emissions. Automotive manufacturers are being challenged to meet increasingly stringent emissions and fuel efficiency requirements; turbochargers strike the perfect balance between meeting the requirements for these new efficiency/emissions standards and dramatically increasing engine power.',
			},
			{
				title: 'What is turbo lag?',
				content:
					'Turbo lag is a delayed response between throttle input and torque delivery from a turbocharged engine. Traditionally, turbo lag comes from the time it takes exhaust gasses to spool up the turbo’s fan and pump the compressed air back into the engine. However, modern engines have virtually eliminated turbo lag through better engine mapping, more efficient compression ratios and advanced automotive technologies.',
			},
			{
				title: 'Does it require premium fuel?',
				content:
					'Not at all. Fuel requirements are set by the manufacturer but boosted vehicles don’t require anything different from their naturally aspirated counterparts.',
			},
			{
				title:
					'Does a turbocharged engine require a cool down period after driving?',
				content:
					'Cool-down periods – where drivers would have to let vehicles idle before shutting them off – are a thing of the past. Today’s vehicles have technologically advanced controllers that take into account a turbocharger’s high operating temperature and compensate for the cool down period even after the vehicle has been shut off.',
			},
			{
				title: 'Does it require special maintenance or care of any kind?',
				content:
					'No. today’s turbochargers are designed to last the lifespan of the vehicle. The truth is, boosted engines require the same amount of maintenance and care that a naturally aspirated engine does.',
			},
			{
				title: 'Does a turbocharger decrease the life of an engine?',
				content:
					'A turbocharged engine can last just as long as any other engine. It is true that forced induction adds more pressure and moving parts. For instance, a turbo fan typically rotates at 200,000 to 300,000 RPM – compared to a naturally aspirated engine which usually spins at 8,000 or 9,000 RPM – and runs at a temperature of 750 degrees Fahrenheit for diesel and 1000 degrees Fahrenheit for gasoline. That being said, boosted engines are designed and manufactured with these specifications in mind. The pistons, cylinders, engine casings, manifolds and turbo housings are all designed to withstand high pressures and temperatures for the entire lifespan of your vehicle.',
			},
			{
				title: 'Why do turbochargers fail?',
				content: `There are several main causes of turbocharger damage:
					<br />
					<br />
					Oil/lubrication
					<br />
					To work effectively, a turbo needs a constant flow of clean oil, and to keep your turbo in top condition, you need to ensure that you change the oil and oil filter regularly.
					<br />
					<br />
					This helps to prevent the build up of carbon deposits and contaminants that can cause abrasive damage to the inside of your turbocharger, reducing its efficiency and causing irreparable damage over time. Fully synthetic oil produces the least amount of carbon.
					<br />
					<br />
					Foreign objects
					<br />
					Sometimes, foreign objects like broken engine components, dust particles, small stones, dirt and leaves can enter your turbocharger, either via the compressor inlet or the turbine inlet.
					<br />
					<br />
					These can then cause impact damage and abrasion to the compressor wheels and turbine blades, which will start to reduce the efficiency of the turbo. To prevent this happening, you need to ensure that your air filter is serviced regularly, and that you check your turbo for loose connections or debris.
					<br />
					<br />
					Over-speeding
					<br />
					A turbocharger works by increasing the air pressure in an engine. If there are any leaks, cracks or poor seals between the compressor and the engine, the turbo will have to work much harder than it should have to increase this pressure. This will reduce the efficiency and boost delivered by the turbo.
					<br />
					<br />
					Other causes
					<br />
					In addition to the causes listed above, excessive exhaust gas temps (EGT’s), moisture ingress, wear and tear, fuel intake systems, the wastegate and the exhaust system can also cause damage to your turbocharger.
					`,
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
			<Title style={{ marginTop: '4rem' }}>Turbocharger Facts</Title>
			<Flex sx={{ width: { xs: '100%', sm: '75%' } }}>
				<Faq data={facts} style={{ width: '100%' }} />
			</Flex>
		</Flex>
	)
}
