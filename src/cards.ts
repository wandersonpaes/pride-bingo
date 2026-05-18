export type BingoCard = {
  number: number
  title: string
  description: string
  category: 'giria' | 'historia' | 'filme' | 'musica' | 'curiosidade' | 'termo'
  references: string[]
}

const categories: BingoCard['category'][] = [
  'giria',
  'historia',
  'filme',
  'musica',
  'curiosidade',
  'termo',
]

export const bingoCards: BingoCard[] = Array.from({ length: 100 }, (_, index) => {
  const number = index + 1
  const category = categories[index % categories.length]

  return {
    number,
    title: `Card ${number.toString().padStart(2, '0')}`,
    description:
      'Placeholder para um fato, termo ou curiosidade da comunidade LGBTQIAPN+.',
    category,
    references: [],
  }
})

export const bingoCardsByNumber = new Map(
  bingoCards.map((card) => [card.number, card]),
)
