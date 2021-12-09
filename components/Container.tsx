import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '@theme/Layout'
import { Head } from './Head'
import { Glass } from './Glass'
import { animated } from 'react-spring'
import { RbenController } from '../hooks/RbenController'

export type ContainerProps = Partial<{
    ctrl: RbenController
    children: any
    wrapProps: object
    buttonProps: object
}>

export function Container (props: ContainerProps) {
    const { children, wrapProps={}, buttonProps={}, ...other } = props
    return (
      <Layout {...other}>
        <Wrap {...wrapProps}>
          <Flex top>
            <Glass {...buttonProps}>
              <Head>RBEN👺</Head>
              <Flex>{ children }</Flex>
            </Glass>
          </Flex>
        </Wrap>
      </Layout>
    )
}

export const Wrap = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: relative;
`

export type FlexProps = Partial<{
    row: boolean
    top: boolean
    left: boolean
}>

export const Flex = styled(animated.div)<FlexProps>`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    transition: 0.5s;
    flex-wrap: wrap;
    flex-flow: ${({row}) => row? 'row': 'column'};
    text-align: center;
    align-items: center;
    justify-content: center;
    ${({top}) => top && `
        max-width: 992px;
    `}
    ${({left}) => left && `
        justify-content: flex-start;
    `}
`

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
