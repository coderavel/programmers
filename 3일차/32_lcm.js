// 레벨 2, 최소공배수

function GCD(a, b)
{
    var m = 0;
    while(true) {
        m = a % b;
        if(m == 0) {
            break;
        }
        a = b;
        b = m;
    }

    return b;
}

function LCM(a, b)
{
    return a * b / GCD(a, b);
}

function solution(arr) {

    var answer = arr.reduce((p, v, i) => {        
        return LCM(p, v);
    }, 1);

    return answer;
}

console.log(solution([2,6,8,14]));
console.log(solution([1,2,3]));