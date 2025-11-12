// src/Layout.jsx
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { BackToTopButton } from "./BackToTopButton"
import { WhatsAppButton } from "./WhatssapButton"

export function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* Aqui entram as páginas (Home, Diagnóstico, etc.) */}
      <WhatsAppButton />
      <Footer />
      <BackToTopButton />
    </>
  )
}
