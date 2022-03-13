import { ShoppingCartOutlined } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import FlightIcon from '@mui/icons-material/Flight'
import EmailIcon from '@mui/icons-material/Email'
import MenuIcon from '@mui/icons-material/Menu'
import PhoneIcon from '@mui/icons-material/Phone'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, Slide, Typography, SwitchUnstyled } from '@mui/material'
import { Box } from '@mui/system'
import React, { useCallback, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useStore } from '../../context/storeCtx'
import { DropDown } from '../inputs/DropDown'
import Flex from '../structure/Flex'
import { DrawerMenu } from './DrawerMenu'
import { NavLink } from './NavLink'

import logo from '../../assets/images/micturbologo.png'
import newlogo from '../../assets/images/newlogo.png'
import newlogo2 from '../../assets/images/newlogo2.png'
import newlogoname from '../../assets/images/newlogoname.png'

export const NavBar = () => {
	const { cart, products, lightThemeSelected, setLightThemeSelected } =
		useStore()
	const history = useHistory()
	const [searchOpen, setSearchOpen] = useState(false)
	const [drawerOpen, setDrawerOpen] = useState(false)

	const handleOnClick = useCallback((text) => history.push(text), [history])

	return (
		<Flex direction="column">
			<Box
				sx={{
					padding: { xs: '10px 5%', sm: '10px 15%' },
					position: 'fixed',
					width: '100%',
					top: 0,
					minHeight: '20px',
					height: '40px',
					zIndex: '101',
					display: 'flex',
					alignItems: 'center',
					bgcolor: 'background.paper',
					justifyContent: { xs: 'center', md: 'space-between' },
				}}
			>
				<Box
					style={{
						display: 'flex',
						height: '20px',
						alignItems: 'center',
					}}
					sx={{
						width: { xs: '100%', md: 'auto' },
						justifyContent: { xs: 'space-between', md: 'flex-start' },
					}}
				>
					<Flex
						align="center"
						sx={{
							color: 'text.main',
							':hover': {
								color: 'primary.main',
							},
						}}
						component={Link}
						to="/contact"
						style={{ marginRight: '2rem' }}
					>
						<PhoneIcon style={{ marginRight: '1rem' }} />
						<Typography
							variant="body1"
							sx={{ fontSize: { xs: '1.6rem', md: '1.5rem' } }}
						>
							(305) 685-1061
						</Typography>
					</Flex>
					<Flex
						align="center"
						sx={{
							color: 'text.main',
						}}
						component="a"
						href="mailto:manuel_mic@live.com"
					>
						<EmailIcon style={{ marginRight: '1rem' }} />
						<Typography
							variant="body1"
							sx={{ fontSize: { xs: '1.6rem', md: '1.5rem' } }}
						>
							manuel_mic@live.com
						</Typography>
					</Flex>
				</Box>
				<Flex align="center">
					<Box
						style={{ alignItems: 'center' }}
						sx={{
							color: 'text.main',
							':hover': {
								cursor: 'pointer',
								color: 'primary.main',
							},
							display: {
								xs: 'none',
								md: 'flex',
							},
						}}
						onClick={() => handleOnClick('/cart')}
					>
						<IconButton
							aria-label="Show cart items"
							onClick={() => handleOnClick('/cart')}
							style={{ marginLeft: '2rem', color: 'inherit' }}
						>
							<ShoppingCartOutlined />
						</IconButton>
						<Typography
							style={{
								fontSize: '1.5rem',
								marginRight: '.5rem',
								fontWeight: '700',
							}}
						>
							Cart
						</Typography>
						<Typography style={{ fontSize: '1.75rem', fontWeight: '700' }}>
							{cart?.total_items}
						</Typography>
					</Box>
				</Flex>
			</Box>
			<Flex
				component="nav"
				justify="space-between"
				align="center"
				sx={{
					padding: { xs: '20px 5%', sm: '20px 15%' },
					position: 'fixed',
					width: '100%',
					top: '40px',
					maxHeight: '70px',
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
					<SearchIcon
						onClick={() => setSearchOpen((prev) => !prev)}
						fontSize="large"
						sx={{
							color: 'permanent.white1',
							':hover': {
								cursor: 'pointer',
								color: 'primary.main',
							},
						}}
					/>
				</Box>
				<Link to="/">
					<Box
						sx={{
							height: { xs: '5rem', md: '5.4rem' },
							width: { xs: '106px', md: 'auto' },
							marginLeft: { xs: '-3rem', md: '0' },
							// marginTop: '.5rem',
						}}
					>
						<img
							src={newlogo}
							alt="logo"
							style={{ height: '100%', width: '100%' }}
						/>
					</Box>
				</Link>
				<Flex align="center" justify="flex-end" style={{ width: 'auto' }}>
					<Flex align="center" justify="space-between">
						<NavLink
							to="/store"
							text="Store"
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
							to="/guides"
							text="Guides"
							sx={{ display: { xs: 'none', md: 'block' } }}
							style={{ marginRight: '2rem' }}
						/>
						<NavLink
							to="/warranty"
							text="Warranty"
							sx={{ display: { xs: 'none', md: 'block' } }}
							style={{ marginRight: '2rem' }}
						/>
						<NavLink
							to="/sponsorship"
							text="Sponsorship"
							sx={{ display: { xs: 'none', md: 'block' } }}
							style={{ marginRight: '2rem' }}
						/>
						<NavLink
							to="/faq"
							text="FAQ"
							sx={{ display: { xs: 'none', md: 'block' } }}
						/>
						<SearchIcon
							onClick={() => setSearchOpen((prev) => !prev)}
							fontSize="large"
							sx={{
								marginLeft: '4rem',
								display: { xs: 'none', md: 'block' },
								color: 'permanent.white1',
								':hover': {
									cursor: 'pointer',
									color: 'primary.main',
								},
							}}
						/>
					</Flex>
					<Box
						style={{ alignItems: 'center' }}
						sx={{
							color: 'permanent.white1',
							':hover': {
								color: 'primary.main',
							},
							display: {
								xs: 'flex',
								md: 'none',
							},
						}}
						onClick={() => handleOnClick('/cart')}
					>
						<IconButton
							aria-label="Show cart items"
							onClick={() => handleOnClick('/cart')}
							style={{ color: 'inherit' }}
						>
							<ShoppingCartOutlined fontSize="large" />
						</IconButton>
						<Typography style={{ fontSize: '2rem', fontWeight: '700' }}>
							{cart?.total_items}
						</Typography>
					</Box>
				</Flex>
			</Flex>
			<Slide in={searchOpen} direction="down">
				<Box
					style={{
						width: '100%',
						position: 'fixed',
						top: '110px',
						zIndex: '99',
					}}
				>
					<Box
						style={{
							display: 'flex',
							alignItems: 'center',
							padding: '1.5rem 2rem',
							maxHeight: '70px',
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
							filterBy={(each) => each.name}
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
											{option.name}
										</Typography>
										<Typography variant="h6">
											{option.price.formatted_with_symbol}
										</Typography>
									</Flex>
								)
							}}
							onSelect={(option) => {
								setSearchOpen(false)
								history.push(`/product/${option.id}`)
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
