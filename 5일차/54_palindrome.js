function solution(s)
{
    var answer = 1;

    function Match(left, right, point) {
        while(left >= 0 && right < s.length) {
            if(s[left] != s[right]) break;
            point +=2;
            left--;
            right++;
        }
        if(answer < point) {
            answer = point;
        }
    }

    var i = 0;
    while(i < s.length)
    {
        if((i - 1 >= 0 && i + 1 < s.length) && s[i - 1] == s[i + 1]) {
            Match(i - 2, i + 2, 3);
        }
        
        if((i >= 0 && i + 1 < s.length) && s[i] == s[i + 1]) {
            Match(i - 1, i + 2, 2);
        }
        i++;
    }

    return answer;
}