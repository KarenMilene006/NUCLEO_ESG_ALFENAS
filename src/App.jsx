import { BackToTopButton } from "./components/BackToTopButton"
import { Beneficios } from "./components/Beneficios"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { SectionComoFunciona } from "./components/SectionComoFunciona"
import { SectionContato } from "./components/SectionContato"
import { SectionEmpresasParceiros } from "./components/SectionEmpresasParceiros"
import { SectionOqueFazemos } from "./components/SectionOqueFazemos"
import { SectionPorQueESG } from "./components/SectionPorQueESG"
import { SectionQuemSomos } from "./components/SectionQuemSomos"
import { WhatsAppButton } from "./components/WhatssapButton"
import { Incentivos } from "./components/Incentivos" 

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Beneficios/>
      <Incentivos />
      <SectionQuemSomos />
      <SectionOqueFazemos />
      <SectionPorQueESG />
      <SectionEmpresasParceiros />
      <SectionComoFunciona />
      <SectionContato />
      <WhatsAppButton />
      <Footer/>
      <BackToTopButton />
    </>
  )
}

export default App
