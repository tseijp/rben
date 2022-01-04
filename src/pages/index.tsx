import React from 'react'
import { Edit } from '../../containers/Edit'
import { Wrap } from '../../containers/Wrap'
import { Unit } from '../../containers/Unit'
import { Rben } from '../../containers/Rben'


export default function App () {
    const hi = 'puts  "hello"'
    return (
      <Rben Globals={[hi]} Cases={[hi]} {...{Wrap, Unit}}>
        {(...args: any) =>
          <Edit key={args[1]} args={args} />
        }
      </Rben>
    )
}
