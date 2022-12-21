import { ReactElement } from 'react'

type Props = {
  title: ReactElement | string
  description: string
  badges: Array<string>
  url?: string
}
export default function Card({
  title,
  description,
  badges,
  url
}: Props): ReactElement {
  return (
    <div className="rounded-md flex-1 p-3 border border-stone-500">
      <h1 className="font-bold">{title}</h1>
      <div className="font-light text-stone-400">{description}</div>
      <div className="flex gap-2 py-2">
        {badges.map((item, index) => (
          <div key={index} className="px-2 border border-stone-500 rounded-sm">
            {item}
          </div>
        ))}
      </div>
      <div className="px-2 w-14 bg-stone-500 text-white text-center rounded-sm  hover:animate-pulse">
        <a href={url} target="_blank">
          Visit
        </a>
      </div>
    </div>
  )
}
