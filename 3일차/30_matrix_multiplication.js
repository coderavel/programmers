// 레벨 2, 행렬의 곱셈

function solution(arr1, arr2) {
    var answer = [];

    var h = arr1.length;
    var m = arr2.length;
    var v = arr2[0].length;

    for(var i = 0; i < h; i++)
    {
        answer.push([]);
        for(var j = 0; j < v; j++)
        {
            var e = 0;
            for(var k = 0; k < m; k++)
            {
                e += arr1[i][k] * arr2[k][j];
            }
            answer[i].push(e);
        }
    }

    return answer;
}

// console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));
// console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]));
console.log(solution([[1, 2], [3, 4]], [[5, 6, 7], [8, 9, 10]]));
