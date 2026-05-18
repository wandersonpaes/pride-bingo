import { Link, NavLink } from 'react-router'

export function Header() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Link className="text-lg font-black text-zinc-950" to="/">
        Bingo da Diversidade
      </Link>
      <nav className="flex flex-wrap gap-2">
        <NavLink className={navClassName} to="/bingo">
          Comecar
        </NavLink>
        <NavLink className={navClassName} to="/about">
          Como funciona?
        </NavLink>
        <NavLink className={navClassName} to="/cards">
          Cards
        </NavLink>
      </nav>
    </header>
  )
}

function navClassName({ isActive }: { isActive: boolean }) {
  return [
    'rounded-md px-3 py-2 text-sm font-bold transition',
    isActive
      ? 'bg-zinc-950 text-white'
      : 'bg-white text-zinc-700 hover:bg-zinc-200',
  ].join(' ')
}
