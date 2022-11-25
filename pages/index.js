import Head from 'next/head'
import Image from 'next/image'
import Descontos from '../components/Descontos'
import Form from '../components/Form'
import Header from '../components/Header'
import Testemunhos from '../components/Testemunhos'
import Top from '../components/Top'
import About from '../components/About'
import Script from 'next/script'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div>
        <div className='pt-8 md:h-screen px-10 bg-[#181818]'>
          <Header />
          <Top />
        </div>
        <About />
        <Descontos />
        <ContactForm />
        <Footer />
        {/*<Testemunhos></Testemunhos>*/}
    </div>
  )
}
