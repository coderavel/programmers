function solution(n) {
    var answer = '';

    do {
        answer = '412'[(n % 3)] + answer;
        n = Math.floor((n - 1)/ 3);
    } while (n > 0);

    return answer;
}

console.log(solution(1) == 1);
console.log(solution(2) == 2);
console.log(solution(3) == 4);
console.log(solution(4) == 11);
console.log(solution(5) == 12);
console.log(solution(6) == 14);
console.log(solution(7) == 21);
console.log(solution(8) == 22);
console.log(solution(9) == 24);
console.log(solution(10) == 41);
console.log(solution(11) == 42);
console.log(solution(12) == 44);