function solution(n,a,b)
{
    var answer = 0;
    
    do {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    } while(a != b);

    return answer;
}

console.log(solution(8, 4, 7));