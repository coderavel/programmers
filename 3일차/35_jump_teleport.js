// 레벨 2, 점프와 텔레포트

function solution(n)
{
    var ans = 1;

    while(n != 1)
    {
        if(n % 2 == 0) {
            n = n / 2;
        } else {
            n = (n - 1) / 2;
            ans++;
        }
    }

    return ans;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));