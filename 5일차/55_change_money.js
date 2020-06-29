function solution(n, money) {

    var dp = [1];

    for (var i = 1; i <= n; i++) dp[i] = 0;

    for (var i = 0; i < money.length; i++) { // 각 코인을 사용하는 경우
        for (var j = 1; j <= n; j++) { // 각 금액에 대한 경우
            if (money[i] <= j) {
                dp[j] += dp[j - money[i]];
            }
        }
    }

    return dp[n];
}

console.log(solution(5, [1,2,5]));