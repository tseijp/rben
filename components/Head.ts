import React from 'react'
import styled from 'styled-components'

type HeadProps = Partial<{
    top: boolean
    h1: boolean
    h2: boolean
    h3: boolean
    as: string
}>

function withHeadAttrs (props: HeadProps) {
    if (props.h1) props.as ="h1"
    if (props.h2) props.as ="h2"
    if (props.h3) props.as ="h3"
    return props
}
export const Head = styled.div.attrs(withHeadAttrs)<HeadProps>`
    border-bottom: 3px solid #000;
    ${({top}) => top && `
        font-size: 5rem;
    `}
`
