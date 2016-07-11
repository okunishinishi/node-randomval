#!/usr/bin/env node

/**
 * Compile to browser source
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { runTasks } = require('ape-tasking')
const { compileToEs5 } = require('ape-compiling')
const filedel = require('filedel')

runTasks('browser', [
  () => filedel('sims/browser/**/*.js'),
  () => compileToEs5('**/*.js', {
    cwd: 'lib',
    out: 'sims/browser'
  })
], true)
