type DrawnNumbersSectionProps = {
  drawnNumbers: number[]
}

export function DrawnNumbersSection({
  drawnNumbers,
}: DrawnNumbersSectionProps) {
  return (
    <section className="flex min-h-[58vh] flex-1 flex-col rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Numeros sorteados
          </p>
          <h1 className="text-2xl font-bold tracking-normal">
            {drawnNumbers.length} de 100
          </h1>
        </div>
        <p className="text-sm text-zinc-500">
          Cada bolinha representa um numero ja chamado.
        </p>
      </div>

      <div className="grid flex-1 auto-rows-[4rem] grid-cols-[repeat(auto-fill,minmax(4rem,1fr))] content-start gap-3 overflow-y-auto pr-1">
        {drawnNumbers.length === 0 ? (
          <div className="col-span-full flex min-h-40 items-center justify-center rounded-lg border border-dashed border-zinc-300 text-zinc-500">
            Nenhum numero sorteado ainda.
          </div>
        ) : (
          drawnNumbers.map((number) => (
            <div
              aria-label={`Numero sorteado ${number}`}
              className="bingo-ball"
              key={number}
            >
              {number}
            </div>
          ))
        )}
      </div>
    </section>
  )
}
