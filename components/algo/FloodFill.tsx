import { useEffect, useState } from 'react'

const get2DArray = (x: number, y: number): Array<Array<number>> => {
  const col = []
  for (let i = 0; i < y; i++) {
    const row = []
    for (let j = 0; j < x; j++) {
      row.push(Math.floor(Math.random() * 3))
    }
    col.push(row)
  }
  return col
}

const validateNum = (num: number): number => {
  if (num < 0) {
    num = 0
  }
  if (num > 10) {
    num = 10
  }
  return num
}

export default function FloodFill() {
  const [x, setX] = useState<string>('')
  const [y, setY] = useState<string>('')
  const [array, setArray] = useState<Array<Array<number>>>([[]])
  useEffect(() => {
    updateTile(5, 5)
  }, [])

  const updateTile = (x: number, y: number) => {
    const newY = validateNum(y)
    setY(newY.toString())
    const newX = validateNum(x)
    setX(newX.toString())
    const array = get2DArray(newX, newY)
    setArray(array)
  }

  const spreadColor = (
    y: number,
    x: number,
    newColor: number,
    targetColor: number
  ): void => {
    if (
      x >= array[0].length ||
      y >= array.length ||
      y < 0 ||
      x < 0 ||
      array[y][x] === newColor
    ) {
      return
    }
    if (array[y][x] === targetColor && array[y][x] != newColor) {
      const newArray = [...array]
      newArray[y][x] = newColor
      setArray(newArray)
      setTimeout(() => spreadColor(y + 1, x, newColor, targetColor), 300)
      setTimeout(() => spreadColor(y - 1, x, newColor, targetColor), 300)
      setTimeout(() => spreadColor(y, x + 1, newColor, targetColor), 300)
      setTimeout(() => spreadColor(y, x - 1, newColor, targetColor), 300)
    }
  }
  return (
    <>
      {array?.map((row, index) => {
        let rowIndex = index
        return (
          <div className="flex justify-center" key={index}>
            <div className="flex">
              {row.map((num, index) => {
                let colIndex = index
                let cellColor
                num === 0
                  ? (cellColor = 'bg-[#F65A5A]') // red
                  : num === 1
                  ? (cellColor = 'bg-[#75B1DF]') // blue
                  : (cellColor = 'bg-[#F3EED9]') // white
                return (
                  <div
                    key={index}
                    onClick={() => {
                      let currentColor = array[rowIndex][colIndex]
                      spreadColor(rowIndex, colIndex, 2, currentColor)
                    }}
                    className={`w-8 h-8 text-center flex justify-center items-center ${cellColor} border border-stone-400 rounded-full`}
                  ></div>
                )
              })}
            </div>
          </div>
        )
      })}
      <div className="flex justify-center m-4 gap-8">
        <label className="flex self-center">
          <div className="text-stone-600 mr-2">X</div>
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
          <div className="text-stone-600 mr-2">Y</div>
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
      </div>
      <button
        className="bg-stone-200 px-2 rounded-md"
        onClick={() => updateTile(parseInt(x), parseInt(y))}
      >
        Reset
      </button>
    </>
  )
}
