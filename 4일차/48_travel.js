function solution(tickets) {

    var stack = [{
        last: 'ICN',
        ticket: tickets.slice(),
        path: ['ICN']
    }];

    var answer;
    while(stack.length > 0) {
        var gate = stack.pop();
        var i = 0;
        while(i < gate.ticket.length) {
            if(gate.ticket[i][0] == gate.last) {
                var tk = gate.ticket.map(v => v.slice());
                tk.splice(i, 1);
                var pt = gate.path.slice();
                pt.push(gate.ticket[i][1]);
                stack.push({
                    last: gate.ticket[i][1],
                    ticket: tk,
                    path: pt
                });
            }
            i++;
        }
        if(gate.ticket.length == 0) {
            if(!answer){
                answer = gate.path;   
            } else {        
                if(answer.toString() > gate.path.toString()) {
                    answer = gate.path;
                }
            }
        }
        // if(gate.path.length == tickets.length + 1) {
        //     console.log(gate.path.toString());
            
        // }
    }

    return answer;
}

// console.log(solution([['ICN', 'AAA'], ['AAA', 'BBB'], ['BBB', 'AAA'], ['AAA', 'ICN'], ['ICN', 'AAA']]));
// console.log(solution([['ICN', 'JFK'], ['HND', 'IAD'], ['JFK', 'HND']]));
console.log(solution([['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], ['ATL', 'SFO']]));

var arr2 = [[1, 2], [3, 4]];

var arr3 = arr2.map(v => {
    return v.slice();
});

arr2[0][1] = 4;

console.log(arr3);