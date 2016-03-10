var tape = require("tape"),
    once = require("..");


tape("once(fn [, thisArg])", function(assert) {
    var onceFn = once(function fn() {
        return "Hello, World!";
    });

    assert.equal(onceFn(), "Hello, World!");

    assert.end();
});
