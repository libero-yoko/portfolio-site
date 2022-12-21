import { ReactElement } from 'react'

interface Props {
  color: String
  label: String
}

export default function Badge({ color, label }: Props): ReactElement {
  return (
    <div
      className={`text-sm font-semibold text-stone-600 px-4 grow h-10 flex justify-center items-center border-2 ${color}`}
    >
      {label}
    </div>
  )
}
