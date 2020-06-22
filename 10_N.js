function solution(N, number) {

    var list = [[0]];

    for(var i = 1; i <= 8; i++)
    {
        var sub = [list[i-1][0] * 10 + N];
        list.push(sub);
    }
    
    for(var i = 1; i <= 8; i++)
    {
        for(var j = 1; j < i; j++)
        {
            for(var left = 0; left < list[j].length; left++)
            {
                for(var right = 0; right < list[i-j].length; right++)
                {
                    var num = list[j][left] + list[i-j][right];
                    if(list[i].indexOf(num) == -1) list[i].push(num);

                    num = list[j][left] - list[i-j][right];
                    if(list[i].indexOf(num) == -1) list[i].push(num);

                    num = list[j][left] * list[i-j][right];
                    if(list[i].indexOf(num) == -1) list[i].push(num);

                    if(list[i-j][right] != 0) {
                        num = Math.floor(list[j][left] / list[i-j][right]);
                        if(list[i].indexOf(num) == -1) list[i].push(num);
                    }                    
                }
            }
        }
        if(list[i].indexOf(number) != -1) return i;
    }

    return -1;
}

// console.log('============================');
// console.log(solution(5, 12));

console.log('============================');
console.log(solution(2, 11));