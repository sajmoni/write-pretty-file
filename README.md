# write-pretty-file

Write file and format it with prettier

## ✨ Features

- :nail_care: Formats with prettier
- :wrench: Uses your projects config
- :file_folder: Creates directories if needed
- :clipboard: If a prettier config is not found, uses prettier defaults instead
- :mailbox: Automatically stringifies objects

## Usage

```ts
import writePrettyFile from 'write-pretty-file'

await writePrettyFile('hello/world.json', { hello: 'world' })
await writePrettyFile('hello/world.ts', 'export default function (){}')
```

## 📦 Install

```console
npm install write-pretty-file
```
