import { is, each, eachProp } from './helpers'

type Fun = (...args: any) => void

type Props = {[key: string]: string | string[]}

export interface RbenController {
    set (key: string, next: string[] | ((pre: string[]) => string[])): void
}

export class RbenController {
    callback = (() => {}) as Fun
    private _items = new Map()
    private _times = new Map()

    constructor (callback=(()=>{}) as Fun, props: Props={}) {
        this.callback = callback
        eachProp(props, (prop, key) => {
            if (!is.arr(prop))
                prop = is.str(prop)? [prop]: []
            this._items.set(key, prop.map((v='') => v.trim()))
            this._times.set(key, prop.map(() => 0))
        })
    }

    apply () {
        return [this, this.dispatch.bind(this)]
    }

    dispatch  (key='', next: any) {
        const inputs = this._items.get(key)
        if (is.fun(next))
            next = next(inputs)
        this._items.set(key, next)
        this.callback()
    }

    get size () {
        let ret = 0
        each(this._items, item => each(item, () => ret++))
        return ret
    }

    get entries (): [string, string[]][] {
        return Array.from(this._items.entries())
    }
}
