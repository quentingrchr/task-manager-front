import { IJwtPayload } from '@interfaces'
import { setCookie, getCookie, setJwt, parseJwt } from '../utils'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '@context/user.context'
import axios from 'axios'

interface ISignIn {
  email: string
  password: string
}

const useAuth = () => {
  const { user, setUser } = useContext(UserContext)
  const [error, setError] = useState(null)

  async function signIn({ email, password }: ISignIn) {
    try {
      const { data } = await axios.post('http://localhost:3000/auth/signin', {
        email,
        password,
      })
      const { accessToken } = data
      setJwt(accessToken)
      setUser(parseJwt(accessToken))
    } catch (e) {
      setError(e)
    }
  }

  return {
    signIn,
    user,
    error,
  }
}

export default useAuth
