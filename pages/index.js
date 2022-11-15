import Head from 'next/head'
import Image from 'next/image'
import Descontos from '../components/Descontos'
import Form from '../components/Form'
import Header from '../components/Header'
import Testemunhos from '../components/Testemunhos'
import Top from '../components/Top'
import Script from 'next/script'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Site - Landing Page</title>
        <meta name="description" content="Website Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pb-10">
        <div className='md:h-screen px-10 pb-4 bg-[#181818]'>
          <Header></Header>
          <Top/>
        </div>
        <About />
        <Descontos/>
        <Testemunhos></Testemunhos>
      </main>
    </div>
  )
}
