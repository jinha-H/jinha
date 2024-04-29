var a = 1;
global.b = 2;
console.log(a, global.a, this.a); // 1 1 1
console.log(b, global.b, this.b); // 2 2 2

global.a = 3;
b = 4;
console.log(a, global.a, this.a); // 3 3 3
console.log(b, global.b, this.b); // 4 4 4