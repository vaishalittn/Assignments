function delay(seconds, cb, ...rest){
var millis = seconds*1000;
var cb = rest.pop();
var boundCB = cb.bind(null,...rest);
setTimeout(boundCB,millis);
}
function printGreeting(greeter, msg)
{
console.log(greeter + " says " + msg);
}

delay(2,10,30,function(a,b){console.log(a+b);});

function randomBetween(a,b){
return Math.floor(a + (b - a) * Math.random());
}
var promiseOne = new Promise(function (resolve, reject){
var r = randomBetween(10,50);
  if (r%2 == 0) {
  resolve(r + " is even");
  } else {
     reject(r + " is odd"); 
  }
  }
);