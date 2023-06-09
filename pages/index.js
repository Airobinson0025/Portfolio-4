import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'




export default function Home() {
  return (
    <>
      <Head>
        <title>Aaron Robinson Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <section>
        <Hero />
      </section>

     
      
    </>
  )
}
