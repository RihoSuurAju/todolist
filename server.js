const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const items = [];
const itemsStudy = [];

app.get('/', (req, res)=>{
    let today = new Date();
    // getting the good good ( date + day of da week )
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    let day = today.toLocaleDateString("en-US", options);
    //console.log(day);

    res.render('index', {
        listTitle: day,
        newListItems: items
    })
});

app.post('/', (req, res)=>{
    let item = req.body.newItem;
    if(req.body.list === "Study TODO"){
        itemsStudy.push(item);
        res.redirect('/study');
    } else {
        items.push(item)
        res.redirect('/');
    }
    console.log(items);
});

app.get('/study', (req, res)=>{
    res.render('index', {
        listTitle: "Study TODO",
        newListItems: itemsStudy
    })
});


app.listen(port, ()=>{
    console.log("Server is vibing on port " + port);
});