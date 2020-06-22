function solution(n) {

    var answer = [0];

    for(var i = 1; i < n; i++)
    {
        var len = answer.length;
        answer.push(0);
        var half = answer.slice(0, len);
        answer = answer.concat(half.map((v) => {
            return v ? 0 : 1;
        }).reverse());
    }

    return answer;
}


console.log('============================');
console.log(solution(1));

console.log('============================');
console.log(solution(2));

console.log('============================');
console.log(solution(3));