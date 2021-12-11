import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'

export type GridProps = Partial<{
    $row: string
    $col: string
    $gap: string
    $mm: boolean
    $px: boolean
    $: string
}>

export const Grid = styled(animated.div)
    .attrs(withUnitAttrs)
<GridProps>`
    width: 100%;
    height: 100%;
    margin: auto;
    display: grid;
    grid-gap: ${({$gap}) => $gap || '0'};
    grid-Container-rows: ${({ $row, $ }) => $row? $row.split(" ").join($ + " ") + $: 'auto'};
    grid-Container-columns: ${({ $col, $ }) => $col? $col.split(" ").join($ + " ") + $: 'auto'};
`

function withUnitAttrs (props: GridProps) {
    props.$ = ''
    if (props.$px) props.$ = 'px'
    if (props.$mm) props.$ = 'mm'
    return props;
}
