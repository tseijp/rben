import React from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'

export type GridProps = Partial<{
    row: string
    col: string
    gap: string
    mm: boolean
    px: boolean
    _: string
}>

export const Grid = styled(animated.div).attrs(withUnitAttrs)<GridProps>`
    width: 100%;
    height: 100%;
    margin: auto;
    display: grid;
    grid-gap: ${({gap}) => gap || '0'};
    grid-Container-rows: ${({ row, _ }) => row? row.split(" ").join(_ + " ") + _: 'auto'};
    grid-Container-columns: ${({ col, _ }) => col? col.split(" ").join(_ + " ") + _: 'auto'};
`

function withUnitAttrs (props: GridProps) {
    props._ = ''
    if (props.px) props._ = 'px'
    if (props.mm) props._ = 'mm'
    return props;
}
