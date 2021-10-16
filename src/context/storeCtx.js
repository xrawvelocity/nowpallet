import React, { createContext, useState, useEffect, useContext } from 'react'
import { commerce } from '../lib/commerce'

const StoreContext = createContext()

export const useStore = () => {
	return useContext(StoreContext)
}

const StoreProvider = ({ children }) => {
	const [cart, setCart] = useState({})
	const [cartLoading, setCartLoading] = useState(true)
	const [products, setProducts] = useState([])
	const [productsLoading, setProductsLoading] = useState(true)
	const [categories, setCategories] = useState([])
	const [categoriesLoading, setCategoriesLoading] = useState(true)
	const [order, setOrder] = useState({})
	const [errorMessage, setErrorMessage] = useState('')

	const [lightThemeSelected, setLightThemeSelected] = useState(true)

	useEffect(() => {
		setCartLoading(true)
		const getData = async () => {
			try {
				const cartRes = await commerce.cart.retrieve()
				setCart(cartRes)
				setCartLoading(false)
			} catch (err) {
				console.log(err)
			}
			await setCartLoading(false)
		}
		getData()
	}, [])

	useEffect(() => {
		setProductsLoading(true)
		const getData = async () => {
			try {
				const productsRes = await commerce.products.list()
				setProducts(productsRes.data)
			} catch (err) {
				console.log(err)
			}
			await setProductsLoading(false)
		}
		getData()
	}, [])

	useEffect(() => {
		setCategoriesLoading(true)
		const getData = async () => {
			try {
				const categoriesRes = await commerce.categories.list()
				setCategories(categoriesRes.data.reverse())
			} catch (err) {
				console.log(err)
			}
			await setCategoriesLoading(false)
		}
		getData()
	}, [])

	const addToCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.add(productId, quantity)
		setCart(cart)
	}

	const updateQty = async (productId, quantity) => {
		const { cart } = await commerce.cart.update(productId, { quantity })
		setCart(cart)
	}

	const removeFromCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.remove(productId)
		setCart(cart)
	}

	const emptyCart = async () => {
		const { cart } = await commerce.cart.empty()
		setCart(cart)
	}

	const refreshCart = async () => {
		const newCart = await commerce.cart.refresh()
		setCart(newCart)
	}

	const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
		try {
			const incomingOrder = await commerce.checkout.capture(
				checkoutTokenId,
				newOrder
			)
			setOrder(incomingOrder)
			refreshCart()
		} catch (err) {
			setErrorMessage(err.data.error.message)
		}
	}

	return (
		<StoreContext.Provider
			value={{
				cart,
				setCart,
				cartLoading,
				products,
				productsLoading,
				categories,
				categoriesLoading,
				setProducts,
				addToCart,
				updateQty,
				removeFromCart,
				emptyCart,
				handleCaptureCheckout,
				order,
				setErrorMessage,
				errorMessage,
				lightThemeSelected,
				setLightThemeSelected,
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreProvider
