import { Box, Grid, Paper, Typography } from '@mui/material'
import emailjs, { init } from 'emailjs-com'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { LinkButton } from '../../../components/buttons/LinkButton'

import { InputField } from '../../../components/inputs/InputField'
import Flex from '../../../components/structure/Flex'
import { Title } from '../../../components/typography/Title'

export const Contact = () => {
	const methods = useForm()

	init(process.env.REACT_APP_EMAILJS_USER_ID)

	const sendEmail = (params) => {
		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				params
			)
			.then(
				(result) => {
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				}
			)
	}

	return (
		<Flex
			direction="column"
			align="center"
			sx={{ '& > *': { padding: { xs: '0 5%', sm: '0 15%' } }, py: '6rem' }}
		>
			<Flex direction="column" align="center">
				<Title>Contact Us</Title>
				<Typography
					sx={{
						fontSize: '1.8rem',
						fontWeight: '400',
						textAlign: 'center',
						width: { xs: '100%', sm: '70%' },
					}}
				>
					Discover the benefits of partnering with us. Contact our dedicated
					team to discuss your wholesale needs, request a quote, or explore how
					we can support your business. You can write to us at{' '}
					<a href="mailto:sales@nowpallet.com" target="_blank">
						sales@nowpallet.com
					</a>{' '}
					or you can fill out the form below.
				</Typography>
			</Flex>
			<Flex
				sx={{
					flexDirection: { xs: 'column !important', sm: 'row !important' },
					py: { sm: '4rem' },
				}}
			>
				<Box
					sx={{
						p: { xs: '2rem', sm: '4rem' },
						my: { xs: '4rem', sm: '0' },
					}}
				>
					<FormProvider {...methods}>
						<form
							onSubmit={methods.handleSubmit((data) => {
								sendEmail({ ...data })
							})}
						>
							<Grid
								container
								rowSpacing={3}
								sx={{ width: { xs: '100%', sm: '100%' } }}
							>
								<InputField name="name" label="First Name" sm={12} />
								<InputField name="email" label="Last Name" sm={12} />
								<InputField
									name="message"
									label="Message"
									multiline
									rows={4}
									sm={12}
								/>
								<Grid item xs={12} style={{ textAlign: 'center' }}>
									<LinkButton
										sx={{
											fontSize: { xs: '1.5rem', s: '1.7rem' },
											alignSelf: { sm: 'center' },
											mt: '4rem',
										}}
									>
										Send Email
									</LinkButton>
								</Grid>
							</Grid>
						</form>
					</FormProvider>
				</Box>
			</Flex>
		</Flex>
	)
}
