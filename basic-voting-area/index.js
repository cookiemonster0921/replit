const express = require('express');
const bodyParser = require('body-parser')
const Database = require("@replit/database")
const ejs = require('ejs')
const app = express();
const db = new Database()
//db.set("chocolate", 0).then(() => {});
//db.set("vanilla", 0).then(() => {});
//db.set("peach", 0).then(() => {});
app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render(__dirname + '/index.ejs', {ch: null, va: null, pe: null})
});
app.post('/vote', (req, res) => {
  console.log(req.body.fav)
  //var count = 0;
  db.get(req.body.fav).then(value => {
     db.set(req.body.fav, value+1).then(() => {})
  });
  db.get(req.body.fav).then(value => {/*console.log(value)*/})
  db.get('chocolate').then(choc => {
    db.get('vanilla').then(vanilla => {
      db.get('peach').then(peach => {
        res.render(__dirname + '/index.ejs', {ch: parseInt(choc), va: parseInt(vanilla), pe: parseInt(peach)})
      })
    })
  })
})

app.listen(3000, () => {
  console.log('server started');
});
