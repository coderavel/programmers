// 레벨 2 / 튜플 (카카오)

function solution(s) {
    var answer = [];

    s = s.slice(1, s.length - 1);

    var obj = {};
    var max = 0;
    while(true) {

        var b = s.indexOf('{');
        var e = s.indexOf('}');

        if(b == -1) break;

        var sub = s.slice(b, e + 1);
        s = s.slice(e + 1);

        sub = sub.replace(/[\{|\}]/g, '').split(',').map(v => parseInt(v));

        obj[sub.length] = sub;
        if(max < sub.length) {
            max = sub.length;
        }
    }

    answer.push(obj['1'][0]);

    for(var i = 2; i <= max; i++)
    {
        for(var j = 0; j < i; j++)
        {
            if(answer.indexOf(obj[i][j]) == -1) {
                answer.push(obj[i][j]);
            }
        }
    }

    return answer;
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'));
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
console.log(solution('{{20,111},{111}}'));
console.log(solution('{{123}}'));
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'));