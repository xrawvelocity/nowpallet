import { CssBaseline, GlobalStyles } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { NavBar } from './components/navigation/NavBar'
import { Cart } from './pages/cart/Cart'
import { Checkout } from './pages/checkout/Checkout'
import { Contact } from './pages/contact/Contact'
import Home from './pages/home/Home'
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
          <main style={{ padding: '0 5%' }}>
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
          </main>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
