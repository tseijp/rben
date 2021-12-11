import ruby from "./Ruby";
import { is } from './helpers'

const join = (res: any) =>  res.output.map((chunk: any) => chunk.output).join("")

type Fun = (...args: any) => void

export interface State {
    error: null | Error
    input: string
    output: string
    running: boolean
    prevTime?: number
    timeStamp?: number
    deltaTime?: number
}

export class RubyController {
    state: State
    callback: Fun = () => {}

    constructor (input='') {
        this.state = { error: null, input, output: "", running: false}
        this.compute = this.compute.bind(this)
        this.run = this.run.bind(this)
    }

    compute (res?: unknown) {
        const { state: $ } = this
        if (res instanceof Error) $.error = res
        else if (res) $.output = join(res)
        $.running = false

        if (is.und(performance)) return
        $.prevTime = $.timeStamp || 0
        $.timeStamp = performance.now()
        $.deltaTime = $.timeStamp - $.prevTime
    }

    apply (callback=()=>{}, delay=()=>{}) {
        this.callback = callback
        return [this.state, (i='') => void (this.dispatch(i), delay())]
    }

    /**
     *  main process of ruby
     */
    dispatch (input='') {
        const { state: $ } = this
        if (input === $.input) return
        if (!is.str(input))
            input = $.input
        $.input = input
        this.callback($)
    }

    run () {
        const { state: $, compute } = this
        if ($.running) return
        $.running = true
        ruby($.input)
        .then(compute, compute)
        .then(this.callback)
    }
}
