var apply = require("apply");


module.exports = once;


function once(fn, thisArg) {
    var called = false,
        value;

    return function onceFn() {
        if (called === false) {
            called = true;
            value = apply(fn, arguments, thisArg);
        }
        return value;
    };
}
