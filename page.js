var express=require('express')
var moment= require('moment')

var app=express()


//serve static content 'web pages'
app.use(express.static(__dirname + '/public'));

var log=function(message){
    var time=moment().format()
    console.log('[Server] @'+time+' '+message)

}
var adder=function(num1,num2){
    result = num1+num2;
    return result

}
log('test')

//endpoint to do simple additions
app.get('/adder',function(request,response){
    log('Adder Request Made')

    var num1=parseInt(request.query.num1);
    var num2=parseInt(request.query.num2);
    var sum=adder(num1,num2);
    response.send(''+result+'')

})
app.get('/', function(request, response){
    response.sendFile('index.html');
})

var port=3000;
app.listen(port)
log('Server listening on:'+port)