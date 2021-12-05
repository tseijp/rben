type Fun = (...args: any) => void

export interface RbenController {
    set (key: string, next: string[] | ((pre: string[]) => string[])): void
}

export class RbenController {
    callback = (() => {}) as Fun
    private _input = 'puts  "hello"'
    private _items = new Map([
        ['Globals', [this._input]],
        ['Cases', [this._input]],
    ])

    constructor (callback=(()=>{}) as Fun) {
        this.callback = callback
        this.set = this.set.bind(this)
    }

    set (key='', next: any) {
        const inputs = this._items.get(key)
        if (typeof next === "function")
            next = next(inputs)
        this._items.set(key, next)
        this.callback()
    }

    get size () {
        let size = 0
        this._items.forEach(item => item.forEach(() => size++))
        return size
    }

    get entries (): [string, string[]][] {
        return Array.from(this._items.entries())
    }
}
