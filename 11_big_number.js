function solution(numbers) {
    var answer = numbers.map((v, i) => {
        return v + '';
    }).sort((a, b) => {
        return parseInt(b+a) - parseInt(a+b);
    }).join('');

    if(answer[0] == '0') {
        return '0';
    } else {
        return answer;
    }
}


// function solution(numbers) {
//     var answer = '';

//     if(numbers.reduce((t, c) => {
//         return t + c;
//     }, 0) === 0) {
//         return '0';
//     }

//     var list = numbers.map((v, i) => {
//         var ori = v.toString();
//         var nstr = ori;
//         var i = 0;
//         var len = nstr.length;
//         while(nstr.length < 4) {
//             nstr += nstr[i];
//             i = (i + 1) % len;
//         }
//         return { ori, nstr };
//     });
    
//     list.sort((a, b) => {
//         return b.nstr.localeCompare(a.nstr);
//     });

//     return list.map((v, i) => {
//         return v.ori;
//     }).toString().replace(/,/g, '');
// }

// console.log([6, 10, 2].sort());

// console.log('===================');
// console.log(solution([6, 10, 2]));

console.log('===================');
console.log(solution([3, 30, 34, 5, 9]));