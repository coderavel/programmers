function solution(ct) {
    var answer = 0;

    ct.sort();

    var hs = [];
    for(var i = 0; i < ct.length; i++)
    {
        var q = ct[i];
        var cnt = 0;
        for(var j = 0; j < ct.length; j++)
        {
            if(q <= ct[j]) {
                cnt++;
            }
        }
        hs.push(Math.min(q, cnt));
    }

    var max = Math.max(...hs);

    return max;
}

console.log(solution([3, 0, 6, 1, 5]));