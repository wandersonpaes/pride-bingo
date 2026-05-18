import { Route, Routes } from 'react-router'
import { AboutPage } from '../pages/AboutPage'
import { BingoPage } from '../pages/BingoPage'
import { CardsPage } from '../pages/CardsPage'
import { HomePage } from '../pages/HomePage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bingo" element={<BingoPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cards" element={<CardsPage />} />
    </Routes>
  )
}
