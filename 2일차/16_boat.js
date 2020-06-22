function solution(people, limit) {

    var answer = 0;

    people.sort((a, b) => a - b);

    var i = 0;
    var j = people.length - 1;
    while(i < j)
    {
        if(people[i] + people[j] <= limit) {
            i++;
        }
        answer++;
        j--;
    }

    if(i == j) answer++;
    
    return answer;
}

console.log(solution([20, 20, 10, 20], 20));
console.log(solution([70, 80, 50], 100));