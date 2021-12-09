import React from 'react'
import { Background } from '../../components/Background'
import { Container } from '../../components/Container'
import { Editor } from '../../components/Editor'
import { Glass } from '../../components/Glass'
import { UseRben } from '../../hooks'


const plus = (p=[]) => [...p, p.slice(-1)[0]]
const minus = (p=[]) => p.slice(0, p.length - 1)
const remove = (p=[]) => p.slice(0, p.length - 1) // TODO

export default function App () {
    return (
      <UseRben Globals={['puts  "hello"']} Cases={['puts  "hello"']}>
        {({size, entries, set}) =>
          <Container>
            <Background size={size} />
            {entries.map(([key="", inputs=[]]) =>
              <Glass key={key} h3>
                {key}
                <Glass button p onClick={() => set(key, plus)} />
                <Glass button m onClick={() => set(key, minus)} />
                {inputs.map((...args: any) =>
                  <Editor key={args[1]} args={args} rm={() => set(key, remove)} />
                )}
              </Glass>
            )}
            <Glass row>
              <Glass button>■</Glass>
              <Glass button>▶</Glass>
            </Glass>
          </Container>
        }
      </UseRben>
    )
}
