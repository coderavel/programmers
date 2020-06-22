function solution(A,B){
    var answer = 0;

    var sa = A.sort((a, b) => a - b);
    var sb = B.sort((a, b) => b - a);

    for(var i = 0; i < sa.length; i++)
    {
        answer = answer + sa[i] * sb[i];
    }

    return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1,2],[3,4])); // 10
