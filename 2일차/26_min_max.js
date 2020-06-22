//레벨: 2 / 최댓값과 최소값

function solution(s) {

    var arr = s.split(' ').map((v) => {
        return parseInt(v);
    });

    var min = arr[0];
    var max = arr[0];

    arr.forEach(v => {
        if(min > v) min = v;
        if(max < v) max = v;
    });

    return min + ' ' + max;
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));