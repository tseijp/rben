import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { withHeadAttrs, withHoverAttrs } from './attributes'
export type HeadProps = Partial<{
    $top: boolean
    $h1: boolean
    $h2: boolean
    $h3: boolean
    as: ReactNode
    style: any
    onMouseEnter: () => void
    onMouseLeave: () => void
}>

export const Head = styled.div
    .attrs(withHeadAttrs)
    .attrs(withHoverAttrs)
<HeadProps>`
    background: linear-gradient(transparent 5rem, #000 0%);
    margin: auto;
    color: black;
    ${topStyle}
`

function topStyle (props: HeadProps) {
    return props.$top && `
        width: 13.5rem;
        height: 6rem;
        font-size: 5rem;
        transform-origin: center 60%;
    `
}
