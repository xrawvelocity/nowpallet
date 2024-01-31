import { CssBaseline, GlobalStyles } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/system'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from './components/navigation/NavBar'
import { About } from './pages/about/About'
import { Contact } from './pages/home/@components/Contact'
import { FAQ } from './pages/faq/FAQ'
import { Footer } from './pages/footer/Footer'
import Home from './pages/home/Home'
import { ProductDetail } from './pages/productDetail/ProductDetail'
import Store from './pages/store/Store'
import globalStyles from './styles/global'
import { coloring, theme } from './styles/theme'
import Membership from './pages/membership/Membership'
import Login from './pages/login/Login'
import { Privacy } from './pages/privacy/Privacy'
import { Terms } from './pages/terms/Terms'

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
							bgcolor: 'background.paper',
							color: 'text.main',
							height: 'auto',
							minHeight: 'calc(100vh - 310px)',
						}}
					>
						<Route exact path={['', '/']}>
							<Home />
						</Route>
						<Route path={['/catalog/:category', '/catalog']}>
							<Store />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/membership">
							<Membership />
						</Route>
						<Route path="/faq">
							<FAQ />
						</Route>
						<Route path="/privacy-policy">
							<Privacy />
						</Route>
						<Route path="/terms-and-conditions">
							<Terms />
						</Route>
						<Route path="/login">
							<Login />
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
