import { setJwt, parseJwt } from '../utils'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '@context/user.context'
import axios from 'axios'
import { IApiError } from '@interfaces'
import { AxiosError } from 'axios'

interface ISignIn {
  email: string
  password: string
}

const useAuth = () => {
  const { user, setUser } = useContext(UserContext)
  const [error, setError] = useState<IApiError | null>(null)

  async function signIn({ email, password }: ISignIn): Promise<void> {
    setError(null)
    try {
      const { data } = await axios.post('http://localhost:3000/auth/signin', {
        email,
        password,
      })
      const { accessToken } = data
      setJwt(accessToken)
      setUser(parseJwt(accessToken))
    } catch (e: any) {
      if (axios.isAxiosError(e)) {
        const { response } = e
        const { data } = response as any
        setError(data)
      }
    }
  }

  return {
    signIn,
    user,
    apiError: error,
  }
}

export default useAuth
