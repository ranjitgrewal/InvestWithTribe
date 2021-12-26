const express = require('express');
const bodyParser= require('body-parser')
const app = express();
app.listen(3000, function(){
  console.log('listening on 3000')

})
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => { 
  res.sendFile('/Users/user/Desktop/InvestWithTribe/Assignment2' + '/index.html')
})
app.post('/sendemail', (req, res) => {
  console.log(req.body)
})