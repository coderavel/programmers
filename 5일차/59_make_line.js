function solution(n, k) {
    var answer = [];

    var no = [];
    var fact = 1;
    for(var i = 1; i <= n; i++)
    {
        no.push(i);
        fact *= i;
    }
    k--;

    while(no.length > 0) {
        var cnt = fact / n;
        fact /= n;
        n--;

        var p = Math.floor(k / cnt);

        answer.push(no[p]);
        no.splice(p, 1);

        k = k % cnt;
    }

    return answer;
}

console.log(solution(6, 20));