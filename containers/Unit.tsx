import React from 'react'
import { Glass } from '../components/Glass'

const plus = (p=[]) => [...p, p.slice(-1)[0]]
const minus = (p=[]) => p.slice(0, p.length - 1)

export function Unit (props: any) {
    const { children, index="", set } = props
    return (
      <Glass key={index} h3>
        {index}
        <Glass button p onClick={() => set(index, plus)} />
        <Glass button m onClick={() => set(index, minus)} />
        {children}
      </Glass>
    )
}
