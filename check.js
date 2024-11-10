function reverse(ch){
   L=ch.split('');
   L1=[]
   for (var i=0;i<L.length;i--){
    L1.push(L[i]);
   }

    return(L1.join(''));
}
function count(ch){
   return(ch.length);
}
function capitalize(ch){
    ch.split(' ');
    for (i=0;i<length(ch);i++){
        ch[i][0].touppercase();
    }
    return(ch.join(' '));

}
function Max(arr) {
    return Math.max(...arr);
}
  
function Min(arr) {
    return Math.min(...arr);
}
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
function filterArray(arr, condition) {
    return arr.filter(condition);
}
function factorial(n) {
    if (n < 0) return "Factorial not defined";
    var result = 1;
    for (var i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
}
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
}
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}



