/**
 * ref: https://superdevresources.com/glassmorphism-ui-css/
 */
import styled from 'styled-components'
import useThemeContext from '@theme/hooks/useThemeContext';

export type GlassProps = Partial<{
    c: '0,0,0'|'255,255,255'
    p: boolean
    m: boolean
    button: boolean
    input: boolean
    output: boolean
    h1: boolean
    h2: boolean
    h3: boolean
    as: null | string | JSX.Element
    children: null | string | JSX.Element
}>

function withDarkAttrs (props: GlassProps) {
    const { isDarkTheme } = useThemeContext()
    props.c = isDarkTheme? '0,0,0':'255,255,255'
    return props
}

function withButtonAttrs (props: GlassProps) {
    if (props.p) props.children = '+'
    if (props.m) props.children = '-'
    return props
}

function withHeadAttrs (props: GlassProps) {
    if (props.button) props.as = 'button'
    else if (props.input) props.as = 'textarea'
    else if (props.h1) props.as = 'h1'
    else if (props.h2) props.as = 'h2'
    else if (props.h3) props.as = 'h3'
}

export const Glass = styled.div
    .attrs(withDarkAttrs)
    .attrs(withHeadAttrs)
    .attrs(withButtonAttrs)
<GlassProps>`
    transition: 0.5s;
    overflow: hidden;
    display: block;
    position: relative;
    border: 1px solid rgba(${({c}) => c},0.1);
    border-radius: 2rem;
    backdrop-filter: blur(30px);
    background-color: rgba(${({c}) => c},0.1);
    box-shadow: 4px 4px 60px rgba(${({c}) => c}},0.2);
    :hover {
        background-color: rgba(${({c}) => c},0.2);
        box-shadow: 4px 4px 60px 8px rgba(${({c}) => c}}.2);
    }
    ${({button}) => button && `
        border-radius: 5000px;
        cursor: pointer;
        width: 3rem;
        height: 3rem;
        display: inline-block;
        margin: 0 .5rem;
        padding: 0;
        font-size: 2rem;
        letter-spacing: 2px;
        padding: 0;
        text-align: center
        text-transform: uppercase;
        text-decoration: none;
    `}
    ${({input}) => input && `
        outline: none;
        transition: 0s;
        width: auto;
        overflow: hidden;
        text-align: left;
        font-size: 1rem;
        font-weight: 1000;
        font-family: inherit;
        background: transparent;
        :focus {
            background: rgba(${({c}) => c},0.1);
            box-shadow: 4px 4px 60px 8px rgba(${({c}) => c},0.2);
        }
    `}
    ${({output}) => output && `
        overflow: auto;
        text-align: left;
        font-size: 1rem;
        font-weight: 1000;
        font-family: inherit;
    `}
    ${({button}) => !button && `
        width: 100%;
        padding: 2rem;
        margin: 1rem 1rem;
        padding: auto;
    `}
`
