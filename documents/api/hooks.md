# Hooks

### useRben

```js
const [state, set] = useRben(props)
const { entires, size } = state
const handleChange = () => set(key, ['puts "hello"'])

```
- `props` is an objects containing Ruby code

### useRuby

```js
const [state, set] = useRuby(callback, input, timeStamp)
const { output, running } = state
const handleChange = (e) => set(e.target.value)
```
- `callback` is a function after running the code
- `input` is a text of default Ruby code to run
- `timeStamp` is a number to delay running the code.



__State interface__

| key | descriptions |
| :-- | :----------- |
| error: null \| Error | error message |
| input: string | ruby code |
| output: string | output message |
| running: boolean | true when running code |
| prevTime?: number |  |
| timeStamp: number |  |
| deltaTime?: number |  |

### useDelay

```js
const delay = useDelay(callback, timeStamp)
const handleChange = () => delay()
```

- `callback` is a function to run after a delay.
- `timeStamp` is a number to delay time.
