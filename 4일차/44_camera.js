// 레벨 3, 단속카메라

function solution(routes) {

    routes.sort((a, b) => {
        return a[0] - b[0];
    });
    
    var carmera = 1;
    var begin = routes[0][0];
    var end = routes[0][1];
    var i = 1;
    while(i < routes.length) {
        if(routes[i][0] <= end) {
            if(routes[i][0] > begin) {
                begin = routes[i][0];
            }
            if(routes[i][1] < end) {
                end = routes[i][1];
            }
        } else {
            carmera++;
            begin = routes[i][0];
            end = routes[i][1];
        }
        i++;
    }

    return carmera;
}

console.log(solution([[-20,15], [-14,-5], [-18,-13], [-5,-3]]));