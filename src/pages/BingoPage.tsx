import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { bingoCardsByNumber } from '../cards'
import { Header } from '../components/Header'
import { AddNumberSection } from './bingo/AddNumberSection'
import { CurrentCardSection } from './bingo/CurrentCardSection'
import { DrawnNumbersSection } from './bingo/DrawnNumbersSection'

export function BingoPage() {
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [currentNumber, setCurrentNumber] = useState('')
  const [message, setMessage] = useState('')

  const currentCard = useMemo(() => {
    const lastNumber = drawnNumbers.at(-1)
    return lastNumber ? bingoCardsByNumber.get(lastNumber) : undefined
  }, [drawnNumbers])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const number = Number(currentNumber)

    if (!Number.isInteger(number) || number < 1 || number > 100) {
      setMessage('Digite um numero inteiro entre 1 e 100.')
      return
    }

    if (drawnNumbers.includes(number)) {
      setMessage(`O numero ${number} ja foi sorteado.`)
      return
    }

    setDrawnNumbers((numbers) => [...numbers, number])
    setCurrentNumber('')
    setMessage(`Numero ${number} adicionado.`)
  }

  return (
    <main className="min-h-screen bg-zinc-100 text-zinc-950">
      <div className="flex min-h-screen flex-col gap-4 p-4">
        <Header />

        <DrawnNumbersSection drawnNumbers={drawnNumbers} />

        <section className="grid min-h-[30vh] gap-4 lg:grid-cols-4">
          <CurrentCardSection card={currentCard} />
          <AddNumberSection
            currentNumber={currentNumber}
            message={message}
            onCurrentNumberChange={setCurrentNumber}
            onSubmit={handleSubmit}
          />
        </section>
      </div>
    </main>
  )
}
