function solution(t)
{        
    for(var i = 1; i < t.length; i++)
    {
        for(var j = 0; j < t[i].length; j++)
        {
            if(j == 0) {
                t[i][j] = t[i][j] + t[i - 1][j];
            } else if(j == t[i].length - 1) {
                t[i][j] = t[i][j] + t[i - 1][j - 1];
            } else {
                t[i][j] = t[i][j] + Math.max(t[i - 1][j], t[i - 1][j - 1]);
            }
        }
    }

    return Math.max(...t[t.length - 1]);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));