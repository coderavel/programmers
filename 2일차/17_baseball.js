function compare(str, str2)
{
    var p = [0, 0];
    for(var i = 0; i < str.length; i++)
    {
        for(var j = 0; j < str2.length; j++)
        {
            if(str[i] == str2[j]) {
                if(i == j) {
                    p[0]++;
                }else {
                    p[1]++;
                }
            } 
        }
    }
    return p;
}

function solution(baseball) {
    var answer = 0;

    for(var i = 1; i <= 9; i++) {
        for(var j = 1; j <= 9; j++) {
            if(i == j) continue;
            for(var k = 1; k <= 9; k++) {
                if(i == k || j == k) continue;
                var s = '' + i + j + k;
                var check = true;
                for(var m = 0; m < baseball.length; m++)
                {
                    var point = baseball[m].slice(1);
                    var r = compare(s, baseball[m][0].toString());
                    if(r.toString() != point.toString()) {
                        check = false;
                        break;
                    }
                }
                if(check) {
                    console.log(s);
                    answer++;
                }
            }
        }
    }

    return answer;
}

solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]);