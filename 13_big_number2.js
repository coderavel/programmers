function solution(number, k) {
    
    var i = 0;
    var ci = -1;
    var coll = [];

    while(k >= 0 && i < number.length) {

        while(ci >= 0 && k > 0) {
            if(coll[ci] < number[i]) {
                coll.pop();
                ci--;
                k--;
            } else {
                break;
            }
        }

        coll.push(number[i]);
        ci = coll.length - 1;
        i++;
    }

    for(var i = 0; i < k; i++)
    {
        coll.pop();
    }

    return coll.join('');
}


// console.log(solution('98769876', 3));

console.log(solution('77777777', 4));
