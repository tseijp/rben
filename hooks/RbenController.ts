type Fun = (...args: any) => void

export class RbenController {
    callback = (() => {}) as Fun
    private _input = 'puts  "hello"'
    private _items = new Map([
        ['Globals', new Set(this._input)],
        ['Cases', new Set(this._input)],
    ])

    constructor (callback=(()=>{}) as Fun) {
        this.callback = callback
        this.click = this.click.bind(this)
    }

    click (key="") {
        return () => {
            const item = this.keys.slice(-1)[0]
            this._items.get(key).add(item)
            this.callback()
        }
    }

    get keys (): string[] {
        return Array.from(this._items.keys())
    }

    get values () {
        return Array.from(this._items.values()).map(set => Array.from(set))
    }

    get entries () {
        return Object.entries(this._items)
    }
}
