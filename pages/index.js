import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/sidebar'
import Center from '../components/center'
import Player from "../components/Player"
import { getSession } from 'next-auth/react'

const Home = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify 2.0</title> 
      </Head> 
      <main className='flex'> 
        <Sidebar /> 
        <Center /> 
      </main>
      <div className='sticky bottom-0'>
        <Player />
      </div>
    </div>
  )
}

export default Home

//Server rendering user session to prevent prefetch user session "no token"
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}
