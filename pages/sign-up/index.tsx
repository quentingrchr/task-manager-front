import dynamic from 'next/dynamic'
import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { SignUpForm } from '@components'

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title> Simple title </title>
      </Head>
      <SignUpForm />
    </>
  )
}

export default dynamic(() => Promise.resolve(SignUp), { ssr: false })
