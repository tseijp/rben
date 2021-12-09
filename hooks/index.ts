import React, { useState, useEffect } from 'react'
import { RubyController } from './RubyController'
import { RbenController } from './RbenController'

const el = React.createElement
const fr = React.Fragment

export function UseRben (props: {
    [key: string]: any
    children: (
        input: string,
        key: string,
        set: RbenController['dispatch']
    ) => null | JSX.Element
}): null | JSX.Element

export function UseRben (props: any={}) {
    const { children, Unit=fr, Wrap=fr, ...other } = props
    const [{ entries, size }, set] = useRben(other)
    return el(Wrap, {size},  entries.map(([index="", inputs=[]]) =>
        el(Unit, {index, set}, inputs.map((...args: any) => children(...args)))
    ))
}

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

class DelayController {
    listener = () => {};
    callback = () => {};
    timeStamp = 1000;

    apply (callback = ()=>{}, timeStamp = 1000) {
        this.callback = callback;
        this.timeStamp = timeStamp;
        return this.delay.bind(this);
    }

    delay (...args: any[]) {
        this.listener();
        const timeout = window.setTimeout(this.callback, this.timeStamp, ...args);
        this.listener = () => void window.clearTimeout(timeout);
    }
}
