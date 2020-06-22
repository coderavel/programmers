// DFS(stack) 이용 : 시간 초과
// function solution(land) {
//     var answer = 0;

//     var stack = [];
//     for(var i = 0; i < 4; i++)
//     {
//         stack.push({
//             row : 0,
//             col : i,
//             total: land[0][i]
//         });
//     }

//     while(stack.length > 0) {
//         var item = stack.pop();
//         if(item.row < land.length - 1) {
//             for(var j = 0; j < 4; j++)
//             {
//                 if(item.col == j) continue;
//                 stack.push({
//                     row: item.row + 1,
//                     col: j,
//                     total: item.total + land[item.row + 1][j]
//                 });
//             }            
//         } else if (item.total > answer) {
//             answer = item.total;
//         }
//     }

//     return answer;
// }

function solution(land) {
    var answer = 0;

    for(var i = 1; i < land.length; i++)
    {        
        land[i][0] += Math.max(land[i-1][1], land[i-1][2], land[i-1][3]);
        land[i][1] += Math.max(land[i-1][0], land[i-1][2], land[i-1][3]);
        land[i][2] += Math.max(land[i-1][0], land[i-1][1], land[i-1][3]);
        land[i][3] += Math.max(land[i-1][0], land[i-1][1], land[i-1][2]);
    }

    return Math.max(...land[land.length - 1]);
}

console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]));