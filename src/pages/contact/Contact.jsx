import React, { useRef } from 'react'
import emailjs, { init } from 'emailjs-com'

export const Contact = () => {
	const form = useRef()

	init(process.env.REACT_APP_EMAILJS_USER_ID)

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				form.current
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
		<>
			<form ref={form} onSubmit={sendEmail}>
				<label>Name</label>
				<input type="text" name="user_name" />
				<label>Email</label>
				<input type="email" name="user_email" />
				<label>Message</label>
				<textarea name="message" />
				<input type="submit" value="Send" />
			</form>
			<div
				style={{
					padding: '10rem 0',
					display: 'flex',
					width: '100%',
					justifyContent: 'center',
				}}
			>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.132990971062!2d-80.26485968497697!3d25.86509998358993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b065a7802d8d%3A0x87331c50b22a30ca!2sMIC%20Turbo%20and%20Injection%2C%20INC.!5e0!3m2!1sen!2sus!4v1632151980959!5m2!1sen!2sus"
					width="300"
					height="450"
					loading="lazy"
				></iframe>
			</div>
		</>
	)
}
