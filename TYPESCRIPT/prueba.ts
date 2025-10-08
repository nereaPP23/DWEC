function doblar(a:number):number{
    return a * 2;
}
const sumar = (a:number, b:number):number => a + b;
const factorial = (a:number):number => {
    if (a <= 1){
        return 1;
    }
        return a * factorial(a -1);
 }
console.log(doblar(6));
console.log(sumar(6,7));
console.log(factorial(5));