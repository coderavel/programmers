function solution(s)
{
    var answer = 1;

    var i = 0;
    while(i < s.length)
    {
        var v = 0, b, e;
        
        if((i - 1 >= 0 && i + 1 < s.length) && s[i - 1] == s[i + 1]) {
            v = 3;
            b = i - 2;
            e = i + 2;
            while(b >= 0 && e < s.length) {

                if(s[b] != s[e]) break;
                v +=2;
                b--;
                e++;
            }
            if(answer < v) {
                answer = v;
            }
        }
        
        if((i >= 0 && i + 1 < s.length) && s[i] == s[i + 1]) {
            v = 2;
            b = i - 1;
            e = i + 2;
            while(b >= 0 && e < s.length) {

                if(s[b] != s[e]) break;
                v +=2;
                b--;
                e++;
            }
            if(answer < v) {
                answer = v;
            }
        }
        i++;
    }

    return answer;
}