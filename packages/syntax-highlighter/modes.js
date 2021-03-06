// This is a mapping of languages that we support, but aren't directly loading the mode extension
// for within `codemirror.jsx`.
//
// This list also includes a number of language aliases, as because of the way we're using
// `CodeMirror.runMode` we can't take advantage of its known aliases in the mode extensions that
// we're loading.
//
// There are 2 types of lookup, single and array. e.g. `html` needs to be rendered using
// `htmlmixed`, but `java`, needs to be rendered using the `clike` mode.
//
// We also have the mimeType to potentially in future load in new types dynamically.
module.exports = {
  asp: 'clike',
  bash: 'shell',
  c: 'clike',
  'c++': ['clike', 'text/x-c++src'],
  cplusplus: ['clike', 'text/x-c++src'],
  cpp: ['clike', 'text/x-c++src'],
  cql: ['sql', 'text/x-cassandra'],
  cs: ['clike', 'text/x-csharp'],
  csharp: ['clike', 'text/x-csharp'],
  curl: 'shell',
  ecmascript: 'javascript',
  go: ['go', 'text/x-go'],
  html: 'htmlmixed',
  java: ['clike', 'text/x-java'],
  js: 'javascript',
  json: ['javascript', 'application/ld+json'],
  jruby: 'ruby',
  kotlin: ['clike', 'text/x-kotlin'],
  kt: ['clike', 'text/x-kotlin'],
  liquid: 'htmlmixed',
  node: 'javascript',
  macruby: 'ruby',
  markdown: 'gfm',
  mssql: ['sql', 'text/x-mssql'],
  mysql: ['sql', 'text/x-mysql'],
  objc: ['clike', 'text/x-objectivec'],
  objectivec: ['clike', 'text/x-objectivec'],
  'objective-c': ['clike', 'text/x-objectivec'],
  php: ['php', 'text/x-php'],
  pgsql: ['sql', 'text/x-pgsql'],
  plsql: ['sql', 'text/x-plsql'],
  postgres: ['sql', 'text/x-pgsql'],
  postgresql: ['sql', 'text/x-pgsql'],
  py: 'python',
  rake: 'ruby',
  rb: 'ruby',
  rbx: 'ruby',
  scala: ['clike', 'text/x-scala'],
  scss: 'css',
  sh: 'shell',
  sql: ['sql', 'text/x-sql'],
  sqlite: ['sql', 'text/x-sqlite'],
  stylus: 'css',
  text: ['null', 'text/plain'],
  typescript: ['javascript', 'text/typescript'],
  zsh: 'shell',
};
