import { ShoppingCartOutlined } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import FlightIcon from '@mui/icons-material/Flight'
import MenuIcon from '@mui/icons-material/Menu'
import PhoneIcon from '@mui/icons-material/Phone'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, Slide, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useCallback, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useStore } from '../../context/storeCtx'
import { DropDown } from '../inputs/DropDown'
import Flex from '../structure/Flex'
import { DrawerMenu } from './DrawerMenu'
import { NavLink } from './NavLink'

export const NavBar = () => {
	const { cart, products } = useStore()
	const history = useHistory()
	const [searchOpen, setSearchOpen] = useState(false)
	const [drawerOpen, setDrawerOpen] = useState(false)

	const handleOnClick = useCallback((text) => history.push(text), [history])

	console.log(products)

	return (
		<Flex direction="column">
			<Box
				sx={{
					padding: { xs: '20px 5%', sm: '20px 10%' },
					position: 'fixed',
					width: '100%',
					top: 0,
					height: '0',
					zIndex: '101',
					display: 'flex',
					alignItems: 'center',
					bgcolor: 'background.default',
					justifyContent: { xs: 'center', sm: 'space-between' },
				}}
			>
				<Box
					style={{
						display: 'flex',
						alignItems: 'center',
					}}
					sx={{
						width: { xs: '100%', sm: 'auto' },
						justifyContent: { xs: 'space-between', sm: 'flex-start' },
					}}
				>
					<Flex
						align="center"
						sx={{
							color: 'background.black',
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
							sx={{ fontSize: { xs: '1.6rem', sm: '1.5rem' } }}
						>
							(305) 685-1061
						</Typography>
					</Flex>
					<Flex
						align="center"
						sx={{
							color: 'background.black',
						}}
					>
						<FlightIcon style={{ marginRight: '1rem' }} />
						<Typography
							variant="body1"
							sx={{ fontSize: { xs: '1.6rem', sm: '1.5rem' } }}
						>
							Free Shipping in the US
						</Typography>
					</Flex>
				</Box>
				<Box
					style={{ alignItems: 'center' }}
					sx={{
						color: 'background.black',
						':hover': {
							cursor: 'pointer',
							color: 'primary.main',
						},
						display: {
							xs: 'none',
							sm: 'flex',
						},
					}}
					onClick={() => handleOnClick('/cart')}
				>
					<IconButton
						aria-label="Show cart items"
						onClick={() => handleOnClick('/cart')}
						style={{ marginLeft: '5rem', color: 'inherit' }}
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
			</Box>
			<Flex
				component="nav"
				justify="space-between"
				align="center"
				sx={{
					padding: { xs: '20px 5%', sm: '20px 10%' },
					position: 'fixed',
					width: '100%',
					top: '40px',
					maxHeight: '70px',
					zIndex: '100',
					borderTop: '2px solid #000',
					borderBottom: '2px solid #000',
					bgcolor: 'background.darkBlack',
				}}
			>
				<Box
					style={{ alignItems: 'center' }}
					sx={{
						display: { xs: 'flex', sm: 'none' },
					}}
				>
					<MenuIcon
						onClick={() => setDrawerOpen(true)}
						fontSize="large"
						style={{ marginRight: '2rem' }}
						sx={{
							color: 'background.paper',
							':hover': {
								cursor: 'pointer',
								color: 'primary.main',
							},
						}}
					/>
					<SearchIcon
						onClick={() => setSearchOpen((prev) => !prev)}
						fontSize="large"
						sx={{
							color: 'background.paper',
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
							height: { xs: '70px', sm: '4rem' },
							width: 'auto',
							marginLeft: { xs: '-3rem', sm: '0' },
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							fontFamily: 'Saira',
							color: 'primary.main',
						}}
					>
						<Typography
							sx={{
								lineHeight: '1.2',
								fontWeight: '900',
								fontStyle: 'italic',
								fontSize: '3rem',
								textShadow: '0 0 .5rem #FF3D00',
							}}
						>
							MIC Turbo
						</Typography>
						<Typography
							sx={{
								lineHeight: '1.2',
								fontWeight: '900',
								fontStyle: 'italic',
								fontSize: '1.5rem',
								marginRight: { xs: '.5rem' },
								textShadow: '0 0 .5rem #FF3D00',
							}}
						>
							& Injection. INC
						</Typography>
					</Box>
					{/* <Box
						sx={{
							height: { xs: '5rem', sm: '4rem' },
							width: 'auto',
							marginLeft: { xs: '-3rem', sm: '0' },
							marginTop: '1rem',
						}}
					>
						<img
							src={logo}
							alt="logo"
							style={{ height: '100%', width: '100%' }}
						/>
					</Box> */}
				</Link>
				<Flex align="center" justify="flex-end" style={{ width: 'auto' }}>
					<Flex align="center" justify="space-between">
						<NavLink
							to="/store"
							text="Store"
							sx={{ display: { xs: 'none', sm: 'block' } }}
							style={{ marginRight: '2rem' }}
						/>
						<NavLink
							to="/about"
							text="About"
							sx={{ display: { xs: 'none', sm: 'block' } }}
							style={{ marginRight: '2rem' }}
						/>
						<NavLink
							to="/contact"
							text="Contact"
							sx={{ display: { xs: 'none', sm: 'block' } }}
						/>
						<SearchIcon
							onClick={() => setSearchOpen((prev) => !prev)}
							fontSize="large"
							sx={{
								marginLeft: '4rem',
								display: { xs: 'none', sm: 'block' },
								color: 'background.paper',
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
							color: 'background.paper',
							':hover': {
								color: 'primary.main',
							},
							display: {
								xs: 'flex',
								sm: 'none',
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
							bgcolor: 'background.darkBlack',
							float: { sm: 'right' },
							width: { xs: '100%', sm: '400px' },
							marginRight: { sm: '5%' },
							boxShadow: 5,
							// borderTop: '2px solid #000',
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
							onSelect={(val) => {
								console.log(val)
							}}
						/>
						<CloseIcon
							onClick={() => setSearchOpen(false)}
							sx={{
								color: 'background.paper',
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
