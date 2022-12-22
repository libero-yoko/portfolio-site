import Link from 'next/link'
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
    <div className="p-2">
      {url != null && (
        <Link href={url} target="_blank">
          <div className="flex flex-col flex-1 rounded-md border border-stone-500 hover:opacity-50">
            <h1 className="font-bold mt-2 mx-2">{title}</h1>
            <div className="font-light mx-2 text-stone-400">{description}</div>
            <div className="flex gap-2 mx-2 py-2">
              {badges.map((item, index) => (
                <div key={index} className="border border-stone-500 rounded-sm">
                  <span className="mx-2">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}
