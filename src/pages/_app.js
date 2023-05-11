import Header from '@/components/Header'
import Head from 'next/head'
import '@/styles/globals.scss'
import headerStyles from '@/styles/components/Header.module.scss'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    if(router.pathname === "/"){
      document.querySelector(`.${headerStyles.header}`).setAttribute('white', false)
    }else{
      document.querySelector(`.${headerStyles.header}`).setAttribute('white', true)
    }
  }, [router.pathname])

  return (
    <>
      <Head>
        <title>Alpine Escapes - Ski Resorts Of The World</title>
        <meta name="description" content="Website by Mercury Lab" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps}/>
      </main>
    </>
  )
}
