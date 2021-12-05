import React, { useState } from 'react'
import styled from 'styled-components'
import { Background } from './Background'
import { Glass } from './Glass'
import Layout from '@theme/Layout'

export function Template (props: any) {
    const { children, ...other } = props
    const handleClick = () => {}
    return (
      <Layout {...other}>
        <Background/>
        <Wrap>
          <Flex top>
            <Glass h1>RBEN<Glass button p onClick={handleClick}/>
              <Flex>{ children }</Flex>
            </Glass>
          </Flex>
        </Wrap>
      </Layout>
    )
}

const Wrap = styled.div`
    height: calc(100vh - 3rem);
    margin: 0 auto;
    width: 100%;
`

const Flex = styled.div<any>`
    display: flex;
    flex-flow: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    ${({top=false}) => top &&`
        max-width: 992px;
    `}
`

const Grid = styled.div`
    background: ${$ => $.color};
    height: 100%;
    min-width: 100%;
`

Wrap.defaultProps = {color: '#' + (Math.random() * 0xffffff | 0).toString(16) }
Flex.defaultProps = {color: '#' + (Math.random() * 0xffffff | 0).toString(16) }
Grid.defaultProps = {color: '#' + (Math.random() * 0xffffff | 0).toString(16) }
