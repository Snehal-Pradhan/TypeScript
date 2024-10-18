"use strict";
// with ts we can create complex types by combining simple types.
// two ways to do so
// i can also give multiple types as a inout in a function
function arrayHandling(obj) {
    if (typeof obj === "string")
        return [obj];
    return obj;
}
console.log("hi");
console.log(arrayHandling("hello"));
