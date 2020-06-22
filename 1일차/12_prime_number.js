function isPrime(n)
{
    if (n == 1)
        return false;
    if (n == 2)
        return true;
    if (n % 2 == 0)
        return false;

    for(var i = 2; i <= Math.sqrt(n); i++) {
        if(n % i == 0) return false;
    }
    return true;
}

function CaseAll(hash, str, remain) {

    if(str[0] == '0') {
        str = str.slice(1);
    }

    if(str.length > 0 && !hash[str]) {
        hash[str] = isPrime(parseInt(str));
    }    
        
    if(remain != '') {
        for(var i = 0; i < remain.length; i++) {
            var st = remain.slice(0, i).concat(remain.slice(i + 1, remain.length));
            CaseAll(hash, str + remain[i], st);
        }
    }
}

function solution(numbers) {

    var result = { };

    CaseAll(result, '', numbers);

    var cnt = 0;
    for(var t in result) {
        if(result[t]) cnt++;
    }

    return cnt;
}

console.log(solution('17'));