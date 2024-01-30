import React, { useState } from 'react'
import { Typography, Box, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const FileUpload = () => {
	const [selectedFiles, setSelectedFiles] = useState([])

	const handleFileChange = (event) => {
		const files = event.target.files
		setSelectedFiles([...selectedFiles, ...files])
	}

	const handleDragOver = (event) => {
		event.preventDefault()
	}

	const handleDrop = (event) => {
		event.preventDefault()

		const files = event.dataTransfer.files
		setSelectedFiles([...selectedFiles, ...files])
	}

	const handleUpload = () => {
		// You can handle the file upload logic here
		if (selectedFiles.length > 0) {
			// Perform actions with the selected files (e.g., upload to server)
			console.log('Uploading files:', selectedFiles)
		} else {
			console.log('No files selected.')
		}
	}

	const handleDelete = (index) => {
		const updatedFiles = [...selectedFiles]
		updatedFiles.splice(index, 1)
		setSelectedFiles(updatedFiles)
	}

	const truncateFileName = (fileName) => {
		if (fileName.length > 30) {
			return `${fileName.substring(0, 30)}...`
		}
		return fileName
	}

	return (
		<Box
			onDragOver={handleDragOver}
			onDrop={handleDrop}
			style={{
				width: '100%',
				border: '2px dashed #aaa',
				borderRadius: '8px',
				padding: '20px',
				textAlign: 'center',
			}}
		>
			<input
				type="file"
				onChange={handleFileChange}
				style={{ display: 'none' }}
				id="file-upload"
				multiple
			/>
			<label htmlFor="file-upload">
				<CloudUploadIcon fontSize="large" />
				<Typography variant="body1">
					Drag and drop files here or click to choose files
				</Typography>
			</label>

			{selectedFiles.length > 0 && (
				<Box mt={2}>
					<Typography variant="body1">Selected Files:</Typography>
					<ul
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: '100%',
							marginLeft: '2rem',
						}}
					>
						{selectedFiles.map((file, index) => (
							<li key={index}>
								{truncateFileName(file.name)} - {file.size} bytes
								<IconButton
									onClick={() => handleDelete(index)}
									aria-label="delete"
								>
									<DeleteIcon />
								</IconButton>
							</li>
						))}
					</ul>
				</Box>
			)}
		</Box>
	)
}

export default FileUpload
