#! /usr/bin/env node

var burstsms = require('../src')()

var args = require('yargs')
.command('sms', 'SMS methods', function(yargs){
  return yargs
  .command('send', 'Send an SMS', function(yargs){
    var args = yargs
    .options({
      n: {
        alias: 'number',
        demand: true,
        type: 'string'
      },
      m: {
        alias: 'message',
        demand: true,
        type: 'string'
      }
    })
    
    burstsms.sms.send(args.argv.message, args.argv.number)
    
    return args
  })
})
.help('h')
.showHelpOnFail(false, 'Specify --help for available options')
.env('burstsms')
.argv