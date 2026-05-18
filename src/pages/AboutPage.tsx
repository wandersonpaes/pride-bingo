import { Header } from '../components/Header'

export function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 py-8">
        <Header />
        <section className="my-auto space-y-6">
          <h1 className="text-4xl font-black tracking-normal sm:text-6xl">
            Cada numero revela uma conversa.
          </h1>
          <div className="space-y-4 text-lg leading-8 text-zinc-700">
            <p>
              A pessoa facilitadora sorteia os numeros fisicamente e registra
              cada resultado na tela do bingo.
            </p>
            <p>
              Quando um numero de 1 a 100 e adicionado, o site mostra o card
              associado a ele. Nesta versao, os cards estao prontos como
              placeholders para receber fatos, termos e curiosidades finais.
            </p>
            <p>
              Numeros repetidos ou fora do intervalo sao bloqueados para manter
              a dinamica organizada durante a atividade.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
