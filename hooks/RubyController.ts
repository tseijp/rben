import ruby from "./Ruby";

const join = (res: any) =>  res.output.map((chunk: any) => chunk.output).join("")

type Fun = (...args: any) => void
interface State {
    error: null | Error
    input: string
    output: string
    running: boolean
    prevTime?: number
    timeStamp: number
    deltaTime?: number
}

export class RubyController {
    state: State
    callback: Fun = () => {}

    constructor (input='') {
        const timeStamp = performance.now()
        this.state = { error: null, input, output: "", running: false, timeStamp}
        this.compute = this.compute.bind(this)
        this.run = this.run.bind(this)
    }

    compute (res?: unknown) {
        const { state: $ } = this
        if (res instanceof Error) $.error = res
        else if (res) $.output = join(res)

        $.prevTime = $.timeStamp
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
        if (typeof input !== "string")
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
        .then(() => {$.running = false})
        .then(this.callback)
        .then(() => console.log(this))
    }
}
