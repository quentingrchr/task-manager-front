import type { NextPage } from 'next'
import Head from 'next/head'
import { Board } from '@components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Simple title </title>
      </Head>
      <Board />
    </>
  )
}

export default Home
