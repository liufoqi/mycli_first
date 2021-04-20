
const fileRules=require('./rules/fileRules')
const cssRules=require('./rules/cssRules')
const jsRules=require('./rules/jsRules')
const rules=[
  ...jsRules,
  ...cssRules,
  ...fileRules
]
module.exports=rules