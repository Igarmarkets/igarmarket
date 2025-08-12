import Link from 'next/link'
import clsx from 'clsx'

type Props = {
  className?: string
}

export function ManifoldLogo(props: Props) {
  const { className } = props
  return (
    <Link
      href="/"
      aria-label="Ir al inicio de Igarmarkets"
      className={clsx('flex items-center gap-2', className)}
    >
      {/* Icono/imagotipo: usa /logo.svg que ya actualizamos */}
      <img
        src="/logo.svg"
        alt="Igarmarkets"
        className="h-6 w-6"
        loading="eager"
        decoding="async"
      />
      {/* Wordmark simple (puedes ocultarlo en móvil si quieres) */}
      <span className="font-semibold tracking-tight">Igarmarkets</span>
    </Link>
  )
}
