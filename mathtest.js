var m=require('./math.js');
console.log(m.PI+" "+m.square(3));
console.log(m);

var cir=require('./circle.js');
var c=new cir(3);
console.log(cir.PI);
console.log(c.area());