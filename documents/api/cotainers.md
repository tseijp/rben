# Contaners

## What does it look like?​

```jsx
<Rben
  Globals={["world = 'world'"]}
  YourTest="puts 'hello' + world"
/>
```

__Components__

| component | descriptions |
| :-------- | :----------- |
| [Edit](#edit) |  |
| [Rben](#rben) |  |
| [Unit](#unit) |  |
| [Wrap](#wrap) |  |

### Edit
__Props interface__

| props | descriptions |
| :---- | :----------- |
| children: null | JSX.Element |  |
| args: Args |  |

- typeof Args is `[string[], string]`

### Rben
__Props interface__

| props | descriptions |
| :---- | :----------- |
| children: `RbenChildren` |  |
| [key: string]: string \| string[] |

- typeof RbenChildren is `(input: string, index: string) => null | JSX.Element`

### Unit
__Props interface__

| props | descriptions |
| :---- | :----------- |
| children: null | JSX.Element |  |
| index: string |  |
| set: Dispatch |  |

- typeof Dispatch is `RbenController['dispatch']`

### Wrap
__Props interface__

| props | descriptions |
| :---- | :----------- |
| children: null | JSX.Element |  |
| data: any[] |  |
| size: number |  |
