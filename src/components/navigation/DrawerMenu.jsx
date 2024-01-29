import { Drawer, List, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useHistory } from 'react-router'

export const DrawerMenu = ({ drawerOpen, setDrawerOpen }) => {
	const history = useHistory()
	return (
		<Drawer
			anchor="left"
			open={drawerOpen}
			onClose={() => setDrawerOpen(false)}
			PaperProps={{
				style: { width: '35%', marginTop: '70px' },
			}}
			sx={{ marginTop: '70px', zIndex: '98' }}
		>
			<Box
				sx={{
					bgcolor: 'permanent.black2',
					height: '100%',
					width: '100%',
					color: 'permanent.white1',
				}}
			>
				<List style={{ height: '100%', zIndex: '2' }}>
					<ListItem
						sx={{
							':hover': { cursor: 'pointer', color: 'primary.main' },
						}}
						onClick={() => {
							history.push('/catalog')
							setDrawerOpen(false)
						}}
					>
						<Typography sx={{ fontSize: '2rem' }}>Catalog</Typography>
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
					<ListItem
						sx={{
							':hover': { cursor: 'pointer', color: 'primary.main' },
						}}
						onClick={() => {
							history.push('/membership')
							setDrawerOpen(false)
						}}
					>
						<Typography sx={{ fontSize: '2rem' }}>Membership</Typography>
					</ListItem>
					<ListItem
						sx={{
							':hover': { cursor: 'pointer', color: 'primary.main' },
						}}
						onClick={() => {
							history.push('/faq')
							setDrawerOpen(false)
						}}
					>
						<Typography sx={{ fontSize: '2rem' }}>FAQ</Typography>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	)
}
