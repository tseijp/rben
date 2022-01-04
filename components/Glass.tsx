/**
 * ref: https://superdevresources.com/glassmorphism-ui-css/
 * ref https://migi.me/css/video-play-pause-icon/
 */
import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import * as _ from './attributes'

export type GlassProps = Partial<{
    $start: boolean
    $stop: boolean
    $btn: boolean
    $clp: boolean
    $out: boolean
    $in: boolean
    $h1: boolean
    $h2: boolean
    $h3: boolean
    $p: boolean
    $m: boolean
    $c: '0,0,0'|'255,255,255'
    as: ReactNode
    style: any
    value: string
    children: ReactNode
    onMouseEnter: () => void
    onMouseLeave: () => void
}>

export const Glass = styled.div
    .attrs(_.withDarkAttrs)
    .attrs(_.withHeadAttrs)
    .attrs(_.withGlassAttrs)
    .attrs(_.withButtonAttrs)
    .attrs(_.withHeightAttrs)
    .attrs(_.withValueAttrs)
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
    return props.$btn && props.$start && css`
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
    return props.$btn && props.$stop && css`
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
    return props.$btn && css`
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
    return props.$in && css`
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
    return props.$out && css`
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
    return !props.$btn && css`
        width: 100%;
        padding: 2rem;
        margin: 1rem 0;
    `
}
