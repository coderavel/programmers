// 레벨 2, 끝말잇기

function solution(n, words) {
    var answer = [];

    var i = 1;
    var order;
    var no;
    var check = false;
    while(i < words.length) {
        if(words[i][0] != words[i - 1][words[i-1].length - 1]) {
            check = true;
            break; 
        } else if(words.indexOf(words[i]) != i) {
            check = true;
            break;
        }
        i++;
    }

    if(!check) {
        return [0, 0];
    }

    no = i % n + 1;
    order = Math.floor(i / n) + 1;

    return [no, order];
}

console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']));
console.log(solution(5, ['hello', 'observe', 'effect', 'take', 'either', 'recognize', 'encourage', 'ensure', 'establish', 'hang', 'gather', 'refer', 'reference', 'estimate', 'executive']));
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']));