function solution(brown, yellow) {
    var answer = [];

    var total = brown + yellow;

    var dc = [1];
    for(var k = 2; k < total; k++)
    {
        if(total % k == 0) {
            dc.push(k);
        }
    }

    for(var i = dc.length - 1; i >= 0; i--)
    {
        var v = total / dc[i];
        if(dc[i] < v) break;
        if(brown == (dc[i] + v - 2) * 2) {
            return [dc[i], v];
        }
    }

    return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));

/*

brown	yellow	return
10      2	    [4, 3]
8   	1   	[3, 3]
24  	24  	[8, 6]

*/