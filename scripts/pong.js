/*jshint asi:true, eqnull:true, laxbreak: true */

var game = (function(){
    
    var ctx
    
    var options = {
        ballColor: '#c11'
      , width: window.innerWidth
      , height: window.innerHeight
    }
    
    var ball = {
        x: 0
      , y: 0
      , size: 10
      , speedX: 10
      , speedY: 10
    }

    function moveBall(){
        // rebater nos cantos
        if (ball.x < 0 || ball.x > options.width - ball.size){
            ball.speedX *= -1
        }
        if (ball.y < 0 || ball.y > options.height - ball.size){
            ball.speedY *= -1
        }
        ball.x += ball.speedX
        ball.y += ball.speedY
    }
    
    function init(){
        var stage = document.getElementById('stage')
        
        ctx = stage.getContext('2d')
        stage.width = options.width
        stage.height = options.height
        setInterval(ticker, 1000/60)
    }
    
    function ticker(){
        clear()
        moveBall()
        draw()
    }
    
    function clear(){
        ctx.clearRect(0,0, options.width, options.height)
    }
    
    function draw(){
        ctx.fillStyle = options.ballColor
        ctx.fillRect(ball.x,ball.y,ball.size,ball.size)
    }
    
    function setBallPosition(x,y){
        ball.x = x
        ball.y = y
    }
    
    function getBallPosition(){
        return {
            x: ball.x
          , y: ball.y
        }
    }
    
    return {
        options: options
      , init: init
      , moveBall: moveBall
    }
    
})()