// 레벨 2, JadenCase 문자열

function solution(str) {

    var end = true;
    for (var i = 0; i < str.length; i++) {
        if (end) {
            if (str[i] != ' ') {   // first word                
                end = false;
                var c = str.charCodeAt(i);
                if (97 <= c && c <= 122) {
                    str = str.slice(0, i).concat(str[i].toUpperCase()).concat(str.slice(i + 1));
                }
            }
        } else {
            if (str[i] == ' ') {
                end = true;
            } else {
                var c = str.charCodeAt(i);
                if (65 <= c && c <= 90) {
                    str = str.slice(0, i).concat(str[i].toLowerCase()).concat(str.slice(i + 1));
                }
            }
        }
    }

    return str;
}

console.log('a'.charCodeAt(0));
console.log('z'.charCodeAt(0));
console.log('A'.charCodeAt(0));
console.log('Z'.charCodeAt(0));
console.log(solution('3people unFollowed me'));
console.log(solution('for the last week'));