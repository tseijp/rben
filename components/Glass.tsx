/**
 * ref: https://superdevresources.com/glassmorphism-ui-css/
 */
import styled from 'styled-components'
import useThemeContext from '@theme/hooks/useThemeContext';

function withDarkAttrs (props: any) {
    const { isDarkTheme } = useThemeContext()
    props.c = isDarkTheme? '0,0,0':'255,255,255'
    return props
}

function withButtonAttrs (props: any) {
    if (props.p) props.children = '+'
    if (props.m) props.children = '-'
    return props
}

function withHeadAttrs (props: any) {
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
<any>`
    transition: .5s;
    overflow: hidden;
    border: 1px solid rgba(${({c}) => c},0.1);
    border-radius: 15px;
    backdrop-filter: blur(30px);
    background-color: rgba(${({c}) => c},0.1);
    box-shadow: 4px 4px 60px rgba(${({c}) => c}},0.2);
    :hover {
        background-color: rgba(${({c}) => c},0.2);
        box-shadow: 4px 4px 60px 8px rgba(${({c}) => c}}.2);
    }
    ${({button}) => button && `
        cursor: pointer;
        display: inline-block;
        margin: 0px 1rem;
        padding: 1rem 1.5rem;
        font-size: 2rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        text-decoration: none;
    `}
    ${({input}) => input && `
        outline: none;
        transition: 0s;
        overflow: hidden;
        font-size: 1rem;
        text-align: left;
        font-weight: 1000;
        font-family: inherit;
        background: transparent;
        :focus {
            background: rgba(${({c}) => c},0.1);
            box-shadow: 4px 4px 60px 8px rgba(${({c}) => c},0.2);
        }
    `}
    ${({button}) => !button && `
        width: 100%;
        padding: 1rem;
        margin: 40px 1rem;
    `}
`
