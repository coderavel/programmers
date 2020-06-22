function solution(top) {
    var answer = [];

    var list = top.map((t,i) => {
        return {
            order: i + 1,
            height : t };
    });

    for(var i = list.length - 1; i > 0; i--)
    {
        var check = 0;
        for(var j = i - 1; j >= 0; j--)
        {
            if(list[j].height > list[i].height) {
                answer.unshift(list[j].order);
                check = 1;
                break;
            }
        }
        if(!check) answer.unshift(0);
    }

    answer.unshift(0);

    return answer;
}

console.log('============================');
// console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
console.log(solution([6,9,5,7,4]));
console.log(solution([6,9,5,7,4]) === [0, 0, 2, 2, 4]);