const express = require('express');
const bodyParser = require('body-parser')
const Database = require("@replit/database")
const ejs = require('ejs')
//const flash = require('connect-flash')

const app = express();
const db = new Database()
var titles = {}

//app.use(flash())
app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs');

/*app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.ejs')
});*/
/*app.get('/', (req, res) => {
  res.render(__dirname + '/index.ejs', {tasks: null})
})*/
//db.set("key", "value").then(() => {});
app.get('/', (req, res) => {
  titles = []
  db.list().then(keys => {
    console.log(keys)
    for (var i of keys) {
      titles.push(i)
    }
    res.render(__dirname + '/index.ejs', {tasks: titles})
  })
});
app.get('/del', (req, res) => {
  db.list().then(keys => {
    db.delete(keys[0]).then(() => {res.redirect('/')});
  });
})
app.post('/create', (req, res) => {
  var date = new Date()
  var task = []
  for (var i in req.body) {
    task.push(req.body[i])
  }
  db.set(req.body.title, 0).then(() => {});
  res.redirect('/')
})


app.listen(3000, () => {
  console.log('server started');
});
