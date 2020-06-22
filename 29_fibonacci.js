// 레벨 2 / 피보나치 수
// 방법 1 : 재귀함수
// function fibonacci(dp, n) {

//     if(n == 0) return 0;
//     else if(n == 1) return 1;
//     else if(dp[n]) return dp[n];

//     dp[n] = (fibonacci(dp, n - 1) % 1234567 + fibonacci(dp, n - 2) % 1234567) % 1234567;
//     return dp[n];
// }

// function solution(n) {
//     var answer = 0;

//     var dp = [0, 1, 1];

//     answer = fibonacci(dp, n);

//     return answer;
// }

// 방법 2: DP
function solution(n)
{
    var dp = [0, 1, 1];

    if(n == 0) return 0;
    if(n == 1) return 1;

    for(var i = 2; i <= n; i++)
    {
        dp[i] = (dp[i-1] % 1234567 + dp[i-2] % 1234567) % 1234567;
    }

    return dp[n];
}


console.log(solution(10));
// console.log(solution(5));