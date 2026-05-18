import type { FormEvent } from 'react'

type AddNumberSectionProps = {
  currentNumber: string
  message: string
  onCurrentNumberChange: (number: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function AddNumberSection({
  currentNumber,
  message,
  onCurrentNumberChange,
  onSubmit,
}: AddNumberSectionProps) {
  return (
    <aside className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm lg:col-span-1">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
        Adicionar numero
      </p>
      <form className="mt-5 flex flex-col gap-4" onSubmit={onSubmit}>
        <label className="flex flex-col gap-2 text-left text-sm font-medium text-zinc-700">
          Numero sorteado
          <input
            className="h-14 rounded-md border border-zinc-300 px-4 text-2xl font-bold outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
            inputMode="numeric"
            max="100"
            min="1"
            onChange={(event) => onCurrentNumberChange(event.target.value)}
            placeholder="1-100"
            type="number"
            value={currentNumber}
          />
        </label>
        <button className="rounded-md bg-zinc-950 px-5 py-4 font-bold text-white transition hover:bg-zinc-800">
          Adicionar
        </button>
      </form>
      {message ? (
        <p className="mt-4 rounded-md bg-zinc-100 px-3 py-2 text-sm text-zinc-700">
          {message}
        </p>
      ) : null}
    </aside>
  )
}
