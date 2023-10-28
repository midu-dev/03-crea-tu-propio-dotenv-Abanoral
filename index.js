const fs = require('node:fs')

function config (options = {}) {
  const filePath = options.path || '.env'
  let dotenvFile
  try {
    dotenvFile = fs.readFileSync(filePath, 'utf8')
  } catch (err) {

  }
  if (!dotenvFile) return
  const envVariables = dotenvFile.split('\n')

  for (const linetext of envVariables) {
    const [key, value] = linetext.split('=')
    process.env[key] = value.replaceAll('"', '')
  }
}

module.exports = { config }
