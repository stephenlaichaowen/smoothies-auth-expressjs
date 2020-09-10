const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

app.listen(port, () => console.log(`Server started on port ${port}`))