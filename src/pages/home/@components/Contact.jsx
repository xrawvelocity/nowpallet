import { Box, Grid, Typography } from '@mui/material'
import emailjs, { init } from 'emailjs-com'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { LinkButton } from '../../../components/buttons/LinkButton'

import { InputField } from '../../../components/inputs/InputField'
import Flex from '../../../components/structure/Flex'
import { Title } from '../../../components/typography/Title'

export const Contact = () => {
	const methods = useForm()

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
					<a href="mailto:sales@nowpallet.com" target="_blank" rel="noreferrer">
						sales@nowpallet.com
					</a>{' '}
					or you can fill out the form below.
				</Typography>
			</Flex>
			<Flex
				sx={{
					flexDirection: { xs: 'column !important', sm: 'row !important' },
					pt: { sm: '4rem' },
				}}
			>
				<Box
					sx={{
						px: { xs: '2rem', sm: '4rem' },
						mt: { xs: '4rem', sm: '0' },
					}}
				>
					<FormProvider {...methods}>
						<form action="https://formspree.io/f/xnqedgdl" method="POST">
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
											mt: { xs: '2rem', md: '4rem' },
										}}
										type="submit"
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
