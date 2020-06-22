function solution(s){
    var answer = true;

    var val = 0;

    for(var i = 0; i < s.length; i++)
    {
        if(s[i] == '(') {
            val++;
        } else {
            val--;
            if(val < 0) {
                return false;
            }
        }
    }

    return val == 0;
}

console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));

/*
()()	true
(())()	true
)()(	false
(()(	false
 */