import { Drawer, List, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router'

import { useStore } from '../../context/storeCtx'
import ThemeSwitch from '../inputs/ThemeSwitch'

export const DrawerMenu = ({ drawerOpen, setDrawerOpen }) => {
	const { lightThemeSelected, setLightThemeSelected } = useStore()
	const history = useHistory()
	return (
		<Drawer
			anchor="left"
			open={drawerOpen}
			onClose={() => setDrawerOpen(false)}
			PaperProps={{
				style: { width: '35%', marginTop: '110px' },
			}}
			sx={{ marginTop: '110px', zIndex: '98' }}
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
					<ListItem
						sx={{
							':hover': { cursor: 'pointer', color: 'primary.main' },
						}}
						onClick={() => {
							history.push('/guides')
							setDrawerOpen(false)
						}}
					>
						<Typography sx={{ fontSize: '2rem' }}>Guides</Typography>
					</ListItem>
					<ListItem
						sx={{
							':hover': { cursor: 'pointer', color: 'primary.main' },
						}}
						onClick={() => {
							history.push('/warranty')
							setDrawerOpen(false)
						}}
					>
						<Typography sx={{ fontSize: '2rem' }}>Warranty</Typography>
					</ListItem>
					<ListItem
						sx={{
							':hover': { cursor: 'pointer', color: 'primary.main' },
						}}
						onClick={() => {
							history.push('/sponsorship')
							setDrawerOpen(false)
						}}
					>
						<Typography sx={{ fontSize: '2rem' }}>Sponsorship</Typography>
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
					{/* <ListItem
						sx={{
							marginLeft: '-1rem',
							':hover': { cursor: 'pointer', color: 'primary.main' },
						}}
						onClick={() => {
							setLightThemeSelected((prev) => !prev)
						}}
					>
						<ThemeSwitch checked={!lightThemeSelected} />
					</ListItem> */}
				</List>
			</Box>
		</Drawer>
	)
}
