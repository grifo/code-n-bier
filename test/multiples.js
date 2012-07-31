suite('Multiples', function() {

    setup(function() {
    // ...
    });


    suite('#truly', function() {

        test('1 is truly', function() {
            assert.ok(1);
        });

        test('true is truly', function() {
            assert.ok(1);
        });

    });


    suite('#indexOf()', function() {
        var array = []

        setup(function() {
            array = [1,2,3];
        });

        test('should return -1 when not present', function() {
            assert.equal(-1, array.indexOf(4));
        });
    });

});