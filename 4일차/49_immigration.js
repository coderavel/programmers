// // 방법 1: 시간초과
function solution(n, times) {

    var window = times.map(v => 0);

    var curTime = 0;

    while(n > 0) {

        var minTime = window[0];
        var min = window[0] + times[0];
        var mi = 0;
        for(var i = 1; i < window.length; i++)
        {
            var pred = window[i] + times[i];
            if(min > pred) {
                min = pred;
                mi = i;
            } 

            if(minTime > window[i]) {
                minTime = window[i];
            }
        }
        
        window[mi] = min;
        curTime = minTime;
        n--;
    }

    return Math.max(...window);
}

// 방법 2
function solution(n, times) {

    times.sort((a, b) => a - b);
    var low = 1;
    var high = times[times.length - 1] * n;
    
    var answer = Math.floor((low + high) / 2);

    while(low <= high) {
        var mid = Math.floor((low + high) / 2);
        var cnt = 0;

        for(var i = 0; i < times.length; i++) {
            cnt += Math.floor(mid / times[i]);
        }

        if(cnt >= n) {
            answer = Math.min(answer, mid);
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    return answer;
}

console.log(solution(6, [7, 10]));