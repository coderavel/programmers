function solution(n, results) {
    var answer = 0;

    var matrix = [];
    for(var i = 0; i <= n; i++) {
        var sub = [];
        for(var j = 0; j <= n; j++)
        {
            sub.push(0);
        }
        matrix.push(sub);
    }

    for(var i = 0; i < results.length; i++)
    {
        matrix[results[i][0]][results[i][1]] = 1;
        matrix[results[i][1]][results[i][0]] = -1;
    }
    
    console.log(matrix);

    for(var m = 1; m <= n; m++)
    {
        for(var s = 1; s <= n; s++)
        {
            for(var e = 1; e <=n; e++)
            {
                if(matrix[s][m] == 1 && matrix[m][e] == 1) {
                    matrix[s][e] = 1;
                    matrix[e][s] = -1;
                } else if(matrix[s][m] == -1 && matrix[m][e] == -1) {
                    matrix[s][e] = -1;
                    matrix[e][s] = 1;
                }
            }
        }
    }

    console.log(matrix);
    
    for(var i = 1; i <= n; i++)
    {
        var cnt = 0;
        for(var j = 1; j <= n; j++)
        {
            if(matrix[i][j] == 0) cnt++;
        }

        if(cnt == 1) answer++;
    }

    return answer;
}

console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]));