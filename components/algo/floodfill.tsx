export const get2DArray = (x: number, y: number): Array<Array<number>> => {
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

export const floodFill = () => {}
