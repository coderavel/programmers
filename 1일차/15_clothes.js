function solution(clothes) {

    var hash = {};

    for(var i = 0; i < clothes.length; i++)
    {
        if(!hash[clothes[i][1]]) {
            hash[clothes[i][1]] = [clothes[i][0]]
        } else {
            hash[clothes[i][1]].push(clothes[i][0]);
        }
    }

    var keys = Object.keys(hash);
    var total = hash[keys[0]].length + 1;
    delete hash[keys[0]];
    for(var i in hash)
    {
        total *= hash[i].length + 1;
    }
    
    total -= 1;

    return total;
}

console.log(solution([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']]));