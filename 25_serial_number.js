// 레벨: 2 / 숫자의 표현

function solution(n) {
    var answer = 1;

    for(var i = 1; i < n; i++) {
        var total = i;
        for(var j = i + 1; j < n; j++) {
            total += j;
            if(total == n) {
                answer++;
                break;
            }
            else if(total > n) break;
        }
    }

    return answer;
}

console.log(solution(15));