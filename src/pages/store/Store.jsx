import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Search } from '../../components/inputs/Search'
import { Product } from '../../components/Product'
import Flex from '../../components/structure/Flex'
import { useStore } from '../../context/storeCtx'

export default function Store() {
  const [searchInput, setSearchInput] = useState('')
  const { products } = useStore()
  console.log(products)

  const showProducts = () => {
    return products
      .filter((each) => {
        return each.name.toLowerCase().includes(searchInput.toLowerCase())
      })
      .map((each) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Product product={each} />
          </Grid>
        )
      })
  }

  return (
    <Flex direction="column" align="center" style={{ marginTop: '4rem' }}>
      <Search
        placeholder="Search products..."
        onChange={(e) => setSearchInput(e.target.value)}
        style={{ marginBottom: '2rem' }}
      />
      <Grid container spacing={3} justifyContent="center">
        {showProducts()}
      </Grid>
    </Flex>
  )
}
