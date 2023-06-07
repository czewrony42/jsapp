const express = require('express')
const expressHandlebars = require('express-handlebars')

const fortune = require('./lib/fortune.js')
const swPerson = require("./lib/starWarsPerson.js")

const app = express()

// konfiguracja silnika widoków Handlebars
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
  fortune.getFortuneRandomly()
  .then((ele)=>{
    let cytat = ele.quote
    res.render('about', { fortune: cytat })
  })
})

app.get("/star/:userId", (req,res)=>{
  swPerson.getStarWars(req.params.userId)
  .then((ele)=>{
    let filmy = `<p style="font-size:25px">${ele.name}</p>`;
    
    for(film of ele.films){
      filmy += `<p><a target="_blank" href='${film}'>${film}</a></p>`
    }
    res.send(filmy)
  }).catch((err)=>{
    res.send("brak danych")
  })
})

// niestandardowa strona 404
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// niestandardowa strona 500
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})

app.listen(port, () => {
  console.log( `Express został uruchomiony pod adresem http://localhost:${port}` +
    '; naciśnij Ctrl-C, aby zakończyć.' )
})
