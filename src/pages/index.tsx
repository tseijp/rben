import React from 'react'
import { Glass } from '../../components/Glass'
import { Editor } from '../../components/Editor'
import { Template } from '../../components/Template'
import { useRben } from '../../hooks'


export default function App () {
    const ctrl = useRben()
    return (
        <Template ctrl={ctrl}>
          {ctrl.keys.map((key="") =>
            <div key={key}>
              <Glass h3>{key}<Glass button p onClick={ctrl.click(key)}/></Glass>
              {(...args: any) =>
                <Editor key={args[1]} args={args} ctrl={ctrl}/>
              }
            </div>
          )}
        </Template>
    )
}
