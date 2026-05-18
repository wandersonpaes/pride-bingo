import { bingoCards } from '../cards'
import { Header } from '../components/Header'
import { CardGrid } from './cards/CardGrid'

export function CardsPage() {
  return (
    <main className="min-h-screen bg-zinc-100 text-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <Header />
        <CardGrid cards={bingoCards} />
      </div>
    </main>
  )
}
