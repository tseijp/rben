import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { useIsDarkTheme } from '../hooks'

export function withDarkAttrs <Props> (props: Props): Props
export function withDarkAttrs (props: any) {
    const isDarkTheme = useIsDarkTheme()
    props.$c = isDarkTheme? '0,0,0':'255,255,255'
    return props
}

export function withButtonAttrs <Props> (props: Props): Props
export function withButtonAttrs (props: any) {
    if (props.$p) props.children = '+'
    if (props.$m) props.children = '-'
    return props
}

export function withGlassAttrs <Props> (props: Props): Props
export function withGlassAttrs (props: any) {
    if (props.$clp) props.as = animated.div
    if (props.$btn) props.as = animated.button
    if (props.$in) props.as = animated.textarea
    return props
}

export function withHeightAttrs <Props>(props: Props): Props
export function withHeightAttrs (props: any) {
    const [hover, set] = useState(false)
    props.onMouseEnter = () => set(true)
    props.onMouseLeave = () => set(false)
    const len = props.value?.split?.("\n")?.length || 0
    if (props.$clp) props.style = useSpring({maxHeight: hover? '100rem': '7.5rem'})
    if (props.$in) props.style = useSpring({height: len * 1.22 + 4.22 + 'rem'})
    return props
}

export function withValueAttrs <Props> (props: Props): Props
export function withValueAttrs (props: any) {
    if (!props.$in) return props
    const { value, ...other } = props
    return { defaultValue: value, ...other }
}

/**
 * Grid Attrs
 */
export function withUnitAttrs <Props> (props: Props): Props
export function withUnitAttrs (props: any) {
    props.$ = ''
    if (props.$px) props.$ = 'px'
    if (props.$mm) props.$ = 'mm'
    return props;
}

/**
 * Head Attrs
 */
export function withHeadAttrs <Props> (props: Props): Props
export function withHeadAttrs (props: any) {
    if (props.$h1) props.as = animated.h1
    if (props.$h2) props.as = animated.h2
    if (props.$h3) props.as = animated.h3
    return props
}

export function withHoverAttrs <Props> (props: Props): Props
export function withHoverAttrs (props: any) {
    if (!props.$top) return props
    const [flipped, set] = useState(false)
    props.onMouseEnter = () => set(true)
    props.onMouseLeave = () => set(false)
    props.style = useSpring({
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    return props
}

/**
 * Time Attrs
 */
export function withTimeAttrs <Props> (props: Props): Props
export function withTimeAttrs (props: any) {
    const { dt } = useSpring({dt: props.$dt || 0})
    props.as = animated.div
    props.children = dt.to((x=0) => x.toFixed(0)  + "ms")
    return props
}
