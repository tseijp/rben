/**
 * ref: https://superdevresources.com/glassmorphism-ui-css/
 */
import styled from 'styled-components'
import useThemeContext from '@theme/hooks/useThemeContext';

function withDarkAttrs (props: any) {
    props.d = useThemeContext().isDarkTheme
    return props
}

function withButtonAttrs (props: any) {
    if (props.p) props.children = "+"
    if (props.m) props.children = "-"
    return props
}

function withHeadAttrs (props: any) {
    if (props.button) props.as = "button"
    else if (props.h1) props.as = "h1"
    else if (props.h2) props.as = "h2"
    else if (props.h3) props.as = "h3"
}

export const Glass = styled.div
    .attrs(withDarkAttrs)
    .attrs(withHeadAttrs)
    .attrs(withButtonAttrs)
<any>`
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 15px;
    backdrop-filter: blur(30px);
    background-color: rgba(255,255,255,0.1);
    :hover {
        background-color: rgba(255,255,255,0.2);
    }
    ${({as}) => as === "button" && `
        cursor: pointer;
        display: inline-block;
        margin: 0px 1rem;
        padding: 1rem 1.5rem;
        font-size: 2rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        text-decoration: none;
    `}
    ${({as}) => as !== "button" && `
        width: 100%;
        height: auto;
        margin: 40px auto;
        padding: 32px;
    `}
`
