import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
	TextField,
	Button,
	Select,
	MenuItem,
	Grid,
	Box,
	Typography,
	InputLabel,
	FormControl,
	FormControlLabel,
	FormGroup,
	Checkbox,
} from '@mui/material'

import ReactSignatureCanvas from 'react-signature-canvas'

import { Title } from '../../components/typography/Title'
import FileUpload from '../../components/inputs/FileUpload'
import Flex from '../../components/structure/Flex'

const validationSchema = Yup.object({
	businessName: Yup.string().required('Required'),
	corporationName: Yup.string().required('Required'),
	storeAddress: Yup.string().required('Required'),
	city: Yup.string().required('Required'),
	stateProvince: Yup.string().required('Required'),
	postalZipCode: Yup.number().required('Required').positive().integer(),
	country: Yup.string().required('Required'),
	businessPhoneNumber: Yup.string()
		.matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
		.required('Required'),
	emailAddress: Yup.string().email('Invalid email format').required('Required'),
	name: Yup.string().required('Required'),
	date: Yup.date().nullable().required('Date is required'),
})

const countryOptions = [
	{ value: 'US', label: 'United States' },
	{ value: 'CA', label: 'Canada' },
	{ value: 'MX', label: 'Mexico' },
]

const Membership = () => {
	const [checked, setChecked] = useState(false)

	const handleCheck = () => {
		setChecked(!checked)
	}

	const [country, setCountry] = useState('')

	const handleCountry = (event) => {
		setCountry(event.target.country)
	}

	const sigPad = useRef(null)

	const clearSignature = () => {
		sigPad.current.clear()
	}

	const formik = useFormik({
		initialValues: {
			businessName: '',
			corporationName: '',
			storeAddress: '',
			city: '',
			stateProvince: '',
			postalZipCode: '',
			country: '',
			businessPhoneNumber: '',
			emailAddress: '',
			name: '',
			date: '',
		},
		validationSchema,
		onSubmit: (values) => {
			// Get the underlying canvas element
			let canvas = sigPad.getCanvas()
			// Get the data URL of the image
			let dataURL = canvas.toDataURL()
			// Store or use the data URL as needed
			console.log(dataURL)
			console.log(values)
		},
	})

	return (
		<Box
			sx={{
				p: '2rem',
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				alignItems: 'center',
			}}
		>
			<Title>Membership Application</Title>
			<Box sx={{ width: { xs: '100%', md: '50%' } }}>
				<form onSubmit={formik.handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								sx={{ width: '100%' }}
								label="Business Name"
								{...formik.getFieldProps('businessName')}
								error={
									formik.touched.businessName &&
									Boolean(formik.errors.businessName)
								}
								helperText={
									formik.touched.businessName && formik.errors.businessName
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								sx={{ width: '100%' }}
								label="Corporation Name"
								{...formik.getFieldProps('corporationName')}
								error={
									formik.touched.corporationName &&
									Boolean(formik.errors.corporationName)
								}
								helperText={
									formik.touched.corporationName &&
									formik.errors.corporationName
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								sx={{ width: '100%' }}
								label="Store Address"
								{...formik.getFieldProps('storeAddress')}
								error={
									formik.touched.storeAddress &&
									Boolean(formik.errors.storeAddress)
								}
								helperText={
									formik.touched.storeAddress && formik.errors.storeAddress
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								sx={{ width: '100%' }}
								label="City"
								{...formik.getFieldProps('city')}
								error={formik.touched.city && Boolean(formik.errors.city)}
								helperText={formik.touched.city && formik.errors.city}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								sx={{ width: '100%' }}
								label="State/Province"
								{...formik.getFieldProps('stateProvince')}
								error={
									formik.touched.stateProvince &&
									Boolean(formik.errors.stateProvince)
								}
								helperText={
									formik.touched.stateProvince && formik.errors.stateProvince
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								sx={{ width: '100%' }}
								label="Postal/Zip Code"
								{...formik.getFieldProps('postalZipCode')}
								error={
									formik.touched.postalZipCode &&
									Boolean(formik.errors.postalZipCode)
								}
								helperText={
									formik.touched.postalZipCode && formik.errors.postalZipCode
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormControl sx={{ width: '100%' }}>
								<InputLabel id="country-label">Country</InputLabel>
								<Select
									sx={{ width: '100%' }}
									label="Country"
									value={country}
									onChange={handleCountry}
									{...formik.getFieldProps('country')}
									error={
										formik.touched.country && Boolean(formik.errors.country)
									}
								>
									<MenuItem key={''} value={''}>
										{' '}
									</MenuItem>
									{countryOptions.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</Select>
								{formik.touched.country && formik.errors.country && (
									<Typography variant="body2" sx={{ color: 'error.main' }}>
										{formik.errors.country}
									</Typography>
								)}
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								sx={{ width: '100%' }}
								label="Business Phone Number"
								{...formik.getFieldProps('businessPhoneNumber')}
								error={
									formik.touched.businessPhoneNumber &&
									Boolean(formik.errors.businessPhoneNumber)
								}
								helperText={
									formik.touched.businessPhoneNumber &&
									formik.errors.businessPhoneNumber
								}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								sx={{ width: '100%' }}
								label="Email Address"
								{...formik.getFieldProps('emailAddress')}
								error={
									formik.touched.emailAddress &&
									Boolean(formik.errors.emailAddress)
								}
								helperText={
									formik.touched.emailAddress && formik.errors.emailAddress
								}
							/>
						</Grid>

						<Grid item xs={12}>
							<Flex direction="column" sx={{ pb: '2rem' }}>
								<Typography variant="h6">
									Attach copies of the following:
								</Typography>
								<Typography>- Driver's License</Typography>
								<Typography>- Resale Certificate</Typography>
							</Flex>
							<FileUpload />
						</Grid>

						<Grid
							item
							xs={12}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								position: 'relative',
								mt: '1.5rem',
							}}
						>
							<Box sx={{ border: '1px solid black', borderRadius: '10px' }}>
								<ReactSignatureCanvas
									ref={sigPad}
									penColor="#111111"
									canvasProps={{
										width: 500,
										height: 200,
										className: 'sigCanvas',
									}}
								/>
							</Box>
							<Typography
								sx={{ position: 'absolute', top: '25px', left: '30px' }}
							>
								Owner's Signature
							</Typography>
							<Button
								variant="outlined"
								sx={{ position: 'absolute', top: '25px', right: '10px' }}
								onClick={clearSignature}
							>
								Clear
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								sx={{ width: '100%' }}
								label="Name"
								{...formik.getFieldProps('name')}
								error={formik.touched.name && Boolean(formik.errors.name)}
								helperText={formik.touched.name && formik.errors.name}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								label="Date"
								type="date"
								variant="outlined"
								fullWidth
								InputLabelProps={{ shrink: true }}
								{...formik.getFieldProps('dateOfBirth')}
								error={formik.touched.name && Boolean(formik.errors.name)}
								helperText={formik.touched.name && formik.errors.name}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox checked={checked} onChange={handleCheck} />
									}
									label={
										<Typography variant="body1">
											By signing and submitting this customer application, I
											acknowledge and agree that I am entering into a legally
											binding agreement with NowPallet. I fully comprehend and
											consent to the{' '}
											<a style={{ color: 'blue' }} href="/terms-and-conditions">
												terms and conditions
											</a>
											, which govern my customer application with NowPallet.
										</Typography>
									}
								/>
							</FormGroup>
						</Grid>
						<Typography></Typography>
						<Grid item xs={12} sx={{ my: 3 }}>
							<Button variant="contained" type="submit">
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
		</Box>
	)
}

export default Membership
