import dynamic from 'next/dynamic'
import type { NextPage } from 'next'
import Head from 'next/head'
import { SignInForm } from '@components'

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title> Simple title </title>
      </Head>
      <SignInForm />
    </>
  )
}
// export default SignUp

export default dynamic(() => Promise.resolve(SignIn), { ssr: false })
