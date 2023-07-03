function calcAddition(number1,number2)
{
return number1+number2;
}
console.log(calcAddition(10,7));

const square=function(number)
{
 return number*number;
}
console.log (square(4));

const a=["boron","carbon","nitrogen","helium"];
const b=a.map(function(s){
    return s.length;
})
console.log("Normal way",b);

const c=a.map((s) => s.length);
console.log("Arrow Function",c);
