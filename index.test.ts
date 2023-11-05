import fs from 'node:fs/promises'
import path from 'node:path'

import { test, expect } from 'vitest'
import { temporaryDirectory } from 'tempy'

import writePrettyFile from './src'

test('write-pretty-file', async () => {
  const directory = temporaryDirectory()

  const prettierConfig = { semi: false, singleQuote: true }
  await fs.writeFile(
    path.join(directory, '.prettierrc'),
    JSON.stringify(prettierConfig),
  )

  const unFormatted = 'console.log("hello world");'
  const filePath = path.join(directory, 'directory/index.js')
  await writePrettyFile(filePath, unFormatted)
  const formattedFile = await fs.readFile(filePath, 'utf-8')
  expect(formattedFile).toEqual("console.log('hello world')\n")
})

test('Uses prettier defaults if no config', async () => {
  const directory = temporaryDirectory()

  const unFormatted = "console.log('hello world')"
  const filePath = path.join(directory, 'directory/index.js')
  await writePrettyFile(filePath, unFormatted)
  const formattedFile = await fs.readFile(filePath, 'utf-8')
  expect(formattedFile).toEqual('console.log("hello world");\n')
})
