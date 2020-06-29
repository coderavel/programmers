function solution(n, road, k) {

    var answer = 0;

    var matrix = [];
    for(var i = 0; i < n; i++) {
        var sub = [];
        for(var j = 0; j < n; j++)
        {
            if(i == j) sub.push(0);
            else sub.push(Number.POSITIVE_INFINITY);
        }
        matrix.push(sub);
    }

    for(var i = 0; i < road.length; i++)
    {
        matrix[road[i][0]-1][road[i][1]-1] = Math.min(matrix[road[i][0]-1][road[i][1]-1], road[i][2]);
        matrix[road[i][1]-1][road[i][0]-1] = Math.min(matrix[road[i][0]-1][road[i][1]-1], road[i][2]);
    }

    for (var q = 0; q < n; q++) {
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i][q] + matrix[q][j]);
            }
        }
    }

    matrix[0].forEach(v => {
        console.log(v);
        if (v <= k) answer++;
    });

    return answer;
}

console.log(solution(5, [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3));
// console.log(solution(6, [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]], 4));