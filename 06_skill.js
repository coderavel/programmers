
function solution(skill, skill_trees) {
    var answer = 0;
    var regex = new RegExp(`[^${skill}]`, 'g');

    return skill_trees
        .map((x) => {
            return x.replace(regex, '');
        })
        .filter((x) => {
            return skill.indexOf(x) === 0 || x === "";
        })
        .length
}


// function solution(skill, skill_trees) {

//     console.log(regex);

//     var sa = skill.split('');

//     var cnt = skill_trees.length;

//     for(var i = 0; i < skill_trees.length; i++)
//     {
//         var order = skill_trees[i].indexOf(sa[0]);
//         for(var j = 1; j < sa.length; j++)
//         {
//             var pos = skill_trees[i].indexOf(sa[j]);
//             if(order == -1 && pos != -1) {
//                 cnt--;
//                 break;
//             } else if(pos != -1 && order > pos) {
//                 cnt--;
//                 break;
//             }
//             order = pos;
//         }
//     }

//     return cnt;
// }

console.log('============================');
// console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]) == 2);
