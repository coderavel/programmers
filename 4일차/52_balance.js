// 문제의 핵심
// 1. a, b, c, d 

// function solution(weight) {

//     weight.sort((a, b) => a - b);

//     var last = 0;
//     var target = 1;
//     while(true) {

//         for(var k = last; k < weight.length; k++)
//         {
//             if(target != weight[k]) {
//                 last = k;
//             }
//             target++;
//         }
        
//         var t2 = target;
//         var check = false;
//         for(var i = weight.length - 1; i >= 0; i--)
//         {
//             if(weight[i] <= t2) {
//                 t2 -= weight[i];
//                 if(t2 == 0) {
//                     check = true;
//                     break;
//                 }
//             }
//         }

//         if(!check) return target;
//     }
// }

function solution(weight) {
    weight.sort((a, b) => a - b);
    var answer = 1;
    for(var i = 0; i < weight.length; i++) {        
        if(answer >= weight[i]) {
            answer += weight[i];
        } else {
            break;
        }
    }
    return answer;
}

console.log(solution([3, 1, 6, 2, 7, 30, 1]));