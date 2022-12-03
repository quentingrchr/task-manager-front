import React from 'react'
import { Container } from '@mui/system'
import { useForm } from 'react-hook-form'

import {
  Grid,
  Box,
  TextField,
  Button,
  Link,
  Stack,
  Typography,
  CssBaseline,
} from '@mui/material'

export interface IInput {
  label: string
  type: string
  name: string
  required: boolean
  placeholder: string
}
export type IProps = {
  title: string
  inputs: IInput[]
  submitLabel: string
  link: {
    label: string
    href: string
    text: string
  }
  onSubmit: (data: any) => void
}

export default function SignForm(props: IProps) {
  const { title, inputs, link, onSubmit, submitLabel } = props
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <Box mt={10}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Stack justifyContent="center" alignItems="center">
          <Typography component="h1" variant="h2" mb={8}>
            {title}
          </Typography>
          <form
            noValidate
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(onSubmit)()
            }}
          >
            <Grid container spacing={2} mb={2}>
              {inputs.map((input) => (
                <Grid key={input.name} item xs={12}>
                  <TextField
                    variant="outlined"
                    required={input.required}
                    fullWidth
                    id={input.name}
                    label={input.label}
                    type={input.type}
                    autoComplete={input.name}
                    {...register(input.name, { required: true })}
                  />
                </Grid>
              ))}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary">
              {submitLabel}
            </Button>
          </form>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {link.text}
              <Link href={link.href} variant="body2">
                {link.label}
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
