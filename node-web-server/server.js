/*
basic express server snippets 
*/
const express = require('express');
const port= process.env.port || 3000;
const hbs = require('hbs');

const fs = require('fs');
//routes for express
var app =express();

/**
 * middleware application
 */
app.use((req, res, next)=>{
    var now = new Date().toString();
   var log =now+ " : "+ req.method + req.url;
    //the page will freeze without next line
    fs.appendFile('server.log', log+'\n', (err)=>{if (err){console.log('unable to append file');}})
     next();

});



/*
* use hbs to use page data templating
* install hbs npm install hbs --save
*/
app.set('view engine','hbs');

/**
 *  Handlebars partial is templating engine so that we don't have to create
 * same page over and over again.
 * 
 *  use this line for entering template hbs (footer hbs)
 *   {{> footer}}
 */

 hbs.registerPartials(__dirname+'/views/partials');
 
 
//  app.use((req, res, next)=>{
//     res.render('maintenance.hbs');
//     //we can do database check in here and call the next method if it works

// });

 /**
  * hbs register helper is "global variable" that can be used throughout the page
  * it can return functions and be called from any page associated
  */
hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});

/**
  * in this hbs register helper we're showing that we can create a 'functions' for the display system
  * you can check the implementation in pageheader.hbs file
  */
hbs.registerHelper('screamIt', (message)=>{
    return message.toUpperCase();
});
app.use(express.static(__dirname+'/public'));

app.get('/',(request, response)=>{
    // response.send('<h1>HELLO WORLD FROM EXPRESS!</h1>');
    response.render('home.hbs',{
        pageTitle : 'insert generic page title',
        welcomeMessageHeader: 'insert generic welcome message header',
        welcomeMessageBody: 'insert generic welcome message body',
        
    });
    
});

app.get('/about',(request, response)=>{
    //response.send('<h1>this is about page</h1>');
    response.render('about.hbs',{
        pageTitle : 'welcome to generic about page ',
        
    });
});

app.get('/bad',(request, response)=>{
    response.send({
        error: "this is not the file you're looking for"
    });
});



app.listen(port, ()=>{
    console.log('server is up at port: '+ port);
});