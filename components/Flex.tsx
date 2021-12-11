import React from 'react'
import { animated } from 'react-spring'
import styled, { css } from 'styled-components'

export type FlexProps = Partial<{
    children: React.ReactNode
    $row: boolean
    $top: boolean
    $tool: boolean
    $left: boolean
}>

export const Flex = styled(animated.div)<FlexProps>`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    flex-flow: ${({$row}) => $row? 'row': 'column'};
    text-align: center;
    align-items: center;
    justify-content: center;
    ${topStyle}
    ${toolStyle}
`

function topStyle (props: FlexProps) {
    return props.$top && css`
        max-width: 992px;
    `
}

function toolStyle (props: FlexProps) {
    return props.$tool && css`
        justify-content: flex-start;
        transfrom: translate(1rem, 1rem);
    `
}
