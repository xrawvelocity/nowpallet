import React, { useState } from 'react'
import Faq from 'react-faq-component'

import Flex from '../../components/structure/Flex'
import { Title } from '../../components/typography/Title'
import { LinkButton } from '../../components/buttons/LinkButton'

import detroitSpeedSensor from '../../assets/files/Detroit 14L Turbocharger Speed Sensor Intallation Guide.pdf'
import holsetElectonic from '../../assets/files/Ford Powerstroke 7.3L Turbocharger Guide.pdf'
import holsetActuator from '../../assets/files/Pre set Actuators MkVI Bracket.pdf'
import holsetTurbo from '../../assets/files/Turbo Installation Guidelines.pdf'
import ford7_3 from '../../assets/files/Ford Powerstroke 7.3L Turbocharger Guide.pdf'
import ford6_0 from '../../assets/files/Tech Turbo Guide 6.0L PowerStroke Engine.pdf'
import garrettInstall from '../../assets/files/garrett manual.pdf'
import garrettGuide from '../../assets/files/Garrett Turbo Troubleshooting Guide.pdf'
import { Grid } from '@mui/material'

export const Guides = () => {
	const guides = [
		{
			title: 'Detroit 14L S60 Speed Sensor Installation Guide',
			image: './images/guides/Detroit 14L Turbo Speed Sensor.webp',
			pdf: detroitSpeedSensor,
		},
		{
			title: 'Holset VGT Electronic Actuator Installation Guide',
			image: './images/guides/Holset Actuator.webp',
			pdf: holsetElectonic,
		},
		{
			title: 'Holset Actuator Installation Guide',
			image: './images/guides/Holset Actuator Installation.webp',
			pdf: holsetActuator,
		},
		{
			title: 'Holset Turbo Installation Guide',
			image: './images/guides/Holset Turbocharger Installation Guide_p.webp',
			pdf: holsetTurbo,
		},
		{
			title: '7.3L Powerstroke Turbo Guide',
			image: './images/guides/Ford 7_3L Turbocharger Guide.webp',
			pdf: ford7_3,
		},
		{
			title: '6.0L Powerstoke Turbo Guide',
			image: './images/guides/Ford 6_0L GT3782VAS Turbocharger Guide_p.webp',
			pdf: ford6_0,
		},
		{
			title: 'Garrett Installation Guide',
			image: './images/guides/Garrett Turbo Installation Guide.webp',
			pdf: garrettInstall,
		},
		{
			title: 'Garrett Turbocharger Troubleshooting Guide',
			image: './images/guides/Garrett Turbo Troubleshooting Guide.webp',
			pdf: garrettGuide,
		},
	]

	const Each = ({ each }) => {
		return (
			<Grid item xs={12} md={4}>
				<Flex
					direction="column"
					align="center"
					sx={{
						bgcolor: 'white',
						height: 'auto',
						width: 'auto',
						border: '2px solid #00000035',
						borderRadius: '8px',
						padding: '3rem',
					}}
				>
					<img style={{ height: '150px' }} src={each.image} alt={each.title} />
					<h5 style={{ fontSize: '1.4rem', margin: '2rem 0' }}>{each.title}</h5>
					<LinkButton component={'a'} download href={each.pdf}>
						Download PDF
					</LinkButton>
				</Flex>
			</Grid>
		)
	}

	return (
		<Flex
			direction="column"
			align="center"
			style={{ width: '100%' }}
			sx={{ padding: { xs: '0 5% 10rem', sm: '0 15% 10rem' } }}
		>
			<Title style={{ marginTop: '4rem' }}>Guides</Title>
			<Grid container spacing={4}>
				{guides.map((guide) => {
					return <Each each={guide} />
				})}
			</Grid>
		</Flex>
	)
}
