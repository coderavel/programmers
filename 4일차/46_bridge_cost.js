function solution(n, costs) {

    costs.sort((a, b) => {
        return a[2] - b[2];
    });

    var visit = [];
    for(var i = 0; i < n; i++)
    {
        visit.push(false);
    }

    visit[costs[0][0]] = true;
    visit[costs[0][1]] = true;
    var cost = costs[0][2];

    costs.shift();

    var conn = 2;
    while(conn < n) {

        var target = -1;
        var i;
        for(i = 0; i < costs.length; i++)
        {
            if(visit[costs[i][0]] && !visit[costs[i][1]]) {
                target = costs[i][1];
                break;
            } else if(!visit[costs[i][0]] && visit[costs[i][1]]) {
                target = costs[i][0];
                break;
            }
        }

        if(target != -1) {
            visit[target] = true;
            cost += costs[i][2];
            costs.splice(i, 1);
            conn++;
        }
    }

    return cost;
}

console.log(solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]));
console.log(solution(6, [[0, 1, 5], [0, 3, 2], [0, 4, 3], [1, 4, 1], [3, 4, 10], [1, 2, 2], [2, 5, 3], [4, 5, 4]]));