function solution(nums) {
    var answer = 0;

    var obj = {};

    var total = 0;
    nums.forEach((v, i) => {
        total++;
        if(!obj[v]) obj[v] = 1;
        else obj[v]++;
    });

    total /= 2;

    var kind = Object.keys(obj).length;

    if(total < kind) {
        return total;
    } else {
        return kind;
    }
}

console.log(solution([3,1,2,3]));
console.log(solution([3,3,3,2,2,4]));
console.log(solution([3,3,3,2,2,2]));

/*
[3,1,2,3]	2
[3,3,3,2,2,4]	3
[3,3,3,2,2,2]	2
 */