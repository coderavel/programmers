function solution(n) {    

    function FillMap(y, x, map) {

        for(var i = y; i < n; i++)
        {
            map[i][x] = true;
        }

        var cx = x + 1;
        var cy = y + 1;
        while(cx < n && cy < n) {
            map[cy][cx] = true;
            cy++;
            cx++;
        }

        var cx = x - 1;
        var cy = y + 1;
        while(cx >= 0 && cy < n) {
            map[cy][cx] = true;
            cy++;
            cx--;
        }
    }

    var answer = 0;

    var origin = [];
    for(var i = 0; i < n; i++)
    {
        var sub = [];
        for(var j = 0; j < n; j++)
        {
            sub.push(false);
        }
        origin.push(sub);
    }

    var stack = [];
    for(var i = 0; i < n; i++)
    {
        var submap = origin.map((v) => v.slice());
        FillMap(0, i, submap);
        stack.push({
            n: 0,
            board: submap
        });
    }

    while(stack.length > 0) {

        var item = stack.pop();
        if(item.n == n - 1) answer++;
        else { 
            for(var i = 0; i < n; i++) {
                if(item.board[item.n + 1][i] == false) {
                    var submap = item.board.map((v) => v.slice());
                    FillMap(item.n + 1, i, submap);
                    stack.push({
                        n: item.n + 1,
                        board: submap
                    });
                }
            }
        }
    }

    return answer;
}

console.log(solution(4));