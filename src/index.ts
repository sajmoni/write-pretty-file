import fs from 'node:fs/promises'
import path from 'node:path'
import prettier from 'prettier'

export default async function writePrettyFile(
  filePath: string,
  content: string,
): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
  const options = await prettier.resolveConfig(filePath)
  const defaultPrettierOptions = {
    // Let prettier automatically infer parser from the file path
    filepath: filePath,
  }
  const formatted = await prettier.format(
    content,
    options
      ? { ...defaultPrettierOptions, ...options }
      : defaultPrettierOptions,
  )
  await fs.writeFile(filePath, formatted)
}
