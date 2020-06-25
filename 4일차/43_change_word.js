function CheckWord(str, str2, len) {

    var diff = 0;
    for(var i = 0; i < len; i++)
    {
        if(str[i] != str2[i]) {
            diff++;
        }
    }

    if(diff != 1) return false;
    else return true;
}

function solution(begin, target, words) {
    var answer = 0;

    var stack = [];

    var visit = words.map((v) => {
        return false;
    });

    for(var i = 0; i < words.length; i++)
    {
        if(CheckWord(begin, words[i], begin.length)) {
            stack.push({
                idx: i,
                cnt: 1,
                word: words[i]
            });
        }
    }

    while(stack.length > 0) {

        console.log(stack);

        var item = stack.pop();
        visit[item.idx] = true;

        if(item.word == target) return item.cnt;

        for(var i = 0; i < words.length; i++)
        {
            if(!visit[i] && CheckWord(item.word, words[i], begin.length)) {
                stack.push({
                    idx: i,
                    cnt: item.cnt + 1,
                    word: words[i]
                });
            }
        }
    }

    return 0;
}