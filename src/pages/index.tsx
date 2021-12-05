import React, { useCallback as $ } from 'react'
import { Glass } from '../../components/Glass'
import { Background } from '../../components/Background'
import { Flex, Template } from '../../components/Template'
import { useRben, useRuby, useForceUpdate } from '../../hooks'

export function Editor (props: any) {
    const { args, ctrl, ...other } = props
    const [ v, i, self ] = args
    const forceUpdate = useForceUpdate()
    const [$, set] = useRuby(() => {
        self[i] = $.input
        forceUpdate()
    }, v, 1000)
    return (
      <Glass input value={$.input} onChange={e => set(e.target.value)} {...other}/>
    )
}

export default function App () {
    const ctrl = useRben()
    const handlePlus = $((k='') => () =>  ctrl.set(k, (p=[]) => [...p, p.slice(-1)[0]]), [ctrl])
    const handleMinus = $((k='') => () => ctrl.set(k, (p=[]) => p.slice(0, p.length - 1)), [ctrl])
    const handleDelete = $((k='', i=0) => () => ctrl.set(k, (p=[]) => p.filter((_, j) => j !== i)), [ctrl])
    return (
        <Template ctrl={ctrl}>
          <Background ctrl={ctrl}/>
          {ctrl.entries.map(([key="", inputs=[]]) =>
            <Glass key={key} h3>{key}
              <Glass button p onClick={handlePlus(key)}/>
              <Glass button m onClick={handleMinus(key)}/>
              {inputs.map((...args: any) =>
                <Flex row key={args[1]}>
                  <Glass button m onClick={handleDelete(key, args[1])}/>
                  <Editor key={args[1]} args={args} ctrl={ctrl}/>
                </Flex>
              )}
            </Glass>
          )}
        </Template>
    )
}
