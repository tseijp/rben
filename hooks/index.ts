import React, { useState, useEffect, createElement as el } from 'react'
import { PlotController, RubyController, RbenController, DelayController } from './controllers'
import * as d3 from "d3";
export * from './controllers'
export * from './helpers'

const { useD3 } = require('d3blackbox')

export function useRben (props: any) {
    const fn = useForceUpdate()
    const [ctrl] = useState(new RbenController(fn, props))
    return ctrl.apply()
}

export function useRuby (callback?: () => void, input?: string, timeStamp?: number): [
    RubyController['state'],
    (...args: any[]) => void
]

export function useRuby (callback=()=>{}, input="", timeStamp=1000) {
    const [ctrl] = useState(new RubyController(input))
    const delay = useDelay(ctrl.run, timeStamp)
    return ctrl.apply(callback, delay)
}

export function usePlot (props: any) {
    const [ctrl] = React.useState(new PlotController())
    return ctrl.apply(props)
}

export function useAxis (type: string, scale: any) {
    return useD3((anchor: any) => d3.select(anchor).call(d3[`axis${type}`](scale)));
}

export function useForceUpdate () {
    const set = useState(Object.create(null))[1]
    return React.useCallback(() => set(Object.create(null)), [set])
}

export function useDelay (
    callback: (...args: any[]) => void,
    timeStamp: number
): DelayController['delay']

export function useDelay (callback = ()=>{}, timeStamp=1000) {
    const [ctrl] = useState(new DelayController());
    useEffect(() => ctrl.listener, []);
    return ctrl.apply(callback, timeStamp);
}

export function useMax (value: number) {
    const ref = React.useRef(value)
    if (ref.current < value) ref.current = value
    return ref.current
}
