import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Diagnostico } from "./pages/Diagnostico"
import { Home } from "./pages/Home"
import { Layout } from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Páginas que compartilham Header/Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Diagnóstico isolado, sem Header/Footer */}
        <Route path="/diagnostico" element={<Diagnostico />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
