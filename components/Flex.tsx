import React, { useState } from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'

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
