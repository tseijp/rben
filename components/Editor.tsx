import React from 'react'
import { Glass } from './Glass'
import { Flex } from './Container'
import { useRuby, useForceUpdate } from '../hooks'

export function Editor (props: any) {
    const { args, rm, ...other } = props
    const [ v, i, self ] = args
    const forceUpdate = useForceUpdate()
    const handleChange = (e: any) => set(e.target.value)
    const [$, set] = useRuby(() => {
        self[i] = $.input
        forceUpdate()
    }, v, 1000)

    return (
      <Flex {...other}>
        <Glass>
          <Flex row left style={{transform: "translate(1rem, 1rem)"}}>
            <Glass button onClick={rm}>✕</Glass>
            <Glass button onClick={rm}>■</Glass>
            <Glass button onClick={() => set($.input)}>
              {$.running? "wait...": "▶"}
            </Glass>
          </Flex>
          <Glass input value={$.input} onChange={handleChange} />
          {$.output &&
            <Glass output>{$.output}</Glass>
          }
        </Glass>
      </Flex>
    )
}
