import Head from 'next/head'
import Image from 'next/image'
import Descontos from '../components/Descontos'
import Form from '../components/Form'
import Header from '../components/Header'
import About from '../components/About'
import Top from '../components/Top'
import Script from 'next/script'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <div className="pt-8 md:h-screen px-10 bg-no-repeat bg-cover bg-center bg-[url('/background-hero-mobile.png')] xl:bg-[url('/background-hero.png')]">
          <Header />
          <Top />
        </div>
        <About />
        <Descontos />
        <ContactForm />
        <Footer />
        {/*<Form></Form>
        <Testemunhos></Testemunhos>*/}
    </div>
  )
}
