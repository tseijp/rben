/**
 * ref: https://codepen.io/DivineBlow/pen/bGwYYPQ
 */
import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '@theme/Layout'

import { useRuby, useForceUpdate } from '../hooks'

export function Editor (props: any) {
    const { args, ctrl, ...other } = props
    const [ v, i, self ] = args
    const forceUpdate = useForceUpdate()
    const [$, set] = useRuby(() => {
        self[i] = $
        forceUpdate()
    }, v.input, 1000)
    return (
      <Edit  value={$.input} onChange={e => set(e.target.value)} {...other}/>
    )
}

const Edit = styled.input`
    width: 100%;
    height: 3rem;
    padding: 1em;
    outline: none;
    overflow: hidden;
    font-size: 1rem;
    text-align: center;
    border-radius: 2rem;
    font-weight: 1000;
    font-family: inherit;
    background: transparent;

    border-left: 1px solid $white;
    border-top: 1px solid $white;
    border-radius: 5000px;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    :hover {
        background: rgba(255,255,255,0.1);
        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
    :focus {
        background: rgba(255,255,255,0.1);
        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
}
`
