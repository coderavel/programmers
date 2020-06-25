function solution(jobs) {
    
    var cnt = jobs.length;

    jobs.sort((a, b) => {
        if(a[0] == b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }        
    });

    var next = [];
    var endTime = 0;
    var total = 0;
    while(jobs.length > 0 || next.length > 0)
    {
        if(next.length > 0) 
        {
            next.sort((a, b) => {
                return b[1] - a[1];
            });

            var work = next.pop();

            total = total + endTime - work[0] + work[1];

            endTime += work[1];
        }
        
        while(jobs.length > 0)
        {
            if(next.length > 0) {
                if(jobs[0][0] <= endTime) {
                    next.push(jobs.splice(0, 1)[0]);
                } else {
                    break;
                }
            } else {
                if(jobs[0][0] >= endTime) {
                    endTime = jobs[0][0] + jobs[0][1];
                    total += jobs[0][1];
                    jobs.splice(0, 1);
                }  else if(jobs[0][0] < endTime) {
                    next.push(jobs.splice(0, 1)[0]);
                }
                else {
                    break;
                }
            }
        }
    }
    return Math.floor(total / cnt);
}

console.log(solution([[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]]));
console.log(solution([[1, 9], [1, 4], [1, 5], [1, 7], [1, 3]]));