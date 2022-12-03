import dynamic from 'next/dynamic'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '@mui/system'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { isLoggedIn, setAuthTokens } from 'axios-jwt'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { useAuth } from '@hooks'

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

interface IOnSubmitData {
  email: string
  password: string
}

const SignIn: NextPage = () => {
  const { signIn } = useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const codeErrorMessages = {
    '402': 'Email already exists',
    '403': 'Invalid credentials',
  }

  const onSubmit = (data: SubmitHandler<FieldValues>) => {
    if (!window) return
    const { email, password } = data
    signIn({ email, password })
    // axios
    //   .post('http://localhost:3000/auth/signup', {
    //     email: email,
    //     password: password,
    //   })
    //   .then((result) => {
    //     if (result.status === 200) {
    //       // setAuthTokens(result.data)
    //     }
    //   })
    //   .catch((e) => {
    //     const code = e.response.data.code
    //     if (codeErrorMessages[code] !== undefined) {
    //       alert(codeErrorMessages[code])
    //     } else {
    //       alert('Unknown error')
    //     }
    //   })
  }

  return (
    <>
      <Head>
        <title> Simple title </title>
      </Head>
      <Box mt={10}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Stack justifyContent="center" alignItems="center">
            <Typography component="h1" variant="h2" mb={8}>
              Sign up
            </Typography>
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(onSubmit)()
              }}
            >
              <Grid container spacing={2} mb={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    {...register('email', { required: true })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    {...register('password', { required: true })}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </form>
            <Box mt={5}>
              <Typography variant="body2" color="text.secondary" align="center">
                {'Already have an account? '}
                <Link href="/sign-in" variant="body2">
                  Sign in
                </Link>
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
// export default SignUp

export default dynamic(() => Promise.resolve(SignUp), { ssr: false })
