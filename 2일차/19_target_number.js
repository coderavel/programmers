// function check(numbers, target, val, result)
// {
//     if(numbers.length > 0) {
//         var p = numbers.slice(1);
//         var m = numbers.slice(1);
//         check(numbers, target, val + numbers[0], result);
//         check(numbers, target, val - numbers[0], result);
//     } else if(val == target) {
//         result[0]++;
//     }
// }

function solution(numbers, target) {

    var answer = 0;

    var stack = [
        {
            val: -numbers[0],
            arr: numbers.slice(1)
        },
        {
            val: numbers[0],
            arr: numbers.slice(1)
        }
    ];
    
    var i = 1;

    while(stack.length > 0) {
        var cur = stack.pop();
        if(cur.arr.length > 0) {
            stack.push({
                val: cur.val + cur.arr[0],
                arr: cur.arr.slice(1)
            });
            stack.push({
                val: cur.val - cur.arr[0],
                arr: cur.arr.slice(1)
            })
        } else {
            if(cur.val == target) answer++;
        }
    }
   
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));