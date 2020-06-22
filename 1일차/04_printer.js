
function solution(priorities, location) {
    var list = priorities.map((t,i) => {
        return {
            my : i === location,
            val : t };
    });
    console.log(list);
    var count = 0;        
    while(true){
        var cur = list.splice(0,1)[0];        
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.my) return count;
        }
    }
}

// function solution(p, t) {

//     var idx = p.map((v, i) => {
//         return i;
//     });

//     var order = 1;
//     var end = p.length;

//     while(order < p.length)
//     {
//         var max = 0;
//         var ino = -1;
//         for(var k = 0; k < end; k++)
//         {
//             if(idx[k] != -1){
//                 if(max < p[k]) {
//                     max = p[k];
//                     ino = k;
//                 } else if(max == p[k]) {
//                     if(idx[ino] > idx[k]) {
//                         ino = k;
//                     }
//                 }
//             }
//         }

//         if(ino == t) break;

//         var midx = idx[ino];
//         for(var i = 0; i < end; i++)
//         {
//             if(idx[i] != -1) {
//                 if(idx[i] < midx) {
//                     idx[i] = end - midx + idx[i] - 1;
//                 } else {
//                     idx[i] = idx[i] - midx - 1;
//                 }
//             }
//         }

//         idx[ino] = -1;
//         order++;
//     }

//     return order;
// }

console.log('============================');
console.log(solution([2, 1, 3, 2], 2) == 1);

console.log('============================');
console.log(solution([1, 1, 9, 1, 1, 1], 0) == 5);