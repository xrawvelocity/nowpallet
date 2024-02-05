import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
	TextField,
	Button,
	Typography,
	Link,
	Grid,
	Paper,
	Container,
	Box,
} from '@mui/material'
import { useAuth } from '../../context/authCtx'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { Title } from '../../components/typography/Title'

const LoginPage = () => {
	const { signIn, resetPassword } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginError, setLoginError] = useState(null)
	const history = useHistory()

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
		setLoginError(null)
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
		setLoginError(null)
	}

	const handleLogin = async () => {
		try {
			// Call signIn function from the authentication context
			await signIn(email, password)
			console.log('Login successful')
			history.push('/')
		} catch (error) {
			console.error('Login failed', error.message)
			setLoginError('Invalid email or password. Please try again.')
			// Handle login error, show a message, etc.
		}
	}

	const handleForgotPassword = async () => {
		try {
			// Call resetPassword function from the authentication context
			await resetPassword(email)
			alert('Password reset email sent successfully')
			// Provide feedback to the user about the password reset email
		} catch (error) {
			alert('Password reset failed', error.message)
			// Handle password reset error, show a message, etc.
		}
	}

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					padding: 3,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Title sx={{ m: 3 }}>Login</Title>

				<TextField
					label="Email"
					variant="outlined"
					fullWidth
					margin="normal"
					value={email}
					onChange={handleEmailChange}
				/>

				<TextField
					label="Password"
					type="password"
					variant="outlined"
					fullWidth
					margin="normal"
					value={password}
					onChange={handlePasswordChange}
				/>

				<Link
					onClick={handleForgotPassword}
					variant="body2"
					sx={{ alignSelf: 'flex-end', marginTop: 1 }}
				>
					Forgot password?
				</Link>

				{loginError && (
					<Typography
						variant="body2"
						color="error"
						sx={{ marginTop: 1, marginBottom: 1 }}
					>
						{loginError}
					</Typography>
				)}

				<Button
					variant="contained"
					color="primary"
					fullWidth
					size="large"
					onClick={handleLogin}
					sx={{ marginTop: 3 }}
				>
					Login
				</Button>

				<Grid container justifyContent="flex-end" sx={{ marginTop: 2 }}>
					<Grid item>
						<Link component={RouterLink} to="/membership" variant="body2">
							Not a member yet? Become one!
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}

export default LoginPage
