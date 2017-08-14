'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        var _this2 = this;

        //延迟500毫秒，输出x的值
        setTimeout(
        //不同处：箭头函数
        function () {
            console.log(_this2.x);
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

var objo = _defineProperty({
    0: "我是0",
    1: "我是1",
    2: "我是2",
    length: 3
}, Symbol.iterator, function () {
    var _this = this;
    var index = 0;
    return {
        next: function next() {
            var value = _this[index];
            var done = index >= _this.length;
            index++;
            return { value: value, done: done };
        }
    };
});
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = objo[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var v = _step3.value;

        console.log(v);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var Animal = function () {
    //构造方法
    function Animal(names) {
        _classCallCheck(this, Animal);

        //属性name
        this.names = names;
        console.log(this.names);
    }

    //自定义方法getName


    _createClass(Animal, [{
        key: 'getNames',
        value: function getNames() {
            console.log('This is a ' + this.names);
            return 'This is a' + this.names;
        }
    }]);

    return Animal;
}();

//创建一个Animal实例对象pig


var pig = new Animal('pig');
pig.names; //结果：pig
pig.getNames(); //结果：This is a pig


var Father = function () {
    //构造函数
    function Father(namex) {
        _classCallCheck(this, Father);

        this.namex = namex;
    }
    //父类自定义方法


    _createClass(Father, [{
        key: 'say',
        value: function say() {
            return 'This is a animal';
        }
    }]);

    return Father;
}();

//子类Child


var Child = function (_Father) {
    _inherits(Child, _Father);

    function Child(namex, colorx) {
        _classCallCheck(this, Child);

        //super来引用父类，访问父类的方法 ; 它相当于是父类中的this。
        var _this3 = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, namex));

        _this3.colorx = colorx;
        return _this3;
    }
    //子类的实例方法


    _createClass(Child, [{
        key: 'getAttritube',
        value: function getAttritube() {
            console.log(_get(Child.prototype.__proto__ || Object.getPrototypeOf(Child.prototype), 'say', this).call(this) + ', namex: ' + this.namex + ',colorx: ' + this.colorx);

            return _get(Child.prototype.__proto__ || Object.getPrototypeOf(Child.prototype), 'say', this).call(this) + ',\n                    namex: ' + this.namex + ',\n                    colorx: ' + this.colorx;
        }
    }]);

    return Child;
}(Father);
//创建Child实例对象


var cc = new Child('cat', 'black');

var _d = d,
    totalPage = _d.totalPage,
    currentPage = _d.page;

//# sourceMappingURL=test-compiled.js.map