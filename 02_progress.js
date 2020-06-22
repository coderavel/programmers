function solution(p, s) {

    var g = [1];
    var gi = 0;
    var curDays = Math.ceil((100 - p[0]) / s[0]);

    var i = 1;
    while(i < p.length)
    {
        var days = Math.ceil((100 - p[i]) / s[i]);
        
        if(curDays >= days) {
            g[gi]++;
        } else {
            curDays = days;
            g.push(1);
            gi++;
        }
        i++;
    }

    return g;
}

console.log(solution([93,30,55], [1, 30, 5]));