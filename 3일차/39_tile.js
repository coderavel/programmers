function solution(n) {
    var answer = 0;
    
    var dp = [1, 1];

    var i = 2;
    while(i < n)
    {
        dp[i] = dp[i-1] + dp[i-2];
        i++;
    }
    
    var s1 = dp[n-1] + dp[n-2];
    var s2 = dp[n-2] + dp[n-3];

    return s1 * 2 + s2 * 2;
}

console.log(solution(5));
console.log(solution(6));