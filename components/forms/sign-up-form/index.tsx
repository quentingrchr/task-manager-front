import axios from 'axios'
import SignForm from '@components/forms/sign-form'
import { inputs } from './inputs'
import { errors as errorMessages } from './errors'
import { IApiError } from '@interfaces'
import { useState } from 'react'

interface IOnSubmitData {
  email: string
  password: string
}

export default function SignUpForm() {
  const [apiError, setApiError] = useState<IApiError | null>(null)
  async function signUp(email: string, password: string) {
    try {
      const response = await axios.post('http://localhost:3000/auth/signup', {
        email: email,
        password: password,
      })
      const { data, status } = response
      if (status === 200) {
        return data
      }
    } catch (e: any) {
      const code = e.response.data.code
      if (axios.isAxiosError(e)) {
        const { response } = e
        const { data } = response as any
        setApiError(data)
      }
    }
  }

  const onSubmit = async (data: IOnSubmitData) => {
    if (!window) return
    const { email, password } = data
    const res = await signUp(email, password)
    console.log(res)
  }

  return (
    <SignForm
      inputs={inputs}
      onSubmit={onSubmit}
      title="Sign up"
      submitLabel="Create your account"
      link={{
        href: '/sign-in',
        label: 'Sign in',
        text: 'Already have an account? ',
      }}
      apiError={apiError}
    />
  )
}
