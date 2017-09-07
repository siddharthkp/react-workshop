var syncExec = require('sync-exec')
var fs = require('fs')
var chalk = require('chalk')

console.log()
process.stdout.write(chalk.yellow('Checking node version '))

var version = process.version.split('.')[0].substring(1)
if (version < 6) {
  console.log()
  console.log()
  console.log(chalk.red('Please upgrade to node > 6'))
  console.log(
    chalk.red(
      'This is a great article that will help: https://davidwalsh.name/upgrade-nodejs'
    )
  )
  console.log()
  process.exit()
} else {
  process.stdout.write('✅')
  console.log()
  console.log()
}

console.log(chalk.blue('Setting up exercises'))
console.log(chalk.blue('This could take a few minutes, go get coffee!'))
console.log()
var exercises = fs.readdirSync('./exercises')
exercises.map(function(exercise, index) {
  console.log('./exercises/' + exercise)
  if (fs.existsSync('./exercises/' + exercise)) {
    syncExec(
      'cd ./exercises/' +
        exercise +
        ' && npm install --prefer-offline --cache-min 99999 --loglevel=error',
      {
        stdio: [0, 1, 2]
      }
    )
    var done = index + 1
    console.log()
    console.log(chalk.green('✅ ' + done + '/' + exercises.length))
    console.log()
  }
})

console.log()
console.log(chalk.green('✅ You are all set!'))
