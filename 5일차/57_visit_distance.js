function solution(dirs) {
    var answer = 0;

    var x = 0;
    var y = 0;

    var map = new Map();

    var i = 0;
    while(i < dirs.length)
    {
        var sx = x;
        var sy = y;
        if(dirs[i] == 'U' && y < 5) {
            y++;
        } else if(dirs[i] == 'D' && y > -5) {
            y--;
        } else if(dirs[i] == 'R' && x < 5) {
            x++;
        } else if(dirs[i] == 'L' && x > -5) {
            x--;
        }

        var key = '' + x + y;
        var val = '' + sx + sy;

        var check = 0;
        
        if(map.has(key)) {
            var l = map.get(key);            
            if(l.indexOf(val) == -1) {
                check++;
                l.push(val);
            }
        } else {
            map.set(key, [val]);
            check++;
        }

        if(map.has(val)) {
            var l = map.get(val);
            if(l.indexOf(key) == -1) {
                check++;
            }
        } else {
            check++;
        }
        
        if(check == 2) {
            answer++;
        }
        i++;
    }

    console.log(map);

    return answer;
}

console.log(solution('ULURRDLLU'));
console.log(solution('LULLLLLLU'));