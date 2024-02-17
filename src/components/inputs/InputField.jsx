import React from 'react'
import { TextField, Grid, Typography } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'
import Flex from '../structure/Flex'

export const InputField = ({
	sm = 6,
	name,
	label,
	required = true,
	...props
}) => {
	const { control } = useFormContext()

	return (
		<Grid item xs={12} sm={sm}>
			<Flex direction="column">
				<Typography variant="body1" gutterBottom>
					{label}
				</Typography>
				<Controller
					control={control}
					fullWidth
					name={name}
					defaultValue=""
					render={({ field: { onChange, value } }) => (
						<TextField
							name={name}
							size="small"
							variant="outlined"
							fullWidth
							required={required}
							onChange={onChange}
							value={value}
							{...props}
						/>
					)}
				/>
			</Flex>
		</Grid>
	)
}
