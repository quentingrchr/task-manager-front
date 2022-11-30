import dynamic from 'next/dynamic'
import type { NextPage } from 'next'
import Head from 'next/head'

const Board = dynamic(() => import('@components/board'), { ssr: false })
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
