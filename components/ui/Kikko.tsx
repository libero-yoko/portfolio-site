import { ReactElement } from 'react'
import styles from '../../styles/Kikko.module.css'

type Props = {
  col: number
  row: number
  color: string
}

type RowProps = {
  num: number
  color: string
}
export default function Kikko({ col, row, color }: Props): ReactElement {
  const cols = new Array(col)
  for (let i = 1; i <= col; i++) {
    cols.push(
      i % 2 === 0 ? (
        <div key={i} className={`${styles.kikko_row} ${styles.even}`}>
          <Row num={row + 1} color={color} />
        </div>
      ) : (
        <div key={i} className={styles.kikko_row}>
          <Row num={row} color={color} />
        </div>
      ),
    )
  }
  return <div>{cols}</div>
}

function Cell({ color }: { color: string }): ReactElement {
  const cellColor = `bg-[${color}]`
  const borderColor = `border-[${color}]`
  console.log(cellColor, borderColor)
  return (
    <div className={styles.kikko}>
      <div className={`${styles.kikko_top} ${borderColor}`}></div>
      <div className={`${styles.kikko_middle} ${cellColor}`}></div>
      <div className={`${styles.kikko_bottom} ${borderColor}`}></div>
    </div>
  )
}

function Row({ num, color }: RowProps): ReactElement {
  const rows = new Array(num)
  for (let i = 1; i < num; i++) {
    rows.push(<Cell key={i} color={color} />)
  }
  return <>{rows}</>
}