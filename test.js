const assert = require('assert')
const semver = require('semver')
const unnatainable = require('.')

assert(
  !semver.satisfies(
    process.versions.node,
    unnatainable()
  )
)

