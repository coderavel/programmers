function solution(A, B) {
    var answer = 0;

    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);

    var a = 0;
    var b = 0;
    while(b < B.length && a < A.length) {
        if(B[b] > A[a]) {
            answer++;
            b++;
            a++;
        } else if(B[b] == A[a]) {
            a++;
        } else {
            a++;
        }
    }

    return answer;
}

console.log(solution([5,1,3,7], [2,2,6,8]));
console.log(solution([2,2,2,2], [1,1,1,1]));