
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


