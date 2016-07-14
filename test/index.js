var tape = require("tape"),
    indexOf = require("../src/index");


tape("should return index of item in array", function(assert) {
    assert.equal(indexOf([0, 1, 2], 1), 1);
    assert.equal(indexOf([0, 1, 2], 3), -1);
    assert.end();
});
