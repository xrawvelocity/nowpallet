import { Button, Grid, MenuItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { InputField } from '../../../components/inputs/InputField'
import { SelectField } from '../../../components/inputs/SelectField'
import Flex from '../../../components/structure/Flex'
import { commerce } from '../../../lib/commerce'

export const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('US')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')
  const methods = useForm()

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }))

  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  )

  const options = shippingOptions.map((option) => ({
    id: option.id,
    label: `${option.description} - ${option.price.formatted_with_symbol}`,
  }))

  const fetchShippingCountries = async () => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutToken.id
    )
    setShippingCountries(countries)
  }

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    )
    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }

  const fetchShippingOptions = async (checkoutTokenId, country, region) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    )
    setShippingOptions(options)
    setShippingOption(options[0].id)
  }

  useEffect(() => {
    fetchShippingCountries()
  }, [])

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry)
  }, [shippingCountry])

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      )
  }, [shippingSubdivision, checkoutToken.id, shippingCountry])

  return (
    <>
      <Typography variant="h6" style={{ margin: '2rem 0' }}>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            <InputField name="firstName" label="First Name" />
            <InputField name="lastName" label="Last Name" />
            <InputField name="address1" label="Address" />
            <InputField name="email" label="Email" />
            <InputField name="city" label="City" />
            <InputField name="zip" label="Postal Code" />
            <SelectField
              label="Shipping Country"
              value={shippingCountry}
              onChange={(e) => setShippingCountry(e.target.value)}
            >
              {countries.length ? (
                countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))
              ) : (
                <MenuItem key={'US'} value={'US'}>
                  United States
                </MenuItem>
              )}
            </SelectField>
            <SelectField
              label="Shipping Subdivision"
              value={shippingSubdivision}
              onChange={(e) => setShippingSubdivision(e.target.value)}
            >
              {subdivisions.map((subdivision) => (
                <MenuItem key={subdivision.id} value={subdivision.id}>
                  {subdivision.label}
                </MenuItem>
              ))}
            </SelectField>
            <SelectField
              label="Shipping Options"
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}
            >
              {options.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
            </SelectField>
          </Grid>
          <Flex
            justify="space-between"
            style={{ marginTop: '4rem', width: '100%' }}
          >
            <Button component={Link} to="/cart" variant="outlined">
              Back To Cart
            </Button>
            <Button type="submit" color="primary" variant="contained">
              Next Step
            </Button>
          </Flex>
        </form>
      </FormProvider>
    </>
  )
}
