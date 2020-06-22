function solution(str) {
    var rd = 0;
    var i = 1;
    var cnt = 0;
    var prev = 0;
    while(str[i])
    {
        if(prev == 0 && str[i] == '(') {
            rd++;
        } else if (prev == 0 && str[i] == ')') { // 레이저
            cnt += rd;
            prev = 1;
        } else if (prev == 1 && str[i] == ')') {
            cnt++;
            rd--;
        } else if (prev == 1 && str[i] == '(') {
            prev = 0;
        }
        i++;
    }

    return cnt;
}

console.log('============================');
console.log(solution('()(((()())(())()))(())'));
console.log(solution('()(((()())(())()))(())') == 17);
