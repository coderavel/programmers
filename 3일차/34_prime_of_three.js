// 레벨 2, 소수 만들기

function PrimeNumber(n)
{
    if(n < 2) return false;
    else if(n == 2) return true;

    var limit = Math.sqrt(n);
    for(var i = 2; i <= limit; i++)
    {
        if(n % i == 0) return false;
    }

    return true;
}

// 방법 1: 반복문으로 모든 경우 순회하기
// function solution(nums) {
//     var answer = -1;

//     var obj = {};
//     var cnt = 0;
//     for(var i = 0; i < nums.length; i++)
//     {
//         for(var j = 0; j < nums.length; j++)
//         {
//             if(i == j) continue;
//             for(var k = 0; k < nums.length; k++)
//             {
//                 if(j == k || i == k) continue;                
//                 var num = [i, j, k].sort();
//                 var total = nums[i] + nums[j] + nums[k];
//                 if(!obj[num]) {
//                     obj[num] = true;
//                     if(PrimeNumber(total)) {
//                         cnt++;
//                     }
//                 }
//             }
//         }
//     }

//     return cnt;
// }

// 방법 2: 스택을 이용해 순회하기
function solution(nums) {
    var answer = 0;

    var stack = [{
        cnt: 3,
        arr: nums.slice(1),
        total: 0
    }, {
        cnt: 2,
        arr: nums.slice(1),
        total: nums[0]
    }];
    
    while(stack.length > 0) {
        var el = stack.pop();
        if(el.cnt > 0) {
            if(el.arr.length > 0) {
                stack.push({
                    cnt: el.cnt - 1,
                    total: el.total + el.arr[0],
                    arr: el.arr.slice(1)
                });
                stack.push({
                    cnt: el.cnt,
                    total: el.total,
                    arr: el.arr.slice(1)
                });
            }
        } else if(el.cnt == 0) {
            if(PrimeNumber(el.total)) answer++;
        }
    }

    return answer;
}

console.log(solution([1,2,3,4]));
console.log(solution([1,2,7,6,4]));