import React from 'react'
import { Glass } from '../components/Glass'
import { Flex } from '../components/Flex'
import { Time } from '../components/Time'
import { useRuby, useForceUpdate } from '../hooks'

export type EditProps = Partial<{
    children: null | JSX.Element
    args: [string[], string, any]
}>

export function Edit (props: any) {
    const { args, rm=()=>{}, ...other } = props
    const [ input, key, self ] = args
    const forceUpdate = useForceUpdate()
    const handleChange = (e: any) => set(e.target.value)
    const [$, set] = useRuby(() => {
        self[key] = $.input
        forceUpdate()
    }, input, 1000)
    return (
      <Glass {...other}>
        <Flex $row $tool>
          <Glass $btn $start onClick={set}/>
          <Glass $btn $stop onClick={rm}/>
          <Time $dt={$.deltaTime}/>
        </Flex>
        <Glass $in value={$.input} onChange={handleChange} />
        <Glass $in value={$.output} $out></Glass>
      </Glass>
    )
}
