function shiftTo(str, pf, first, ps, second)
{    
    var fs = str.slice(0, pf) + first;    
    var ss = second + str.slice(ps + 1);
    return fs + ss;
}

function solution(n) {

    var bin = n.toString(2);

    bin = '0' + bin;

    var target = -1;
    for(var i = bin.length - 1; i > 0; i--)
    {
        if(bin[i] == '1' && i - 1 >= 0 && bin[i-1] == '0') {
            bin = shiftTo(bin, i - 1, '1', i, '0');
            target = 1;
            break;
        }
        else if(bin[i] == '1') {
            for(var j = i; j < bin.length - 1; j++) {
                if(bin[j] == '1' && bin[j + 1] == '0') {
                    bin = shiftTo(bin, j, '0', j + 1, '1');
                }
            }
        }
    }
    
    if(bin[0] == '0') {
        bin = bin.slice(1);
    }

    return parseInt(bin, 2);
}

console.log(solution(78));
console.log(solution(15));