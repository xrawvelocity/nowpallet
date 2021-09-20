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

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles styles={globalStyles(coloring)} />
			<CssBaseline />
			<Router>
				<NavBar />
				<Switch>
					<Box
						component="main"
						sx={{
							'& > *': { padding: { xs: '0 5%', sm: '0 10%' } },
							bgcolor: 'background.darkGray',
							height: 'calc(100vh - 110px)',
						}}
					>
						<Route exact path={['', '/']}>
							<Home />
						</Route>
						<Route path="/store">
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
