#!/usr/bin/env node

// TODO: Convert input into a stream of tokens
const token = require('./token')

function schleemEval(cmd, context, filename, callback) {
	callback(null, token.tokenize(cmd))
}

const repl = require('repl')

const replServer = repl.start({
	prompt: "schleem > ",
	eval: schleemEval
})
