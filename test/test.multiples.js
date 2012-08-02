suite('Multiples', function() {

    setup(function() {
    // ...
    });

    suite('multiple 3', function() {

        test('3 is multiple of 3', function() {
            assert.ok(Multiples.mul3(3));
        });

        test('5 is not multiple of 3', function() { 
            assert.ok(!Multiples.mul3(5));
        });

    });

    suite('multiple 5', function() {
        
        test('10 is multiple of 5', function(){
            assert.ok(Multiples.mul5(10));
        });

        test('11 is not multiple 5', function(){
            assert.ok(!Multiples.mul5(11));
        });

    });

    suite('Lower than 0', function() {
        
        test('number lower than 0', function () {
            assert.ok(Multiples.lowerThanZero(-1))
        });

    });

    suite('doList works', function() {
        test('number 10 return 3, 5, 6, 9', function() {
            var result = Multiples.doList(10);
            assert.equal(result.join(","), "3,5,6,9");
        });
    });

    suite('doSum works', function () {
        test('number 10 returns 23', function () {
            var result = Multiples.doList(10);
            assert.equal(Multiples.doSum(result), 23);
        });
    });

    suite('doListSum funciona', function(){
        test('doListSum 14 returns bla bla', function(){
            var result = Multiples.doListSum(14);
            result = result.toString();
            assert.equal(result, "3,5,6,9,10,12,45" );
        })

        test('doListSum 20 returns bla bla', function(){
            var result = Multiples.doListSum(20);
            result = result.toString();
            assert.equal(result, "3,5,6,9,10,12,15,18,78" );
        })

        test('sum is greater or equal than array', function() {
            var result = Multiples.doListSum(10);
            return !(Multiples[Multiples.length - 1] < 10);
            
        })
    })

    suite('Is an Integer', function(){
        test('1 is an integer', function(){
            assert.ok(Multiples.isInteger(1));
        });
        test('1.0 is not  an integer', function() {
            assert.ok(Multiples.isInteger(1.0));
        })
        test('1.1 is not an integer', function(){
            assert.ok(Multiples.isInteger(1.1) == false);
        });
        test('string is not an integer', function(){
            assert.ok(Multiples.isInteger('ss') == false)
        });
        test('object is not an integer', function() {
            assert.ok(Multiples.isInteger({}) == false);
        });
    });



    // suite('#truly', function() {

    //     test('1 is truly', function() {
    //         assert.ok(1);
    //     });

    //     test('true is truly', function() {
    //         assert.ok(1);
    //     });

    // });


    // suite('#indexOf()', function() {
    //     var array = []

    //     setup(function() {
    //         array = [1,2,3];
    //     });

    //     test('should return -1 when not present', function() {
    //         assert.equal(-1, array.indexOf(4));
    //     });
    // });

});