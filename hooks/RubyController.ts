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
        this.set = this.set.bind(this)
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

    apply (callback=()=>{}) {
        this.callback = callback
        return this.state
    }

    /**
     *  main process of ruby
     */
    set (input='') {
        const { state: $ } = this
        if (input === $.input) return
        $.input = input
        this.callback($)
    }

    run () {
        const { state: $, compute } = this
        if ($.running) return
        $.running = true
        ruby($.input)
        .then(compute.bind(this), compute.bind(this))
        .then(() => {$.running = false})
        .then(this.callback)
        .then(() => console.log(this))
    }
}
