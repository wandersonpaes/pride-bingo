import { Link } from 'react-router'

export function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-10 px-6 py-12 text-center">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-300">
            Dinamica interativa
          </p>
          <h1 className="text-5xl font-black tracking-normal text-white sm:text-7xl">
            Bingo da Diversidade
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-300">
            Uma experiencia de bingo para revelar cards sobre fatos, termos e
            curiosidades LGBTQIAPN+ a partir dos numeros sorteados.
          </p>
        </div>

        <nav className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
          <Link className="home-action bg-rose-500 text-white" to="/bingo">
            Comecar
          </Link>
          <Link className="home-action bg-white text-zinc-950" to="/about">
            Como funciona?
          </Link>
          <Link className="home-action bg-cyan-400 text-zinc-950" to="/cards">
            Cards
          </Link>
        </nav>
      </section>
    </main>
  )
}
