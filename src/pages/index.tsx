import React from 'react'
import { Edit } from '../../containers/Edit'
import { Wrap } from '../../containers/Wrap'
import { Unit } from '../../containers/Unit'
import { UseRben } from '../../hooks'


export default function App () {
    const hi = 'puts  "hello"'
    return (
      <UseRben Globals={[]} Cases={[hi]} {...{Wrap, Unit}}>
        {(...args: any) =>
          <Edit key={args[1]} args={args} />
        }
      </UseRben>
    )
}
