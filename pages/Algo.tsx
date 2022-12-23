import { ReactElement, useEffect, useState } from 'react'
import { get2DArray } from '../components/algo/floodfill'
import Layout from '../components/layout/Layout'

export default function Algo(): ReactElement {
  const [array, setArray] = useState<Array<Array<number>> | null>(null)
  useEffect(() => {
    onClickReset()
  }, [])
  const onClickReset = () => {
    const array = get2DArray(4, 5)
    setArray(array)
  }
  return (
    <Layout title="Algo">
      <>
        {array?.map((row) => {
          return (
            <div className="flex justify-center">
              <div className="flex">
                {row.map((num) => {
                  let cellColor
                  num === 0
                    ? (cellColor = 'bg-yellow')
                    : num === 1
                    ? (cellColor = 'bg-pink')
                    : (cellColor = 'bg-green')
                  return (
                    <div
                      className={`w-8 h-8 text-center flex justify-center items-center ${cellColor}`}
                    >
                      {num}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
        <button onClick={onClickReset}>Reset</button>
      </>
    </Layout>
  )
}
