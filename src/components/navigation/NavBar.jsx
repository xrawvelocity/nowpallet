import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import { Slide, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { DropDown } from '../inputs/DropDown'
import Flex from '../structure/Flex'
import { DrawerMenu } from './DrawerMenu'
import { NavLink } from './NavLink'

import Logo from '../logo/Logo'

import { products } from '../../assets/data'
import { useAuth } from '../../context/authCtx'

export const NavBar = () => {
	const history = useHistory()
	const [searchOpen, setSearchOpen] = useState(false)
	const [drawerOpen, setDrawerOpen] = useState(false)

	const { isAdmin } = useAuth()

	return (
		<Flex direction="column">
			<Flex
				component="nav"
				justify="space-between"
				align="center"
				sx={{
					padding: { xs: '20px 5%', sm: '20px 15%' },
					position: 'fixed',
					width: '100%',
					top: '0px',
					maxHeight: '100px',
					zIndex: '100',
					borderTop: '2px solid #000',
					borderBottom: '2px solid #000',
					bgcolor: 'permanent.black2',
				}}
			>
				<Box
					style={{ alignItems: 'center' }}
					sx={{
						display: { xs: 'flex', md: 'none' },
					}}
				>
					{!drawerOpen ? (
						<MenuIcon
							onClick={() => {
								setSearchOpen(false)
								setDrawerOpen(true)
							}}
							fontSize="large"
							sx={{
								mr: '2rem',
								color: 'permanent.white1',
								cursor: 'pointer',
								':hover': {
									color: 'primary.main',
								},
							}}
						/>
					) : (
						<CloseIcon
							onClick={() => setDrawerOpen(false)}
							fontSize="large"
							sx={{
								mr: '2rem',
								color: 'permanent.white1',
								cursor: 'pointer',
								':hover': { color: 'secondary.main' },
							}}
						/>
					)}
				</Box>
				<Link to="/">
					<Box
						sx={{
							marginLeft: { xs: '5rem', md: '0' },
						}}
					>
						<Logo />
					</Box>
				</Link>
				<Flex align="center" justify="flex-end" style={{ width: 'auto' }}>
					<Flex align="center" justify="space-between">
						<NavLink
							to="/catalog"
							text="Catalog"
							sx={{ display: { xs: 'none', md: 'block' } }}
							style={{ marginRight: '2rem' }}
						/>
						<NavLink
							to="/about"
							text="About"
							sx={{ display: { xs: 'none', md: 'block' } }}
							style={{ marginRight: '2rem' }}
						/>
						<NavLink
							to="/contact"
							text="Contact"
							sx={{ display: { xs: 'none', md: 'block' } }}
							style={{ marginRight: '2rem' }}
						/>
						<NavLink
							to="/membership"
							text="Membership"
							sx={{ display: { xs: 'none', md: 'block' } }}
							style={{ marginRight: '2rem' }}
						/>
						<NavLink
							to="/faq"
							text="FAQ"
							sx={{ display: { xs: 'none', md: 'block' } }}
						/>
						{isAdmin && (
							<NavLink
								to="/admin"
								text="Admin"
								sx={{ display: { xs: 'none', md: 'block' } }}
								style={{ marginLeft: '2rem' }}
							/>
						)}
						<Link to="/login">
							<PersonIcon
								fontSize="large"
								sx={{
									marginLeft: { xs: '3rem' },
									display: { xs: 'block', md: 'block' },
									color: 'permanent.white1',
									':hover': {
										cursor: 'pointer',
										color: 'primary.main',
									},
								}}
							/>
						</Link>
						<SearchIcon
							onClick={() => setSearchOpen((prev) => !prev)}
							fontSize="large"
							sx={{
								marginLeft: { xs: '3rem' },
								display: { xs: 'block', md: 'block' },
								color: 'permanent.white1',
								':hover': {
									cursor: 'pointer',
									color: 'primary.main',
								},
							}}
						/>
					</Flex>
				</Flex>
			</Flex>
			<Slide in={searchOpen} direction="down">
				<Box
					style={{
						width: '100%',
						position: 'fixed',
						top: { xs: '100px', md: '70px' },
						zIndex: '99',
					}}
				>
					<Box
						style={{
							display: 'flex',
							alignItems: 'center',
							padding: '1.5rem 2rem',
							maxHeight: { xs: '100px', md: '70px' },
						}}
						sx={{
							bgcolor: 'permanent.black2',
							float: { md: 'right' },
							width: { xs: '100%', md: '400px' },
							marginRight: { md: '14%' },
							boxShadow: 5,
						}}
					>
						<DropDown
							width="100%"
							placeholder="Search products..."
							options={products}
							filterBy={(each) => each.title}
							renderOption={(option) => {
								return (
									<Flex justify="space-between" width="100%">
										<Typography
											variant="h6"
											style={{
												fontWeight: '600',
												width: '60%',
												overflowX: 'hidden',
												textOverflow: 'ellipsis',
											}}
										>
											{option.title}
										</Typography>
										<Typography variant="h6">
											${option.ourPrice.toFixed(2)}
										</Typography>
									</Flex>
								)
							}}
							onSelect={(option) => {
								setSearchOpen(false)
								history.push(`/product/${option.sku}`)
							}}
							closeOnClick
						/>
						<CloseIcon
							onClick={() => setSearchOpen(false)}
							sx={{
								color: 'permanent.white1',
								':hover': { color: 'primary.main', cursor: 'pointer' },
								marginLeft: '20px',
							}}
						/>
					</Box>
				</Box>
			</Slide>
			<DrawerMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
		</Flex>
	)
}
