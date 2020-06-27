function solution(genres, plays) {
    var answer = [];

    var hash = {};
    var list = [];

    var i = 0;
    while(i < genres.length) {

        if(hash[genres[i]] == undefined) {
            list.push({
                total: plays[i],
                music: [{
                    ai: i,
                    cnt: plays[i]
                }]
            });
            hash[genres[i]] = list.length - 1;
        } else {
            list[hash[genres[i]]].total += plays[i];
            list[hash[genres[i]]].music.push({
                ai: i,
                cnt: plays[i]
            });
        }
        i++;
    }

    console.log(hash);
    console.log(list);

    list.sort((a, b) => {
        return b.total - a.total;
    });

    list.forEach((v, i) => {
        v.music.sort((a, b) => {
            if(a.cnt != b.cnt) {
                return b.cnt - a.cnt;
            } else {
                return a.ai - b.ai;
            }
        });

        answer.push(v.music[0].ai);
        if(v.music.length > 1) {
            answer.push(v.music[1].ai);
        }        
    });

    return answer;
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));