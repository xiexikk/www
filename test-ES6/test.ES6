
let a = '1';
let b = '2';
input.map(item => item + 1);


// JavaScript 数组map()方法创建一个新的数组使用调用此数组中的每个元素上所提供的函数的结果。
var a1 = [1,2,3];
var a2 = a1.map(_ => _ * 2);
console.log(a2);

function man(name = 'Mike',age = 18) {
    console.log(name,age);
}
man();    //Mike 18

var sun2 = a => a;

var sun3 = (a,b)=>{ return a+b}
sun3(1,2);

var sum02 = 0;
var arr02 =[1,2,3,4];
arr02.forEach(v => sum02+=v);

var obj2 = {
    x:100,//属性x
    show(){
        //延迟500毫秒，输出x的值
        setTimeout(
            //不同处：箭头函数
            () => { console.log(this.x)}, //this是指的obj，
            500
        );
    }
};
obj2.show();//打印结果：100


var obj = {
    y1:100, //属性y
    show(){
        //延迟500毫秒，输出x的值
        setTimeout(
            //匿名函数
            function(){
                console.log(this.y1);      //this指向window对象
            },
            500
        );
    }
};

var ar3 = [1,2,3,4,5];
for(let value of ar3){
    console.log(value);  //1,2,3,4,5
}
for(let index of ar3.keys()){
    console.log(index); //0,1,2,3,4
}


let objo = {
    0:"我是0",
    1:"我是1",
    2:"我是2",
    length:3,
    //添加[Symbol.iterator]方法
    [Symbol.iterator]:function () {
        let _this = this;
        let index = 0;
        return{
            next:() =>{
                let value = _this[index];
                let done = (index>=_this.length);
                index++;
                return {value,done}
            }
        }
    }
};
for(let v of objo){
    console.log(v);
}

class Animal {
    //构造方法
    constructor(names){
        //属性name
        this.names = names;
        console.log(this.names);
    }

    //自定义方法getName
    getNames(){
        console.log('This is a '+this.names);
        return 'This is a'+this.names;
    }
}

//创建一个Animal实例对象pig
let pig = new Animal('pig');
pig.names; //结果：pig
pig.getNames(); //结果：This is a pig




class Father {
    //构造函数
    constructor(namex){
        this.namex = namex;
    }
    //父类自定义方法
    say(){
        return `This is a animal`;
    }
}

//子类Child
class Child extends Father{
    constructor(namex,colorx){
        super(namex);       //super来引用父类，访问父类的方法 ; 它相当于是父类中的this。
        this.colorx = colorx;
    }
    //子类的实例方法
    getAttritube(){
        console.log(`${super.say()}, namex: ${this.namex},colorx: ${this.colorx}`);

        return `${super.say()},
                    namex: ${this.namex},
                    colorx: ${this.colorx}`;
    }
}
//创建Child实例对象
let cc = new Child('cat','black');


let {totalPage: totalPage, page: currentPage} = d;

