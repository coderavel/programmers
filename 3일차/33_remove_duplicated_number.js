// 레벨 2, 짝지어 제거하기

// 방법 1: 효율성 테스트에서 시간 초과
// function solution(s)
// {
//     var i = 1;
//     while(s.length > 1 && i < s.length)
//     {
//         if(s[i - 1] == s[i]) {
//             s = s.slice(0, i - 1).concat(s.slice(i + 1));
//             i--;
//         } else {
//             i++;
//         }        
//     }

//     return s.length == 0 ? 1 : 0;
// }

// 방법 2
function solution(s)
{
    var stack = [];

    var i = 0;
    while(i < s.length) {
        if(stack[stack.length - 1] == s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
        i++;
    }

    return stack.length == 0 ? 1 : 0;
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));