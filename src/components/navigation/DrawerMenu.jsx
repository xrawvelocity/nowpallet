import CloseIcon from '@mui/icons-material/Close'
import { Drawer, List, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router'

export const DrawerMenu = ({ drawerOpen, setDrawerOpen }) => {
	const history = useHistory()
	return (
		<Drawer
			anchor="left"
			open={drawerOpen}
			onClose={() => setDrawerOpen(false)}
			PaperProps={{
				style: { width: '35%' },
			}}
		>
			<Box
				sx={{
					bgcolor: 'background.black',
					height: '100%',
					width: '100%',
					color: 'text.white',
				}}
			>
				<CloseIcon
					sx={{
						float: 'right',
						height: '4rem',
						width: '4rem',
						padding: '.5rem',
						margin: '.5rem',
						color: 'text.white',
						cursor: 'pointer',
						zIndex: '10',
						':hover': { color: 'secondary.main' },
					}}
				/>
				<List style={{ height: 'auto', zIndex: '2' }}>
					<ListItem
						sx={{
							':hover': { cursor: 'pointer', color: 'primary.main' },
						}}
						onClick={() => {
							history.push('/store')
							setDrawerOpen(false)
						}}
					>
						<Typography sx={{ fontSize: '2rem' }}>Store</Typography>
					</ListItem>
					<ListItem
						sx={{
							':hover': { cursor: 'pointer', color: 'primary.main' },
						}}
						onClick={() => {
							history.push('/about')
							setDrawerOpen(false)
						}}
					>
						<Typography sx={{ fontSize: '2rem' }}>About</Typography>
					</ListItem>
					<ListItem
						sx={{
							':hover': { cursor: 'pointer', color: 'primary.main' },
						}}
						onClick={() => {
							history.push('/contact')
							setDrawerOpen(false)
						}}
					>
						<Typography sx={{ fontSize: '2rem' }}>Contact</Typography>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	)
}
