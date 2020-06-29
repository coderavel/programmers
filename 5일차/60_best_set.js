function solution(n, s) {

    if(n > s) return [-1];

    var answer = [];

    var avg = Math.floor(s / n);
    var re = s % n;

    for(var i = 0; i < n; i++) {
        if(i < n - re) {
            answer.push(avg);
        } else {
            answer.push(avg + 1);
        }
    }

    return answer;
}

console.log(solution(2, 9));
console.log(solution(2, 1));
console.log(solution(2, 8));