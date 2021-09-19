import React from 'react'
import {
  Typography,
  Button,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import Flex from '../../components/structure/Flex'
import { useStore } from '../../context/storeCtx'

export const CartItem = ({ product }) => {
  const { updateQty, removeFromCart } = useStore()

  return (
    <Card>
      <CardMedia
        image={product.media.source}
        alt={product.name}
        style={{ height: '20rem' }}
      />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="h6">
          {product.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'space-between', width: '100%' }}>
        <Flex align="center">
          <IconButton
            size="small"
            style={{ width: '3rem', height: '3rem' }}
            onClick={() => updateQty(product.id, product.quantity - 1)}
          >
            <RemoveIcon />
          </IconButton>
          <Typography style={{ margin: '0 1rem', fontSize: '2rem' }}>
            {product.quantity}
          </Typography>
          <IconButton
            size="small"
            style={{ width: '3rem', height: '3rem' }}
            onClick={() => updateQty(product.id, product.quantity + 1)}
          >
            <AddIcon />
          </IconButton>
        </Flex>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => removeFromCart(product.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  )
}
