function solution(bridge_length, weight, truck_weights) {
    
    var answer = 2;
    
    var total = truck_weights[0];
    var up = 1;

    var exit = [bridge_length + 1];
    var down = 0;

    while(true)
    {
        if(exit[down] == answer) {
            total -= truck_weights[down];
            down++;
            if(down == truck_weights.length) {
                break;
            }
        }

        if(total + truck_weights[up] <= weight)
        {
            total += truck_weights[up];
            exit.push(answer + bridge_length);
            answer++;
            up++;
        } else {
            answer = exit[down];
        }
    }

    return answer;
}




console.log(solution(2, 10, [7, 4, 5, 6]) == 8);
console.log(solution(100, 100, [10]) == 101);
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]) == 110);