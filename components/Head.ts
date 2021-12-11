import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

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

export const Head = styled(animated.div)
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

function withHeadAttrs (props: HeadProps) {
    if (props.$h1) props.as = animated.h1
    if (props.$h2) props.as = animated.h2
    if (props.$h3) props.as = animated.h3
    return props
}

function withHoverAttrs (props: HeadProps) {
    if (!props.$top) return props
    const [flipped, set] = React.useState(false)
    props.onMouseEnter = () => set(true)
    props.onMouseLeave = () => set(false)
    props.style = useSpring({
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    return props
}
