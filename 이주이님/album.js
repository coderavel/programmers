function solution(genres, plays) {

    let map = new Map();

    for(let i =0; i<genres.length; i++){

        if(map.has(genres[i])){
            map.set(genres[i] , map.get(genres[i]) +  plays[i])
        }else{
            map.set(genres[i] , plays[i])
        }
    } 

    let tempArr = []

    while(map.size) {

        let max = 0;
        let key;

        for (let [k, v] of map) {

            if (max < v) {
                max = v;
                key = k;
            }  
        }

        tempArr.push(key);
        map.delete(key);
    }

    let topPlay = [];

    for(let i=0; i<tempArr.length; i++){

        let x = [];

        for(let j =0; j<genres.length; j++){

            if(tempArr[i] == genres[j]){
                x.push({
                    idx: j,
                    play: plays[j]
                });
            }
        }
        x.sort((a,b)=> {
            return b.play - a.play;
        });
        if(x.length === 1){
            topPlay.push(x[0].idx)
        }else{
            topPlay.push(x[0].idx,x[1].idx)
        }
    }

    return topPlay;

}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));