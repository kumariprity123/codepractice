function factorialOfNum(n){
var fact = 1;
for( var i=n; i>=1; i--){
    fact= fact*i;
}
return fact;
}
var x=6;
var factorial = factorialOfNum(x);
console.log(factorial);
