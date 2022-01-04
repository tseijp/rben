import React from "react";
import styled from "styled-components";

export type PointProps = Partial<{
    x: number
    y: number
}>

export function Point (props: PointProps) {
    const { x, y } = props
    const [r, setR] = React.useState(3)
    const highlight = () => setR(10);
    const unhighlight = () => setR(3);
    return (
      <Circle
        cx={x} cy={y} r={r}
        onMouseOver={highlight}
        onMouseOut={unhighlight}
      />
    );
}

const Circle = styled.circle`
    fill: steelblue;
    fill-opacity: .7;
    stroke: steelblue;
    stroke-width: 1.5px;
`;
