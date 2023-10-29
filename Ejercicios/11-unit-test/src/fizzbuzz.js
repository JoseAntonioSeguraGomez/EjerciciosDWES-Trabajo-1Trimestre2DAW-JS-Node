export function fizzBuzz(n){
    if(n <= 0) throw new Error('Number must be greater than 0');
    let text ="";
    if(n % 3 == 0) text += "fizz";
    if(n % 5 == 0) text += "buzz";
    return text || n;
}