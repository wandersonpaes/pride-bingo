import type { BingoCard } from '../../cards'
import { CategoryBadge } from '../../components/CategoryBadge'

type CardGridProps = {
  cards: BingoCard[]
}

export function CardGrid({ cards }: CardGridProps) {
  return (
    <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cards.map((card) => (
        <article
          className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
          key={card.number}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-950 font-black text-white">
              {card.number}
            </div>
            <CategoryBadge category={card.category} variant="rose" />
          </div>
          <h2 className="mt-5 text-xl font-black tracking-normal">
            {card.title}
          </h2>
          <p className="mt-3 text-left leading-7 text-zinc-600">
            {card.description}
          </p>
          {card.references.length > 0 ? (
            <ul className="mt-4 list-inside list-disc text-left text-sm text-zinc-500">
              {card.references.map((reference) => (
                <li key={reference}>{reference}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </section>
  )
}
