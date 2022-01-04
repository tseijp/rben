import React from 'react'
import { Flex } from '../components/Flex'
import { Glass } from '../components/Glass'
import { RbenController } from '../hooks'

const plus = (p=[]) => [...p, p.slice(-1)[0]]
const minus = (p=[]) => p.slice(0, p.length - 1)

export type UnitProps = Partial<{
    set: RbenController['dispatch']
    index: string,
    children: null | JSX.Element
}>

export function Unit (props: any) {
    const { children, index="", set=()=>{}, ...other } = props
    return (
      <Flex {...other}>
        <Glass $clp={index==='Globals'}>
          { index }
          <Glass $btn $p onClick={() => set(index, plus)} />
          <Glass $btn $m onClick={() => set(index, minus)} />
          {children}
        </Glass>
      </Flex>
    )
}
