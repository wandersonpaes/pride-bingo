import type { BingoCard } from '../cards'

const categoryLabels: Record<BingoCard['category'], string> = {
  giria: 'Giria',
  historia: 'Historia',
  filme: 'Filme',
  musica: 'Musica',
  curiosidade: 'Curiosidade',
  termo: 'Termo',
}

type CategoryBadgeProps = {
  category: BingoCard['category']
  variant?: 'cyan' | 'rose'
}

export function CategoryBadge({
  category,
  variant = 'cyan',
}: CategoryBadgeProps) {
  const className =
    variant === 'rose'
      ? 'rounded-full bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-rose-700'
      : 'inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-cyan-800'

  return <span className={className}>{categoryLabels[category]}</span>
}
