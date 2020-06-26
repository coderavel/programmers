function solution(operations) {

    var queue = [];

    for(var i = 0; i < operations.length; i++)
    {
        var op = operations[i].split(' ');
        if(op[0] == 'I') {
            queue.push(parseInt(op[1]));
            queue.sort((a, b) => b - a);
        } else if(queue.length > 0) {
            if(op[1] == '1') {
                queue.shift();
            } else {
                queue.pop();
            }
        }
    }
    return queue.length ? queue : [0, 0]
}

console.log(solution(['I 16', 'D 1']));
console.log(solution(['I 7','I 5','I -5','D -1']));
console.log(solution(['I 1', 'I 5', 'I 3', 'D 1']));
// console.log(solution(['D 1','I 7','I 5','I -5','D -1']));
