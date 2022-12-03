import dynamic from 'next/dynamic'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '@mui/system'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { isLoggedIn, setAuthTokens } from 'axios-jwt'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { useAuth } from '@hooks'

import SignForm, { IInput } from '@components/sign-form'

interface IOnSubmitData {
  email: string
  password: string
}

async function signUp(email: string, password: string) {
  axios
    .post('http://localhost:3000/auth/signup', {
      email: email,
      password: password,
    })
    .then((result) => {
      if (result.status === 200) {
        return result.data
      }
    })
    .catch((e) => {
      const code = e.response.data.code
      if (codeErrorMessages[code] !== undefined) {
        alert(codeErrorMessages[code])
      } else {
        alert('Unknown error')
      }
    })
}

const SignUp: NextPage = () => {
  const inputs: IInput[] = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'Enter your email',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      placeholder: 'Enter your password',
    },
  ]

  const codeErrorMessages = {
    '402': 'Email already exists',
    '403': 'Invalid credentials',
  }

  const onSubmit = async (data: SubmitHandler<FieldValues>) => {
    if (!window) return
    const { email, password } = data
    const res = await signUp(email, password)
    console.log(res)
  }

  return (
    <>
      <Head>
        <title> Simple title </title>
      </Head>
      <SignForm
        inputs={inputs}
        onSubmit={onSubmit}
        title="Sign up"
        submitLabel="Sign up"
        link={{
          href: '/sign-in',
          label: 'Sign in',
          text: 'Already have an account?',
        }}
      />
    </>
  )
}
// export default SignUp

export default dynamic(() => Promise.resolve(SignUp), { ssr: false })
