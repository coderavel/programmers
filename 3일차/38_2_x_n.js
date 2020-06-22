function solution(n) {
    var answer = 0;

    if(n == 1) return 1;
    else if(n == 2) return 2;

    var arr = [1, 1, 2];    // idx: 0, 1, 2

    for(var i = 3; i <= n; i++)
    {
        arr[i] = (arr[i-1] + arr[i-2]) % 1000000007;
    }

    return arr[n] % 1000000007;
}

console.log(solution(4));