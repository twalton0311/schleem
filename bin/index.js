#!/usr/bin/env node

// TODO: Convert input into a stream of tokens
const token = require('./token')
const lexer = require('./lexer')

function schleemEval(cmd, context, filename, callback) {
  callback(null, lexer.lexer(cmd))
}

const repl = require('repl')

const replServer = repl.start({
  prompt: "schleem > ",
  eval: schleemEval
})
