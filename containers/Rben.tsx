import React from 'react'
import { Edit } from './Edit'
import { Unit as _U } from './Unit'
import { useRben } from '../hooks'

export type RbenChildren = (
    input: string,
    key: string,
) => null | JSX.Element

export type RbenProps = Partial<{
    children: RbenChildren
    [key: string]: any
}>

const _W = (props: any) => props.children
const _C = (...args: any) => <Edit key={args[1]} args={args}/>

export function Rben (props: RbenProps): null | JSX.Element

export function Rben (props: any={}) {
    const { children=_C, Unit=_U, Wrap=_W, ...other } = props
    const [ctrl, set] = useRben(other)
    return (
      <Wrap size={ctrl.size} data={ctrl.data}>
        {ctrl.entries.map(([key="", inputs=[]]) =>
          <Unit index={key} {...{key, set}}>
            {inputs.map(children)}
          </Unit>
        )}
      </Wrap>
    )
}
