# write-pretty-file

Write file and automatically format it with your projects prettier config

## ✨ Features

- Formats with prettier (using your projects config)
- Creates parent directories if needed
- If a prettier config is not found, uses prettier defaults instead
- Automatically stringifies objects

## Usage

```ts
import writePrettyFile from 'write-pretty-file'

await writePrettyFile('hello/world.json', '{ hello: world }')
await writePrettyFile('hello/world.json', { hello: 'world' })
await writePrettyFile('hello/world.ts', 'export default function (){}')
```

## 📦 Install

```console
npm install write-pretty-file
```
