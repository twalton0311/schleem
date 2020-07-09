const token = require('./token')

function lexer(input) {
  let message = "I am the lexer, input: "
  return message, input
}


class Lexer {
  constructor(input, position, readPosition, ch) {
    this.input        = input
    this.position     = position
    this.readPosition = readPosition
    this.ch           = ch
  }

  readChar() {
    if (this.readPosition >= this.input) {
      this.ch = 0

    } else {
      this.ch = this.input[this.readPosition]
    }
    this.position = this.readPosition
    this.readPosition += 1
  }

  nextToken() {
    let token = new token.Token()

    this.skipWhitespace()

    switch (this.ch) {
      case '=':
        // test if '=='
        break
      case '+':
        break
      case '(':
        break
      case ')':
        break
      default:
        break 
    }

    this.readChar()
    return token
  }

  skipWhitespace() {
  if (this.ch == ' ' || this.ch == '\t' || this.ch == '\n' || this.ch == '\r') {
      this.readChar()
    }
  }
}

exports.lexer = lexer
// exports.Lexer = Lexer