import { MouseEvent, ReactElement } from 'react'
import styles from '../../styles/Kikko.module.css'

export default function Kikko({ col, row, color }) {
  const cols = new Array()
  for (let i = 1; i <= col; i++) {
    cols.push(
      i % 2 === 0 ? (
        <div key={i} className={`${styles.kikko_row} ${styles.even}`}>
          <Row id={`row-${i}`} num={row + 1} color={color} />
        </div>
      ) : (
        <div key={i} className={styles.kikko_row}>
          <Row id={`row-${i}`} num={row} color={color} />
        </div>
      )
    )
  }
  return <div>{cols}</div>
}

function Cell({ color, id }) {
  function onClickCell(e) {
    e.target.parentNode.firstChild.style = { borderTopColor: 'green' }
    e.target.parentNode.firstChild.nextSibling.style = {
      background: '#354231'
    }
    e.target.parentNode.lastChild.style = {
      borderBottomColor: '#354231'
    }
  }
  return (
    <div
      className={styles.kikko}
      id={id}
      onClick={(event) => onClickCell(event)}
    >
      <div
        className={`${styles.kikko_top}`}
        style={{ borderBottomColor: color }}
      ></div>
      <div
        className={`${styles.kikko_middle}`}
        style={{ background: color }}
      ></div>
      <div
        className={`${styles.kikko_bottom}`}
        style={{ borderTopColor: color }}
      ></div>
    </div>
  )
}

function Row({ id, num, color }) {
  const rows = new Array()
  for (let i = 1; i < num; i++) {
    rows.push(<Cell id={`col-${i}-${id}`} key={i} color={color} />)
  }
  return <>{rows}</>
}
