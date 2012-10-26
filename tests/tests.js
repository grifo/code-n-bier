/*jshint asi:true, eqnull:true, laxbreak: true */

/*
test('ping', function() { 
    ok(true, "True is true!")
    equal(game.ball.x,, "Ping -> pong")
})
*/

test('mover', function(){
    game.setBallPosition(0,0)
    
    game.moveBall()
    equal(game.getPosition().x, 1, "x andou 1")
    equal(game.getPosition().y, 1, "y andou 1")
})

test('bateu', function(){
    var x = game.getBallPosition().x = game.options.width-game.ball.size
    var y = game.getBallPosition().x = game.options.height-game.ball.size
    
    game.moveBall()
    equal(game.getBallPosition().x, x-1, "x voltou 1")
    equal(game.getBallPosition().y, y-1, "y voltou 1")
})
test()