/**
 * ref: https://superdevresources.com/glassmorphism-ui-css/
 * ref https://migi.me/css/video-play-pause-icon/
 */
import { ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'
import useThemeContext from '@theme/hooks/useThemeContext';
import { animated, useSpring } from 'react-spring'

export type GlassProps = Partial<{
    $collapse: boolean
    $button: boolean
    $output: boolean
    $input: boolean
    $start: boolean
    $stop: boolean
    $p: boolean
    $m: boolean
    $h1: boolean
    $h2: boolean
    $h3: boolean
    $c: '0,0,0'|'255,255,255'
    as: ReactNode
    style: any
    value: string
    children: ReactNode
    onMouseEnter: () => void
    onMouseLeave: () => void
}>

export const Glass = styled(animated.div)
    .attrs(withDarkAttrs)
    .attrs(withHeadAttrs)
    .attrs(withButtonAttrs)
    .attrs(withHeightAttrs)
    .attrs(withValueAttrs)
<GlassProps>`
    display: block;
    overflow: hidden;
    position: relative;
    ${glassStyle}
    ${startStyle}
    ${stopStyle}
    ${buttonStyle}
    ${inputStyle}
    ${outputStyle}
    ${otherStyle}
`

function glassStyle ({$c}: GlassProps) {
    return css`
        border: 1px solid rgba(${$c},0.1);
        border-radius: 2rem;
        backdrop-filter: blur(30px);
        background-color: rgba(${$c},0.1);
        box-shadow: 4px 4px 60px rgba(${$c}},0.2);
        :hover {
            background-color: rgba(${$c},0.2);
            box-shadow: 4px 4px 60px 8px rgba(${$c}}.2);
        }
    `
}

function startStyle (props: GlassProps) {
    return props.$button && props.$start && css`
        width: 1em;
        height: 1em;
        :before {
            position: absolute;
            top: 50%;
            left: 30%;
            transform: translateY(-50%);
            width: 0px;
            height: 0px;
            border: 0.3em solid transparent;
            border-left: 0.5em solid currentColor;
            box-sizing: border-box;
            content: "";
        }
    `
}

function stopStyle (props: GlassProps) {
    return props.$button && props.$stop && css`
        width: 1em;
        height: 1em;
        border-radius: 50%;
        :before, :after {
            position: absolute;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            width: 0.1em;
            height: 0.5em;
            box-sizing: border-box;
            background-color: currentColor;
            content: "";
        }
        :before {
            left: 40%;
        }
        :after {
            left: 60%;
        }
    `
}

function buttonStyle (props: GlassProps) {
    return props.$button && css`
        border-radius: 5000px;
        cursor: pointer;
        width: 3rem;
        height: 3rem;
        padding: 0;
        margin-right: 0.5rem;
        display: inline-block;
        font-size: 2rem;
        letter-spacing: 2px;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
    `
}

function inputStyle (props: GlassProps) {
    return props.$input && css`
        outline: none;
        overflow: hidden;
        width: auto;
        line-height: 1.2rem;
        font-size: 1rem;
        text-align: left;
        font-weight: 1000;
        font-family: Consolas, Menlo, 'Liberation Mono', Courier, monospace;
        background: transparent;
    `
}

function outputStyle (props: GlassProps) {
    return props.$output && css`
        font-size: 1rem;
        ${props.value === '' && css`
            height: 0;
            margin: 0;
            padding: 0;
            display: none;
        `}
    `
}

function otherStyle (props: GlassProps) {
    return !props.$button && css`
        width: 100%;
        padding: 2rem;
        margin: 1rem 0;
    `
}


function withDarkAttrs (props: GlassProps) {
    const { isDarkTheme } = useThemeContext()
    props.$c = isDarkTheme? '0,0,0':'255,255,255'
    return props
}

function withButtonAttrs (props: GlassProps) {
    if (props.$p) props.children = '+'
    if (props.$m) props.children = '-'
    return props
}

function withHeadAttrs (props: GlassProps) {
    if (props.$button) props.as = animated.button
    else if (props.$input) props.as = animated.textarea
    else if (props.$h1) props.as = animated.h1
    else if (props.$h2) props.as = animated.h2
    else if (props.$h3) props.as = animated.h3
    return props
}

function withHeightAttrs (props: GlassProps) {
    const [hover, set] = useState(false)
    props.onMouseEnter = () => set(true)
    props.onMouseLeave = () => set(false)
    if (props.$input) {
        const len = props.value?.split?.("\n")?.length || 0
        props.style = useSpring({height: len * 1.22 + 4.22 + 'rem'})
        return props
    }
    if (props.$collapse) {
        console.log(props.$collapse)
        props.style = useSpring({maxHeight: hover? '100rem': '7.5rem'})
        return props
    }
    return props
}

function withValueAttrs (props: GlassProps) {
    if (!props.$input) return props
    const { value, ...other } = props
    return { defaultValue: value, ...other }
}
