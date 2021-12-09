import React from 'react'
import { Editor } from '../../containers/Editor'
import { Wrap } from '../../containers/Wrap'
import { Unit } from '../../containers/Unit'
import { UseRben } from '../../hooks'


export default function App () {
    const hi = 'puts  "hello"'
    return (
      <UseRben Globals={[hi]} Cases={[hi]} {...{Wrap, Unit}}>
        {(...args: any) =>
          <Editor key={args[1]} args={args} />
        }
      </UseRben>
    )
}
