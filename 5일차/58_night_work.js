function solution(n, works) { 
    
    works.sort((a, b) => b - a);

    var max = works[0];
    while(n > 0) {
        var i = 0;
        while(n > 0 && works[i] == max) {
            works[i]--;
            n--;
            i++;
        }
        max--;
        if(max == 0) break;
    }

    var answer = works.reduce((p, v) => {
        return p + v * v;
    }, 0);

    return answer;
}

console.log(solution(4, [4, 3, 3]));
console.log(solution(1, [2, 1, 2]));
console.log(solution(3, [1, 1]));