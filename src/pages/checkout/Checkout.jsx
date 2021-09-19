import {
  CircularProgress,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import Flex from '../../components/structure/Flex'
import { useStore } from '../../context/storeCtx'
import { commerce } from '../../lib/commerce'
import { AddressForm } from './@components/AddressForm'
import { Confirmation } from './@components/Confirmation'
import { PaymentForm } from './@components/PaymentForm'
import { LinkButton } from '../../components/buttons/LinkButton'

const steps = ['Shipping address', 'Payment details']

export const Checkout = () => {
  const { cart, errorMessage, setErrorMessage } = useStore()
  const [activeStep, setActiveStep] = useState(0)
  const [shippingData, setShippingData] = useState({})
  const [checkoutToken, setCheckoutToken] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        })
        setCheckoutToken(token)
      } catch (err) {
        history.push('/')
      }
    }
    if (activeStep !== steps.length) generateToken()
  }, [cart])

  const backStep = () => setActiveStep((prev) => prev - 1)
  const nextStep = () => setActiveStep((prev) => prev + 1)

  const next = (data) => {
    setShippingData(data)
    nextStep()
  }

  if (errorMessage) {
    return (
      <Paper style={{ padding: '6rem 0' }} align="center">
        <Typography variant="h6" style={{ marginBottom: '3rem' }}>
          Error: {errorMessage}
        </Typography>
        <LinkButton to="/" onClick={() => setErrorMessage('')}>
          Go Back Home
        </LinkButton>
      </Paper>
    )
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        shippingData={shippingData}
        backStep={backStep}
        nextStep={nextStep}
      />
    )

  return (
    <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
      <Paper style={{ padding: '4rem' }}>
        {activeStep !== steps.length && (
          <Typography variant="h4" align="center" gutterBottom>
            Checkout
          </Typography>
        )}
        {checkoutToken ? (
          <>
            {activeStep === steps.length ? (
              <Confirmation shippingData={shippingData} />
            ) : (
              checkoutToken && (
                <>
                  <Stepper
                    activeStep={activeStep}
                    style={{ margin: '2rem 0 4rem' }}
                  >
                    {steps.map((each) => {
                      return (
                        <Step key={each}>
                          <StepLabel>{each}</StepLabel>
                        </Step>
                      )
                    })}
                  </Stepper>
                  <Form />
                </>
              )
            )}
          </>
        ) : (
          <Flex
            style={{ width: '100%', height: '10rem' }}
            align="center"
            justify="center"
          >
            <CircularProgress size={40} />
          </Flex>
        )}
      </Paper>
    </Container>
  )
}
