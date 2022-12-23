import { ReactElement, useEffect, useState } from 'react'
import { get2DArray } from '../components/algo/floodfill'
import Layout from '../components/layout/Layout'

export default function Algo(): ReactElement {
  const [x, setX] = useState<string>('')
  const [y, setY] = useState<string>('')
  const [array, setArray] = useState<Array<Array<number>> | null>(null)
  useEffect(() => {
    updateTile(5, 5)
  }, [])

  useEffect(() => {
    console.log(x, y)
  }, [x, y])

  function validateNum(num: number): number {
    if (num < 0) {
      num = 0
    }
    if (num > 10) {
      num = 10
    }
    return num
  }

  const updateTile = (x: number, y: number) => {
    const newY = validateNum(y)
    setY(newY.toString())
    const newX = validateNum(x)
    setX(newX.toString())

    const array = get2DArray(newX, newY)
    setArray(array)
  }
  return (
    <Layout title="Algo">
      <>
        {array?.map((row, index) => {
          return (
            <div className="flex justify-center" key={index}>
              <div className="flex">
                {row.map((num, index) => {
                  let cellColor
                  num === 0
                    ? (cellColor = 'bg-yellow')
                    : num === 1
                    ? (cellColor = 'bg-pink')
                    : (cellColor = 'bg-green')
                  return (
                    <div
                      key={index}
                      className={`w-8 h-8 text-center flex justify-center items-center ${cellColor} border border-white`}
                    ></div>
                  )
                })}
              </div>
            </div>
          )
        })}
        <div className="flex flex-col justify-center m-4">
          <label className="flex self-center">
            <div className="text-stone-600">X</div>
            <input
              min="0"
              max="10"
              type="number"
              id="x"
              title="X"
              value={x ?? 0}
              className="flex w-sm text-stone-500 border boder-stone-800 rounded-sm"
              onChange={(e) => {
                updateTile(Number(e.target.value), parseInt(y))
              }}
            ></input>
          </label>
          <label className="flex self-center">
            <div className="text-stone-600">Y</div>
            <input
              min="0"
              max="15"
              type="number"
              id="y"
              title="Y"
              value={y ?? 0}
              className="flex w-sm text-stone-500 border boder-stone-800 rounded-sm"
              onChange={(e) => {
                updateTile(parseInt(x), Number(e.target.value))
              }}
            ></input>
          </label>
          <button onClick={() => updateTile(parseInt(x), parseInt(y))}>
            Reset
          </button>
        </div>
      </>
    </Layout>
  )
}
