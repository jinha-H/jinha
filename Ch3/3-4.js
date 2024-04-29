var a = 1;
window.b = 2;
console.log(a, global.a, this.a); // 1 1 1
console.log(b, global.b, this.b); // 2 2 2

window.a = 3;
b = 4;
console.log(a, global.a, this.a); // 3 3 3
console.log(b, global.b, this.b); // 4 4 4