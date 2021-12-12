/**
 * ref: https://codesandbox.io/s/scatterplot-hooks-5z1qg
 */
import React from "react";

import styled from "styled-components"
import * as d3 from "d3";

const { useD3 } = require('d3blackbox')
const { random } = Math

export type PlotProps = Partial<{
    children: any
    data: any[]
    sx: (x: number) => number
    sy: (y: number) => number
    x: number
    y: number
    w: number
    h: number
}>

export function Plot (props: any) {
    const [ctrl] = React.useState(new PlotController())
    const { x, y, sx, sy, h, data, children } = ctrl.apply(props)
    return (
      <Svg width="800" height="800">
        <g transform={`translate(${x}, ${y})`}>
          {data.map(([x=0, y=0], key=0) => children({x: sx(x), y: sy(y), key}))}
          <Axis x={0} y={0} scale={sy} type="Left" />
          <Axis x={0} y={h} scale={sx} type="Bottom" />
        </g>
      </Svg>
    );
};

class PlotController {
    readonly state: PlotProps = {}

    apply (props: any) {
        const { state: $ } = this
        const { x=0, y=0, w=300, h=300, data, children } = props
        if ($.w !== w) $.sx = d3.scaleLinear().domain([0, 1]).range([0, w])
        if ($.h !== h) $.sy = d3.scaleLinear().domain([0, 1]).range([h, 0])
        $.data = data || $.data || d3.range(100).map(_ => [random(), random()])
        $.x = x || $.x
        $.y = y || $.y
        $.w = w || $.w
        $.h = h || $.h
        $.children = children
        return $
    }
}

function Axis (props: any) {
    const { x, y, type, scale } = props
    const ref = useD3((anchor: any) => {
        d3.select(anchor).call(d3[`axis${type}`](scale));
    });
    return <g ref={ref} transform={`translate(${x}, ${y})`} />
};

const Svg = styled.svg`
    margin: auto;
`
