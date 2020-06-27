function solution(weight) {

    weight.sort((a, b) => a - b);

    var last = 0;
    var target = 1;
    while(true) {

        for(var k = last + 1; k < weight.length; k++)
        {
            if(target != weight[k]) {
                last = k;
            }
            target++;
        }
        
        var t2 = target;
        var check = false;
        for(var i = weight.length - 1; i >= 0; i--)
        {
            if(weight[i] <= t2) {
                t2 -= weight[i];
                if(t2 == 0) {
                    check = true;
                    break;
                }
            }
        }

        if(!check) return target;
    }
}

console.log(solution([3, 1, 6, 2, 7, 30, 1]));