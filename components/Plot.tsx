/**
 * ref: https://codesandbox.io/s/scatterplot-hooks-5z1qg
 */
import React from "react";
import styled from "styled-components";
import { usePlot, useAxis } from '../hooks';

export function Plot (props: any) {
    const { x, y, sx, sy, h, data, children } = usePlot(props)
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

function Axis (props: any) {
    const { x, y, type, scale } = props
    const ref = useAxis(type, scale)
    return <g ref={ref} transform={`translate(${x}, ${y})`} />
};

const Svg = styled.svg`
    margin: auto;
`
