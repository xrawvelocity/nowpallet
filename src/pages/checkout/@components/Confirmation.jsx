import React from 'react'
import { Divider, Typography, Box, CircularProgress } from '@mui/material'
import { useStore } from '../../../context/storeCtx'
import { LinkButton } from '../../../components/buttons/LinkButton'
import Flex from '../../../components/structure/Flex'

export const Confirmation = () => {
  const { order } = useStore()

  return (
    <>
      {order.customer ? (
        <Box>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer?.firstname}{' '}
            {order.customer?.lastname}!
          </Typography>
          <Divider style={{ margin: '2rem 0' }} />
          <Typography variant="body1">
            Order ref: <strong>{order?.customer_reference}</strong>
          </Typography>
          <LinkButton to="/" style={{ marginTop: '2rem' }}>
            Continue Shopping
          </LinkButton>
        </Box>
      ) : (
        <Flex justify="center">
          <CircularProgress />
        </Flex>
      )}
    </>
  )
}
