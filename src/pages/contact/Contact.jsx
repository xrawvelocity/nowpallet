import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import emailjs, { init } from 'emailjs-com'
import React, { useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { LinkButton } from '../../components/buttons/LinkButton'

import { InputField } from '../../components/inputs/InputField'
import Flex from '../../components/structure/Flex'

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
			sx={{ '& > *': { padding: { xs: '0 5%', sm: '0 15%' } }, py: '4rem' }}
		>
			<Flex direction="column" align="center">
				<Typography sx={{ fontSize: '2.6rem', fontWeight: '700' }}>
					Reach out to us
				</Typography>
				<Typography sx={{ fontSize: '1.8rem', fontWeight: '400' }}>
					We will reply to you as soon as possible.
				</Typography>
			</Flex>
			<Flex
				sx={{
					flexDirection: { xs: 'column !important', sm: 'row !important' },
					py: { sm: '4rem' },
				}}
			>
				<Paper
					sx={{
						p: { xs: '2rem', sm: '4rem' },
						my: { xs: '4rem', sm: '0' },
						mr: { sm: '4rem' },
					}}
					elevation={4}
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
									<LinkButton>Send Email</LinkButton>
								</Grid>
							</Grid>
						</form>
					</FormProvider>
				</Paper>

				<Paper
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
					sx={{
						width: { xs: '100%', sm: '70%' },
						height: { xs: '400px', sm: '435px' },
					}}
					elevation={4}
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.132990971062!2d-80.26485968497697!3d25.86509998358993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b065a7802d8d%3A0x87331c50b22a30ca!2sMIC%20Turbo%20and%20Injection%2C%20INC.!5e0!3m2!1sen!2sus!4v1632151980959!5m2!1sen!2sus"
						width="100%"
						height="100%"
						style={{ border: 'none' }}
					></iframe>
				</Paper>
			</Flex>
		</Flex>
	)
}
