const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

var login = "admin";
var password = "123456";


const port = 3000; //porta 3000
var path = require('path'); //manipula e seta o dir das views
const app = express(); // chamando express para definir rotas




app.use(session({secret:'ausuidhaisuhaius' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/', (req, res) => {

    if (req.body.password == password && req.body.login == login) {
        //logado com sucesso
        req.session.login = login;

        res.render('logado');


    }else{
        res.render('registrar');
    }
})

app.get('/', (req, res) => {
    if (req.session.login) {
        res.render('logado');
    } else {
        res.render('index');

    }
})

app.listen(port, () => {
    console.log('servidor funcionando');
}) 