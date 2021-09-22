import { CssBaseline, GlobalStyles } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/system'
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { NavBar } from './components/navigation/NavBar'
import { Cart } from './pages/cart/Cart'
import { Checkout } from './pages/checkout/Checkout'
import { Contact } from './pages/contact/Contact'
import Home from './pages/home/Home'
import { ProductDetail } from './pages/productDetail/ProductDetail'
import Store from './pages/store/Store'
import globalStyles from './styles/global'
import { coloring, theme } from './styles/theme'
import { darkColoring, darkTheme } from './styles/darkTheme'
import { useStore } from './context/storeCtx'

export default function App() {
	const { lightThemeSelected } = useStore()
	return (
		<ThemeProvider theme={lightThemeSelected ? theme : darkTheme}>
			<GlobalStyles
				styles={globalStyles(lightThemeSelected ? coloring : darkColoring)}
			/>
			<CssBaseline />
			<Router>
				<NavBar />
				<Switch>
					<Box
						component="main"
						sx={{
							'& > *': { padding: { xs: '0 5%', sm: '0 15%' } },
							bgcolor: 'background.default',
							color: 'text.main',
							height: 'auto',
							minHeight: 'calc(100vh - 110px)',
						}}
					>
						<Route exact path={['', '/']}>
							<Home />
						</Route>
						<Route path={['/store/:category', '/store']}>
							<Store />
						</Route>
						<Route path="/cart">
							<Cart />
						</Route>
						<Route path="/checkout">
							<Checkout />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/product/:id">
							<ProductDetail />
						</Route>
					</Box>
				</Switch>
			</Router>
		</ThemeProvider>
	)
}
