import React from 'react'
import { useAuth } from '@hooks'
import { SignForm } from '@components'
import { inputs } from './inputs'
import { errors as errorMessages } from './errors'

interface IOnSubmitData {
  email: string
  password: string
}

export default function SignInForm() {
  const { signIn, apiError } = useAuth()

  const onSubmit = (data: IOnSubmitData) => {
    if (!window) return
    const { email, password } = data
    signIn({ email, password })
  }

  return (
    <SignForm
      inputs={inputs}
      onSubmit={onSubmit}
      title="Sign in"
      submitLabel="Sign in"
      link={{
        href: '/sign-in',
        text: "You don't have an account? ",
        label: 'Connect',
      }}
      apiError={apiError}
    />
  )
}
