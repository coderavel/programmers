function solution(budgets, maxBudget) {
    var answer = 0;

    budgets.sort((a, b) => a - b);

    var total = budgets.reduce((p, v) => {
        return p + v;
    }, 0);

    if(total <= maxBudget) {
        return budgets[budgets.length - 1];
    }

    for(var i = 0; i < budgets.length; i++)
    {
        answer = Math.floor(maxBudget / (budgets.length - i));
        console.log(answer);
        if(budgets[i] <= answer) {
            maxBudget -= budgets[i];
        } else {
            return answer;
        }
    }
}

console.log(solution([120, 110, 140, 150], 485));