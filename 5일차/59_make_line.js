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
        console.log(fact, n);
        var cnt = fact / n;
        console.log(cnt);
        fact /= n;
        n--;

        var p = Math.floor(k / cnt);
        console.log(p);

        answer.push(no[p]);
        no.splice(p, 1);

        k = k % cnt;
        console.log(k);
        console.log('==============');
    }
    return answer;
}

console.log(solution(3, 4));