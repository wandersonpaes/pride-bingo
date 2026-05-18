import type { BingoCard } from '../../cards'
import { CategoryBadge } from '../../components/CategoryBadge'

type CurrentCardSectionProps = {
  card?: BingoCard
}

export function CurrentCardSection({ card }: CurrentCardSectionProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm lg:col-span-3">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
        Card da vez
      </p>
      {card ? (
        <div className="mt-5 grid gap-5 md:grid-cols-[auto,1fr] md:items-start">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-rose-500 text-4xl font-black text-white">
            {card.number}
          </div>
          <div className="text-left">
            <CategoryBadge category={card.category} />
            <h2 className="mt-4 text-3xl font-black tracking-normal text-zinc-950">
              {card.title}
            </h2>
            <p className="mt-3 text-lg leading-8 text-zinc-700">
              {card.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-5 flex min-h-40 items-center rounded-lg border border-dashed border-zinc-300 px-6 text-zinc-500">
          Adicione um numero sorteado para revelar o card correspondente.
        </div>
      )}
    </article>
  )
}
