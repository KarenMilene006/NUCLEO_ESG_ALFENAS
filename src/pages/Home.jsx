// src/pages/Home.jsx
import { Hero } from "../components/Hero"
import { Beneficios } from "../components/Beneficios"
import { Incentivos } from "../components/Incentivos"
import { SectionQuemSomos } from "../components/SectionQuemSomos"
import { SectionOqueFazemos } from "../components/SectionOqueFazemos"
import { SectionPorQueESG } from "../components/SectionPorQueESG"
import { SectionEmpresasParceiros } from "../components/SectionEmpresasParceiros"
import { SectionComoFunciona } from "../components/SectionComoFunciona"
import { SectionContato } from "../components/SectionContato"

export function Home() {
  return (
    <>
      <Hero />
      <Beneficios />
      <Incentivos />
      <SectionQuemSomos />
      <SectionOqueFazemos />
      <SectionPorQueESG />
      <SectionEmpresasParceiros />
      <SectionComoFunciona />
      <SectionContato />
    </>
  )
}
