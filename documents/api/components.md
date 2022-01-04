# Components

## What does it look like?​


__Example in Edit__
```jsx
<Glass>
  <Flex $row $tool>
    <Glass $btn $start />
    <Glass $btn $stop />
    <Time $dt={$.deltaTime} />
  </Flex>
  <Glass $in />
  <Glass $in $out />
</Glass>
```

__Example in Unit__
```jsx
<Flex>
  <Glass $clp>
    <Glass $btn $p />
    <Glass $btn $m />
    {children}
  </Glass>
</Flex>
)
```

__Components__

| component | descriptions |
| :-------- | :----------- |
| [Background](#background) |  |
| [Flex](#flex) |  |
| [Glass](#glass) |  |
| [Grid](#grid) |  |
| [Head](#head) |  |
| [Plot](#plot) |  |
| [Point](#point) |  |
| [Time](#time) |  |

### Backgorund
__Props interface__

| props | descriptions |
| :---- | :----------- |
| size: number | Cone number |
| shake: number | Shake number |
| debug: boolean | return null if true |

### Flex
__Props interface__

| props | descriptions |
| :---- | :----------- |
| $row: boolean |  |
| $top: boolean |  |
| $tool: boolean |  |
| $left: boolean |  |

### Glass
__Props interface__

| props | descriptions |
| :---- | :----------- |
| $start: boolean |  |
| $stop: boolean |  |
| $btn: boolean |  |
| $clp: boolean |  |
| $out: boolean |  |
| $in: boolean |  |
| $h1: boolean |  |
| $h2: boolean |  |
| $h3: boolean |  |
| $p: boolean |  |
| $m: boolean |  |
| $c: '0,0,0'|'255,255,255' |  |

### Grid
__Props interface__

| props | descriptions |
| :---- | :----------- |
| $row: string |  |
| $col: string |  |
| $gap: string |  |
| $mm: boolean |  |
| $px: boolean |  |
| $: string |  |

### Head
__Props interface__

| props | descriptions |
| :---- | :----------- |
| $top: boolean |  |
| $h1: boolean |  |
| $h2: boolean |  |
| $h3: boolean |  |

### Plot
__Props interface__

| props | descriptions |
| :---- | :----------- |
| sx: (x: number) => number |  |
| sy: (y: number) => number |  |
| data: any[] |  |
| x: number |  |
| y: number |  |
| w: number |  |
| h: number |  |

### Point
__Props interface__

| props | descriptions |
| :---- | :----------- |
| x: number |  |
| y: number |  |

### Time
__Props interface__

| props | descriptions |
| :---- | :----------- |
| $dt: number |  |
