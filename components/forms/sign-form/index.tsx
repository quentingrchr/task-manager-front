import React, { useEffect } from 'react'
import { Container } from '@mui/system'
import { useForm } from 'react-hook-form'
import { IFormInput } from '@interfaces'
import { IApiError } from '@interfaces'

import {
  Grid,
  Box,
  TextField,
  Button,
  Link,
  Stack,
  Typography,
  CssBaseline,
  Alert,
} from '@mui/material'

export type IProps = {
  title: string
  inputs: IFormInput[]
  submitLabel: string
  link: {
    label: string
    href: string
    text: string
  }
  onSubmit: (data: any) => void
  apiError?: IApiError | null
}

export default function SignForm(props: IProps) {
  const { title, inputs, link, onSubmit, submitLabel, apiError } = props

  const {
    register,
    handleSubmit,
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
              {apiError && (
                <Grid item xs={12}>
                  <Alert severity="error">
                    {apiError.message || 'Unknown error'}
                  </Alert>
                </Grid>
              )}
              <Grid item xs={12}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  align="center"
                >
                  All * fields are required
                </Typography>
              </Grid>

              {inputs.map((input) => (
                <Grid key={input.name} item xs={12}>
                  <TextField
                    error={!!errors[input.name]}
                    variant="outlined"
                    required={input.required}
                    fullWidth
                    id={input.name}
                    label={input.label}
                    type={input.type}
                    autoComplete={input.name}
                    {...register(input.name, {
                      required: true,
                      pattern: input.pattern ? input.pattern : undefined,
                    })}
                    helperText={
                      errors[input.name]?.message || input?.helperText || null
                    }
                  />
                </Grid>
              ))}
            </Grid>
            <Button
              disabled={Object.keys(errors).length > 0}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              {submitLabel}
            </Button>
          </form>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {link.text + ' '}
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
