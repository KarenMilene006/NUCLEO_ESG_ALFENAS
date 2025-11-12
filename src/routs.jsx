import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Diagnostico } from "../pages/Diagnostico"

export default function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diagnostico" element={<Diagnostico />} />
    </Routes>
  )
}
