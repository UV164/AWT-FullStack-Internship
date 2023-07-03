document.write("-----function hoisting----");
console.log(square(5));
document.write(square(3));
function square(n){
    return n*n;
}