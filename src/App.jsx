import { CssBaseline, GlobalStyles } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/system'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from './components/navigation/NavBar'
import { useStore } from './context/storeCtx'
import { About } from './pages/about/About'
import { Cart } from './pages/cart/Cart'
import { Checkout } from './pages/checkout/Checkout'
import { Contact } from './pages/contact/Contact'
import { FAQ } from './pages/faq/FAQ'
import { Guides } from './pages/guides/Guides'
import { Footer } from './pages/footer/Footer'
import Home from './pages/home/Home'
import { ProductDetail } from './pages/productDetail/ProductDetail'
import Store from './pages/store/Store'
import { darkColoring, darkTheme } from './styles/darkTheme'
import globalStyles from './styles/global'
import { coloring, theme } from './styles/theme'

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
							bgcolor: 'background.paper',
							color: 'text.main',
							height: 'auto',
							minHeight: 'calc(100vh - 310px)',
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
						<Route path="/about">
							<About />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/faq">
							<FAQ />
						</Route>
						<Route path="/guides">
							<Guides />
						</Route>
						<Route path="/product/:id">
							<ProductDetail />
						</Route>
					</Box>
				</Switch>
				<Footer />
			</Router>
		</ThemeProvider>
	)
}
