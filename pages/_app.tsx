// Styles
import '@styles/reset.scss'
import '@styles/base.scss'
// Material UI Font
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { useEffect, useState, useRef } from 'react'

import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserContextProvider } from '@context/user.context'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
})
