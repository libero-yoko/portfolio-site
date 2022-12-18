import React, { ReactElement } from 'react'

type Props = {
  color: 'primary' | 'secondary' | 'neutral'
  size: 'sm' | 'md' | 'lg'
  onClick?: () => void
  label: string
  fullWidth?: boolean
}

export default function Button({
  color,
  size,
  onClick,
  label,
  fullWidth,
}: Props): ReactElement {
  const buttonSize =
    size === 'sm'
      ? 'p-2'
      : size === 'md'
      ? 'p-3'
      : size === 'lg'
      ? 'p-4'
      : 'p-3'
  const buttonColor =
    color === 'primary'
      ? 'bg-cyan-600'
      : color === 'secondary'
      ? 'bg-[#637a5f]'
      : 'bg-stone-500'
  return (
    <button
      className={`rounded-lg ${buttonSize} ${
        fullWidth ? 'max-w-full' : 'max-w-xs'
      } ${buttonColor} text-white drop-shadow-xl active:drop-shadow-none hover:opacity-80 px-8 my-4`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
