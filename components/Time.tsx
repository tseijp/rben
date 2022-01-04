import React from 'react'
import styled from 'styled-components'
import { RubyController } from '../hooks'
import { withTimeAttrs } from './attributes'


export type TimeProps = Partial<RubyController['state'] & {
    children: React.ReactNode
    $dt: number
}>

export const Time = styled.div.attrs(withTimeAttrs)<TimeProps>`
    font-size: 1rem;
`
