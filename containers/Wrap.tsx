import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '@theme/Layout'
import { Flex } from '../components/Flex'
import { Head } from '../components/Head'
import { Glass } from '../components/Glass'
import { Background } from '../components/Background'
import { RbenController } from '../hooks/RbenController'

export function Wrap (props: any) {
    const { size, children } = props
    return (
      <Container top="RBEN" sub="Ruby Benchmark test">
        <Background size={size} />
        { children }
        <Glass row>
          <Glass button>■</Glass>
          <Glass button>▶</Glass>
        </Glass>
      </Container>
    )
}

type ContainerProps = Partial<{
    ctrl: RbenController
    top: string
    sub: string
    children: any
    wrapProps: object
    buttonProps: object
}>

export function Container (props: ContainerProps) {
    const { children, top, sub, wrapProps={}, buttonProps={}, ...other } = props
    return (
      <Layout {...other}>
        <Relative {...wrapProps}>
          <Flex top>
            <Glass {...buttonProps}>
              <Head h1 top>{top}</Head>
              <Head h3>{sub}</Head>
              <Flex>{ children }</Flex>
            </Glass>
          </Flex>
        </Relative>
      </Layout>
    )
}

const Relative = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: relative;
`
