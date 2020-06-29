function solution(n, stations, w) {
    var answer = 0;

    var wide = w * 2 + 1;

    var begin = 0;
    var cnt = 0;
    for(var k = 0; k < stations.length; k++)
    {        
        if(begin < stations[k] - w - 1) {
            cnt = stations[k] - 1 - w - begin;
            answer += Math.ceil(cnt / wide);
            begin = stations[k] + w;
        } else {
            begin = stations[k] + w;
        }
    }

    if(begin < n) {
        cnt = n - begin;
        answer += Math.ceil(cnt / wide);
    }

    return answer;
}

console.log(solution(11, [4, 11], 1));
console.log(solution(16, [9], 2));