import * as d3 from "d3";
const { random } = Math

export type PlotProps = {
    children: any
    data: any[]
    sx: (x: number) => number
    sy: (y: number) => number
    x: number
    y: number
    w: number
    h: number
}

export class PlotController {
    readonly state: PlotProps = {} as any

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
