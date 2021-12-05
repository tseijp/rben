import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '@theme/Layout'
import { Glass } from './Glass'

export function Template (props: any) {
    const { children, wrapProps={}, buttonProps={}, ...other } = props
    return (
      <Layout {...other}>
        <Wrap {...wrapProps}>
          <Flex top>
            <Glass h1>
              RBEN
              <Glass p button {...buttonProps}/>
              <Flex>{ children }</Flex>
            </Glass>
          </Flex>
        </Wrap>
      </Layout>
    )
}

export const Wrap = styled.div`
    height: auto;
    margin: 0 auto;
    width: 100%;
    position: relative;
`

export const Flex = styled.div<any>`
    display: flex;
    flex-flow: ${({row}) => row? 'row': 'column'};
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    ${({top=false}) => top && `
        max-width: 992px;
    `}
`
