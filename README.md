# Bingo da Diversidade

Site estatico em React para uma dinamica de bingo com cards sobre fatos, termos
e curiosidades da comunidade LGBTQIAPN+.

## Tecnologias

- React
- TypeScript
- React Router
- Tailwind CSS
- Vite

## Como rodar

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Gere a build de producao:

```bash
npm run build
```

Rode o lint:

```bash
npm run lint
```

## Rotas

- `/`: pagina inicial com as opcoes Comecar, Como funciona? e Cards.
- `/bingo`: tela principal da dinamica.
- `/about`: explicacao de como o bingo funciona.
- `/cards`: listagem dos 100 cards cadastrados.

## Dinamica do bingo

Na rota `/bingo`, a pessoa facilitadora digita manualmente o numero sorteado.
O app aceita apenas numeros inteiros de 1 a 100 e bloqueia numeros repetidos.
Cada numero valido adiciona uma bolinha na lista de sorteados e revela o card
correspondente.

## Cards

Os cards ficam em `src/cards.ts` e seguem este formato:

```ts
export type BingoCard = {
  number: number
  title: string
  description: string
  category: 'giria' | 'historia' | 'filme' | 'musica' | 'curiosidade' | 'termo'
  references: string[]
}
```

## Estrutura principal

```text
src/
  components/
    CategoryBadge.tsx
    Header.tsx
  pages/
    AboutPage.tsx
    BingoPage.tsx
    CardsPage.tsx
    HomePage.tsx
    bingo/
      AddNumberSection.tsx
      CurrentCardSection.tsx
      DrawnNumbersSection.tsx
    cards/
      CardGrid.tsx
  routes/
    AppRoutes.tsx
  App.tsx
  cards.ts
  main.tsx
```

## Observacoes

- O site nao usa backend.
- Os numeros sorteados ficam apenas no estado da pagina e sao perdidos ao
  recarregar.
- A listagem em `/cards` mostra numero, titulo, descricao, categoria e
  referencias quando existirem.
