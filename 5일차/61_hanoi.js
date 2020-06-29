function solution(n) {
    var answer = [];

    function move(cur, next, sub, cnt)
    {
        if(cnt == 0) return;
        move(cur, sub, next, cnt - 1);
        answer.push([cur, next]);
        move(sub, next, cur, cnt - 1);
    }

    move(1, 3, 2, n);

    return answer;
}

console.log(solution(2));