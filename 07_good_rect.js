
function solution(w,h){
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };

    return w * h - (w + h - gcd(w, h));
}

// function solution(w, h) {

//     var cnt = 0;
//     var py = 0;
//     for(var x = 1; x <= w; x++)
//     {
//         var y = Math.ceil(x * h / w);
//         cnt += h - y;
//     }

//     cnt *= 2;

//     return cnt;
// }

console.log('============================');
// console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
console.log(solution(8, 12) == 80);