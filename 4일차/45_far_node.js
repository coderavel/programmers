//레벨 3 가장 먼 노드

function solution(n, edge) {

    var visit = [0];
    for(var i = 0; i < n - 1; i++) {
        visit.push(-1);
    }

    var queue = [{
        order: 1,
        edge: 0
    }];

    var i = 0;
    var max = 0;
    var cnt = 0;
    while(queue.length > 0) {
        
        var node = queue.shift();

        var j = 0;
        while(j < edge.length) {

            var targetNode = -1;
            if(edge[j][0] == node.order && visit[edge[j][1] - 1] == -1) {
                targetNode = edge[j][1];
            } else if(edge[j][1] == node.order && visit[edge[j][0] - 1] == -1) {
                targetNode = edge[j][0];                
            }

            if(targetNode > -1) {
                queue.push({
                    order: targetNode,
                    edge: node.edge + 1
                });
                visit[targetNode - 1] = node.edge + 1;
                if(visit[targetNode - 1] > max) {
                    max = visit[targetNode - 1];
                    cnt = 1;
                } else if(visit[targetNode - 1] == max) {
                    cnt++;
                }
                edge.splice(j, 1);
            }
            else {
                j++;
            }
        }
    }

    return cnt;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));