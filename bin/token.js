
class Token {
  constructor(type, literal) {
    this.type = type
    this.literal = literal
  }
}

tokens = {
  "ILLEGAL": "ILLEGAL",
  "EOF": "EOF",

  // Operators
  "ASSIGN": "=",
  "PLUS":   "+",

  // Delimiters
  "LPAREN": "(",
  "RPAREN":  ")",

  // Keywords
  "LET": "LET"
}

function tokenize(input) {
  return input
}

exports.Token    = Token
exports.tokens   = tokens
exports.tokenize = tokenize
