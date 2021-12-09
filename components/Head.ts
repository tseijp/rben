import React from 'react'
import styled from 'styled-components'

export type HeadProps = Partial<{
    top: boolean
    h1: boolean
    h2: boolean
    h3: boolean
    as: string
}>

export const Head = styled.div.attrs(withHeadAttrs)<HeadProps>`
    background: linear-gradient(transparent 5rem, #000 0%);
    margin: auto;
    color: black;
    ${({top}) => top && `
        width: 13.5rem;
        height: 6rem;
        font-size: 5rem;
        transition: transform .3s ease-in-out;
        :hover {
            transform: rotateX(180deg);
            transform-origin: center 60%;
        }
    `}
`

function withHeadAttrs (props: HeadProps) {
    if (props.h1) props.as = "h1"
    if (props.h2) props.as = "h2"
    if (props.h3) props.as = "h3"
    return props
}
