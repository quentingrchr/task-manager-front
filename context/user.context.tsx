import { IJwtPayload } from '@interfaces'
import { getJwt } from '@utils/jwt'
import { createContext, useState, ReactNode, Dispatch, useEffect } from 'react'

export const UserContext = createContext<IContextValue>({} as IContextValue)

interface IProps {
  children: ReactNode
}

interface IContextValue {
  user: IJwtPayload | null
  setUser: Dispatch<IJwtPayload>
}
export const UserContextProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IJwtPayload | null>(null)
  useEffect(() => {
    const JwtPayload = getJwt()
    if (JwtPayload) {
      setUser(JwtPayload)
    }
  }, [])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
