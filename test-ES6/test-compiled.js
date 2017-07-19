'use strict';

var a = '1';
var b = '2';
input.map(function (item) {
    return item + 1;
});

// JavaScript 数组map()方法创建一个新的数组使用调用此数组中的每个元素上所提供的函数的结果。
var a1 = [1, 2, 3];
var a2 = a1.map(function (_) {
    return _ * 2;
});
console.log(a2);

function man() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Mike';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;

    console.log(name, age);
}
man(); //Mike 18

var sun2 = function sun2(a) {
    return a;
};

var sun3 = function sun3(a, b) {
    return a + b;
};
sun3(1, 2);

var sum02 = 0;
var arr02 = [1, 2, 3, 4];
arr02.forEach(function (v) {
    return sum02 += v;
});

var obj2 = {
    x: 100, //属性x
    show: function show() {
        var _this = this;

        //延迟500毫秒，输出x的值
        setTimeout(
        //不同处：箭头函数
        function () {
            console.log(_this.x);
        }, //this是指的obj，
        500);
    }
};
obj2.show(); //打印结果：100


var obj = {
    y1: 100, //属性y
    show: function show() {
        //延迟500毫秒，输出x的值
        setTimeout(
        //匿名函数
        function () {
            console.log(this.y1); //this指向window对象
        }, 500);
    }
};

var ar3 = [1, 2, 3, 4, 5];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = ar3[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;

        console.log(value); //1,2,3,4,5
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = ar3.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var index = _step2.value;

        console.log(index); //0,1,2,3,4
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

//# sourceMappingURL=test-compiled.js.map