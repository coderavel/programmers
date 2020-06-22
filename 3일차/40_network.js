function solution(n, computers) {

    var answer = 0;

    var visit = [];
    for(var i = 0; i < n; i++)
    {
        visit.push(false);
    }

    var stack = [];

    var i = 0;
    while(i < n) {

        if(stack.length > 0) {
            var node = stack.pop();
            visit[node] = true;
            for(var k = 0; k < computers[node].length; k++) {
                if(!visit[k] && computers[node][k] == 1) {
                    stack.push(k);
                }
            }
        } else {
            while(visit[i]) {
                i++;
            }
        }

        if(visit[i] == false) {
            stack.push(i);
            answer++;
        }
    }


    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));