import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '@theme/Layout'
import { Unit } from './Unit'
import { Flex } from '../components/Flex'
import { Head } from '../components/Head'
import { Plot } from '../components/Plot'
import { Point } from '../components/Point'
import { Glass } from '../components/Glass'
import { Background } from '../components/Background'
import { RbenController } from '../hooks/RbenController'

export type WrapProps = Partial<{
    ctrl: RbenController
    children: any
}>

export function Wrap (props: WrapProps) {
    const { ctrl, children, ...other } = props
    return (
      <Layout {...other}>
        <Relative>
          <Flex $top>
            <Glass>
              <Head $h1 $top>RBEN</Head>
              <Head $h3>Ruby Benchmark Test</Head>
              <Flex>
                <Background size={ctrl.size} />
                { children }
                <Unit index="Benchmark">
                  <Flex $row $tool>
                    <Glass $button $start/>
                    <Glass $button $stop/>
                  </Flex>
                  {ctrl.data &&
                    <Plot>
                      {(props: any) => <Point {...props}/>}
                    </Plot>
                  }
                </Unit>
              </Flex>
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
    padding: 0;
    position: relative;
`
