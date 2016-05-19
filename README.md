# node-burstsms

Send SMS from your node app (or CLI!) using BurstSMS.

## Installation
`npm install burstsms --save`

Create `.burstsmsrc` config file as per the [rc](https://www.npmjs.com/package/rc) modules's location suggestions. Example file:
```JSON
{
  "key": "KEY_GOES_HERE",
  "secret": "SECRET_GOES_HERE"
}
```

## Examples

### Node
####Send SMS

```JavaScript
var sms = require('burstsms').sms

sms.formatNumber('XX', '0000000000').then(function(body, res){
  sms.send('Your message here', body.number.international)
  .then(function(body, res){
    console.log('Message Sent!')
  }).catch(function(error){
    console.log('Message could not be sent. Reason: ' + error)
  })
}).catch(function(error){
  console.log('Number could not be formatted. Reason: ' + error)
})
```

### CLI
####Send SMS
```
burstsms sms send -m "Your message here" -n 0000000000
```