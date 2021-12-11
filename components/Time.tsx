import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { State } from '../hooks/RubyController'

export type TimeProps = Partial<State & {
    children: React.ReactNode
    $dt: number
}>

export const Time = styled(animated.div)
    .attrs(withSpringAttrs)
<TimeProps>`
    font-size: 1rem;
`

function withSpringAttrs (props: TimeProps) {
    const { dt } = useSpring({dt: props.$dt || 0})
    props.children = dt.to((x=0) => x.toFixed(0)  + "ms")
    return props
}
